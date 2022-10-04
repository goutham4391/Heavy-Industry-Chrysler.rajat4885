!function(){var _init=function(){window.wdgtHelperInitialized=!0,Handlebars.registerHelper("ifMinWidth",function(minWidth,options){return window.matchMedia("(min-width: "+minWidth+"px)").matches?options.fn(this):options.inverse(this)}),Handlebars.registerHelper("render",function(template){for(var data={},i=1;i<arguments.length-1;i++)i%2!=0&&(data[arguments[i]]=arguments[i+1]);return Handlebars.compile(document.getElementById(template).innerHTML)(data)}),Handlebars.registerHelper("plusOne",function(number){return number+1}),Handlebars.registerHelper("compare",function(a,operator,b,options){var operators,result;if(arguments.length<3)throw new Error("Handlerbars Helper 'compare' needs 2 parameters");if(options||(options=a,a=operator,operator="=="),operators={"==":function(l,r){return l==r},"===":function(l,r){return l===r},"!=":function(l,r){return l!=r},"<":function(l,r){return l<r},">":function(l,r){return r<l},"<=":function(l,r){return l<=r},">=":function(l,r){return r<=l},"%":function(l,r){return l%r==0},rx:function(l,r){return!0===eval(l).test(r)},typeof:function(l,r){return typeof l===r}},!operators[operator])throw new Error("Handlerbars Helper 'compare' doesn't know the operator "+operator);return result=operators[operator](a,b),result?options.fn(this):options.inverse(this)}),Handlebars.registerHelper("Vehicles",function(method,ccode){var args={ccode:ccode,year:Vehicles.getYearFromMYC(ccode.substring(0,9)),vehicle:Vehicles.getFamilyFromMYC(ccode.substring(0,9)),model:Vehicles.getModelFromCcode(ccode)};return-1!==method.indexOf("FromCcode")?Vehicles[method](ccode):Vehicles[method](args)}),Handlebars.registerHelper("getEvarProps",function(_ccode,_type){var trackYear=Handlebars.helpers.getYear(_ccode),trackVehicle=Handlebars.helpers.getVehicle(_ccode),trackTrim=Handlebars.helpers.Vehicles("getTrim",_ccode),modelYearCode=_ccode.substring(0,9);return modelYearCode&&DATALAYER.getVehicleModel&&(trackVehicle=DATALAYER.getVehicleModel(modelYearCode.substr(-2))),_type?'{"eVar49":"'+trackTrim+'","eVar48":"'+trackYear+'","eVar5":"'+trackVehicle+":"+trackTrim+'"}':'{"prop49":"'+trackTrim+'","prop48":"'+trackYear+'","prop1":"'+trackVehicle+":"+trackTrim+'"}'}),Handlebars.registerHelper("getVehicle",function(ccode){return Vehicles.getFamilyFromMYC(ccode.substring(0,9))}),Handlebars.registerHelper("getYear",function(){return cllc.context.get("year")}),Handlebars.registerHelper("getModelFromCcode",function(ccode){return Vehicles.getModelFromCcode(ccode)}),Handlebars.registerHelper("specialOffer",function(str){var specialOfferText=void 0!==str&&0<str.length?str:null;if(!specialOfferText)return str;var charLength=specialOfferText.length,customOfferClass="";return 0<charLength&&charLength<=25?customOfferClass="gcss-typography-utility-heading-2":25<charLength&&charLength<=60?customOfferClass="gcss-typography-utility-heading-7":60<charLength&&(customOfferClass="gcss-typography-label-1"),specialOfferText=specialOfferText.replace(/\[/g,'<span class="gcss-typography-label-9">[').replace(/]/g,"]</span>"),new Handlebars.SafeString("<span class='"+customOfferClass+"'>"+specialOfferText+"</span>")}),Handlebars.registerHelper("isNotInLaunchMode",function(ccode,data,options){var result=!1,dataArray=Array.isArray(data)?data.slice(0):[];return data&&Array.isArray(data.noInventoryArray)&&Array.isArray(data.noInventoryArray)&&(dataArray=data.noInventoryArray.concat(data.noPricingArray)),ccode&&0<dataArray.length&&dataArray.forEach(function(d){d.ccode!=ccode||result||(result=!0)}),result?options.inverse(this):options.fn(this)}),Handlebars.registerHelper("formatPrice",function(val){if(!val)return"-";var price=val;return price=window.parseInt(price),(price=String(price)).length<=3?price:price.replace(/^(\d{1,})(\d{3})$/,"$1,$2")})};window.wdgtHelperInitialized||_init.call(this)}();