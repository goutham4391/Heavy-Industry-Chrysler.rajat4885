chryslerUtil = function()
{
	this.formatCurrency = function(expression, includeCents, includeDollarSign)
	{
		expression = expression.toString().replace(/\$|\,/g, "");
		
		if (isNaN(expression))
		{
			expression = "0";
		}
		
		var sign = (expression == (expression = Math.abs(expression)));
		expression = Math.floor(expression * 100 + 0.50000000001);
		
		if (includeCents)
		{
			var cents = expression % 100;
			
			if (cents < 10)
			{
				cents = "0" + cents;
			}
		}
		
		expression = Math.floor(expression / 100).toString();
		
		for (var i = 0; i < Math.floor((expression.length - (1 + i)) / 3); i++)
		{
			expression = expression.substring(0, expression.length - (4 * i + 3)) + "," + expression.substring(expression.length - (4 * i + 3));
		}
		
		return (((sign) ? "" : "-") + ((includeDollarSign) ? "$" : "") + expression + ((includeCents) ? "." + cents : ""));
	};
	
	this.isArray = function(object)
	{
		if (object)
		{
			return (object.constructor == Array);
		}
		
		return false;
	};
	
	this.addEventListener = function(element, eventName, eventHandler, scope, params)
	{
		var scopedEventHandler = eventHandler;
		
		if (scope)
		{
			scopedEventHandler = function(event)
			{
				if (params)
				{
					if (params[params.length - 1].type)
					{
						params[params.length - 1] = event;
					}
					else
					{
						params.push(event);
					}
				}
				else
				{
					params = [event];
				}
				
				eventHandler.apply(scope, params);
			}
		}
		
		if (element.addEventListener)
		{
			element.addEventListener(eventName, scopedEventHandler, false);
		}
		else if (element.attachEvent)
		{
			element.attachEvent("on" + eventName, scopedEventHandler);
		}
	};
	
	this.removeEventListener = function(element, eventName, callback)
	{
		if (element.removeEventListener)
		{
			element.removeEventListener(eventName, callback, false);
		}
		else if (element.detachEvent)
		{
			element.detachEvent("on" + eventName, callback);
		}
	};
	
	this.getUrlParams = function()
	{
		var oLocal = {},
			oReturn = {};
			
		oLocal.query = document.location.href.split('?');
		if( oLocal.query[1] ){
			oLocal.vars = oLocal.query[1].split('&');
			
			for( oLocal.i = 0; oLocal.i < oLocal.vars.length; oLocal.i++ ){
				oLocal._this = oLocal.vars[oLocal.i].split('=');
				oReturn[ oLocal._this[0] ] = oLocal._this[1];
			}
		}
		
		return oReturn;
	};
	
	this.toString = function()
	{
		return "[object chryslerUtil]";
	};
};

if (chrysler)
{
	chrysler.util = new chryslerUtil();
}
if (!Array.prototype.filter) {
  Array.prototype.filter = function(fun /*, thisp*/) {
    'use strict';

    if (!this) {
      throw new TypeError();
    }

    var objects = Object(this);
    var len = objects.length >>> 0;
    if (typeof fun !== 'function') {
      throw new TypeError();
    }

    var res = [];
    var thisp = arguments[1];
    for (var i in objects) {
      if (objects.hasOwnProperty(i)) {
        if (fun.call(thisp, objects[i], i, objects)) {
          res.push(objects[i]);
        }
      }
    }

    return res;
  };
}
Array.prototype.contains = function(value)
{
	var i = this.length;
	
	while (i--)
	{
		if (this[i] === value)
		{
			return true;
		}
	}
	
	return false;
};

Array.prototype.indexOf = function(value)
{
	for (var i = 0; i < this.length; i++)
	{
		if (this[i] == value)
		{
			return i;
		}
	}
	
	return -1;
};

Array.prototype.remove = function(value)
{
	this.removeAt(this.indexOf(value));
};

Array.prototype.removeAt = function(index)
{
	this.splice(index, 1);
};

String.format = function()
{
	var expression = arguments[0];
	
	for (var i = 0; i <= arguments.length - 1; i++)
	{
		expression = expression.replace(new RegExp("\\{" + i + "\\}", "gm"), arguments[i + 1]);
	}
	
	return expression;
};

String.isNullOrWhiteSpace = function(expression)
{
	return !expression || !/\S/.test(expression);
};

String.prototype.trim = function()
{
	var thisString = this.replace(/^\s\s*/, "");
	var i = thisString.length;
	while ((/\s/).test(thisString.charAt(--i)));
	return thisString.slice(0, i + 1);
};
