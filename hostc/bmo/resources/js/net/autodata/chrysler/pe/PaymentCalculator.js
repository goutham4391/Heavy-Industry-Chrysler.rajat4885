(function () {

    function isNumeric(v) {
        return typeof v === 'number' && isFinite(v);
    }

    function ns()
    {
        var o;
        function f1(v) {
            var d = v.split(".");
            o = window[d[0]] = window[d[0]] || {};
            var slice = [].concat(d.slice(1));

            function f2(v2) {
                o = o[v2] = o[v2] || {};
            }

            for (var j=0; j<slice.length; j++) {
                f2(slice[j]);
            }

            return o;
        }

        for (var i=0; i<arguments.length; i++) {
            f1(arguments[i]);
        }

        return o;
    }

    ns('net.autodata.chrysler.pe');

    var ERROR_CODES = {
        INVALID_PARAM: 1,
        PARAM_NAN: 2,
        INVALID_RESIDUAL: 4
    };

    /**
     * The payment methods will return the following result object

     Success response
     {
        payment: undefined
     }

     Failure Response
     {
        payment: undefined,
        error: {
            message: 'Reason the calculation failed',
            data: {} //custom object to return additional information
        }
    }
     * @param payment
     * @param errorMessage
     * @param [errorData] Optional object with additional error information
     */
    function createResult(payment, errorCode, errorMessage, errorData)
    {
        var result = {
            payment: payment
        };

        if (errorMessage !== undefined) {
            result.error = {
                code: errorCode,
                message: errorMessage,
                data: errorData
            };
        }

        return result;
    }

    var financeRequiredNumericParams = [ 'rate', 'term', 'vehiclePrice', 'destination' ];
    var leaseRequiredNumericParams = financeRequiredNumericParams.concat(['residual','incentives']);
    var optionalNumericParams = ['downPayment', 'tradeInValue', 'otherCapCosts', 'dealerDiscount'];

    function validateNumericParams(required, optional, params)
    {
        var result = validateRequiredNumericParams(required, params);
        if (result === true) {
            result = validateOptionalNumericParams(optional, params);
        }

        return result;
    }

    function validateRequiredNumericParams(requiredParamList, params)
    {
        var IP = ERROR_CODES.INVALID_PARAM;

        for (var i=0; i<requiredParamList.length; i++) {
            var pn = requiredParamList[i];
            var p = params[pn];

            if (!isNumeric(p)) {
                return createResult(undefined, IP, pn + ' is a required parameter');
            }
        }

        return true;
    }

    function validateOptionalNumericParams(optionalParamList, params)
    {
        var PNAN = ERROR_CODES.PARAM_NAN;
        for (var i=0; i<optionalParamList.length; i++) {
            var pn = optionalParamList[i];
            var p = params[pn];

            if (p !== undefined && !isNumeric(p)) {
                return createResult(undefined, PNAN, pn + ' is not a valid number');
            }
        }

        return true;
    }

    function validateValue(number)
    {
        var n = number || 0;
        return n > 0 ? n : 0;
    }

    var Calculator = {

        getLeasePayment: function (params)
        {
            params = params || {}; //to make things easier ensure params is an object

            //Perform numeric param validation
            var validationResult = validateNumericParams(leaseRequiredNumericParams, optionalNumericParams, params);
            if (validationResult !== true) {
                return validationResult;
            }

            // Formula:
            //     PV-FV(1+I)^-N
            //------------------------   x A
            //((1-(1+I)^(-(N-A))/I)+A

            var residual = validateValue(params.residual);
            if (residual === 0) {
                return createResult(undefined, ERROR_CODES.INVALID_RESIDUAL, "Residual value cannot be zero");
            }

            var vehiclePrice = validateValue(params.vehiclePrice);
            var destination = validateValue(params.destination);
            var incentives = validateValue(params.incentives);
            var downPayment = validateValue(params.downPayment);
            var tradeInValue = validateValue(params.tradeInValue);
            var otherCapCosts = validateValue(params.otherCapCosts);
            var dealerDiscount = validateValue(params.dealerDiscount);
            var advancePayment=1;
            if ((params.advancePayment !== undefined)) {
                advancePayment=params.advancePayment;
            }
            var price = (vehiclePrice + destination + otherCapCosts);
            var FV=(residual/100)*(price);
            var A=advancePayment; //advanced payment
            var I=params.rate / 1200;
            var PV= price - (incentives + downPayment + tradeInValue + dealerDiscount);
            var payment=0;
            if (I > 0) {
                var numerator=PV - (FV * Math.pow(1+I,-1*params.term));
                var denominator= ((1 - Math.pow(1+I,-1*(params.term-A)))/I)+A;
                payment=(numerator/denominator);
            } else {
                payment=(PV - FV)/params.term;
            }
            return {
                payment: payment
            };
        },

        getFinancePayment: function (params)
        {
            params = params || {}; //to make things easier ensure params is an object

            //Perform numeric param validation
            var validationResult = validateNumericParams(financeRequiredNumericParams, optionalNumericParams, params);
            if (validationResult !== true) {
                return validationResult;
            }

            var vehiclePrice = validateValue(params.vehiclePrice);
            var incentives = validateValue(params.incentives);
            var destination = validateValue(params.destination);

            var downPayment = validateValue(params.downPayment);
            var tradeInValue = validateValue(params.tradeInValue);
            var otherCapCosts = validateValue(params.otherCapCosts);
            var dealerDiscount= validateValue(params.dealerDiscount);
            //(P*I(1_I)^N)/(1+I)^N - 1;
            var I=params.rate / 1200;
            var payment=0;
            var P=(vehiclePrice + destination + otherCapCosts) - (incentives + downPayment + tradeInValue + dealerDiscount);
            if (I>0) {
                var denominator=(Math.pow((1+I),params.term)) - 1;
                var numerator=P * (I*Math.pow((1+I), params.term));
                payment=numerator/denominator;
            } else {
                payment=P/params.term;
            }

            return {
                payment: payment
            };
        },

        getPayment: function (params)
        {
            params = params || {};
            if (params.category === 'apr' || params.category === 'cash') {
                return this.getFinancePayment(params);
            } else {
                return this.getLeasePayment(params);
            }
        }

    };

    net.autodata.chrysler.pe.PaymentCalculator = Calculator;
    net.autodata.chrysler.pe.PaymentCalculator.ERROR_CODES = ERROR_CODES;

})();
