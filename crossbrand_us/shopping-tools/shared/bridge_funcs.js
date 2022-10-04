function appTranslate(app){return"fulfillment"==app?app="brochure":"newinventory"==app?app="sni":"daa"==app?app="incentives":"priceequip"==app?app="bmo":"vehiclespecs"==app?app="specs":"cdl"==app||"dealer_site"==app||"fad"==app?app="dealer":"vehicleselector"==app&&(app="selector"),app}function getParameter(argParam){var params=location.search.substring(1,location.search.length).split("&"),val="";if(argParam){for(var i=0,ii=params.length;i<ii;i++)params[i].split("=")[0]==argParam&&(val=params[i].split("=")[1]);return void 0===val&&(val=""),val}return val}function jsonToQuery(obj){var queryString="";for(var key in obj)obj[key]&&(queryString+=key+"="+obj[key]+"&");return queryString=queryString.replace(/&$/,"")}function stringToJson(query){var queryObj={},queryArr=[];(queryArr=query.replace("?","").split("&")).sort();for(var q=0,qArrLength=queryArr.length;q<qArrLength;q++){var qArr=queryArr[q].split("="),key=qArr[0],value=qArr[1];value&&(queryObj[key]=value)}return queryObj}function getQueryParams(){return stringToJson(location.search)}function getCookie(name){var cName="",pCOOKIES=[];pCOOKIES=document.cookie.split("; ");for(var i=0;i<pCOOKIES.length;i++){var NmeVal;(NmeVal=pCOOKIES[i].split("="))[0]==name&&(cName=unescape(NmeVal[1]))}return cName}function setCookie(name,value,expires,path,domain,secure){var cookieLife,today,cookieStr=name+"="+escape(value)+"; ";expires&&(cookieLife=expires,today=new Date,cookieStr+="expires="+(expires=new Date(today.getTime()+24*cookieLife*60*60*1e3).toGMTString())+"; "),cookieStr+=path?"path="+path+"; ":"path=/; ",domain&&(cookieStr+="domain="+domain+"; "),secure&&(cookieStr+="secure; "),document.cookie=cookieStr}function deleteCookie(name){setCookie(name,"",-1,"/")}function formatQueryString(queryStr){var queryArr=[],queryString="";if("string"==typeof queryStr){(queryArr=queryStr.replace(/^(\?|&)/,"").split("&")).sort();for(var q=0,qArrLength=queryArr.length;q<qArrLength;q++){var qArr=queryArr[q].split("=");2==qArr.length&&qArr[1]&&(queryString+=queryArr[q]+"&")}queryString=queryString.replace(/&$/,"")}else"object"==typeof queryStr&&(queryString=jsonToQuery(queryStr));return queryString}function doRedirect(path,query,hash){var url=path;query&&(url+="?"+formatQueryString(query)),hash&&(-1==hash.indexOf("#")&&(hash="#"+hash),url+=hash),window.location.replace(url)}function pickerPage(app,subBrand){var pickerPage="/lineup.html";app&&(pickerPage="sni"===app||"pe"===app||"incentives"===app?"/vehicle-selector."+app+".html":"/lineup."+app+".html"),subBrand&&(pickerPage="/"+subBrand+pickerPage),-1!==location.hostname.indexOf("alfaromeousa")&&(pickerPage="sni"===app||"pe"===app||"incentives"===app?"/vehicle-selector."+app:"/lineup."+app);var url=pickerPage,campaign=getCampaign(),query="app="+app;campaign&&(query+="&"+campaign),doRedirect(url,query)}function getCampaign(){var campaign="",mktcode=getMarketCode();return mktcode&&(campaign=formatQueryString(mktCodeFilter(mktcode))),deleteCookie("mktcode"),campaign}function mktCodeFilter(obj){var PARAMS=["BC","KWID","KWNM","TR","adid","ax_src","ax_src_a_1","ax_src_a_10","ax_src_a_11","ax_src_a_12","ax_src_a_13","ax_src_a_14","ax_src_a_15","ax_src_a_16","ax_src_a_2","ax_src_a_3","ax_src_a_4","ax_src_a_5","ax_src_a_6","ax_src_a_7","ax_src_a_8","ax_src_a_9","bid","buytype","ccid","channel","cid","pid","pref","sid","spid","stid","tarid","pida","pidb","ctp","crv","act","coin","dclid"],mktCode={};for(var key in obj)0<=PARAMS.indexOf(key)&&(mktCode[key]=obj[key]);return mktCode}function setMarketCode(){var marketCodeObj=getQueryParams();setCookie("mktcode",JSON.stringify(marketCodeObj),1,"/")}function getMarketCode(){var marketCodeCookie=getCookie("mktcode");return!!marketCodeCookie&&JSON.parse(marketCodeCookie)}function mktcode_redirect(brand){var app=getParameter("app"),zipcode=getParameter("zipcode"),path="/crossbrand_us/common/bridge/"+brand+"/bridge.html",query=formatQueryString(location.search);zipcode&&setCookie("zipcode",zipcode,365,"/"),app?doRedirect(path,query):doRedirect("/",getCampaign())}String.prototype.includes||(String.prototype.includes=function(search,start){return"number"!=typeof start&&(start=0),!(start+search.length>this.length)&&-1!==this.indexOf(search,start)}),Array.prototype.indexOf||(Array.prototype.indexOf=function(searchElement,fromIndex){if(null==this)throw new TypeError('"this" is null or not defined');var length=this.length>>>0;for(fromIndex=+fromIndex||0,Math.abs(fromIndex)===1/0&&(fromIndex=0),fromIndex<0&&(fromIndex+=length)<0&&(fromIndex=0);fromIndex<length;fromIndex++)if(this[fromIndex]===searchElement)return fromIndex;return-1}),Array.prototype.filter||(Array.prototype.filter=function(fun){if(null==this)throw new TypeError;var t=Object(this),len=t.length>>>0;if("function"!=typeof fun)throw new TypeError;for(var res=[],thisArg=2<=arguments.length?arguments[1]:void 0,i=0;i<len;i++)if(i in t){var val=t[i];fun.call(thisArg,val,i,t)&&res.push(val)}return res});