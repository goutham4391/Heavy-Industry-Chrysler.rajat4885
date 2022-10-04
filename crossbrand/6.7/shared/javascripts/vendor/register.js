try { console.log('init console... done'); } catch(e) { console = { log: function() {} }; }

var window_onload = new Array;


/* onload handler setter */
var onloadRef = window.onload;


/*
window.ie - will be set to true if the current browser is internet explorer (any).
window.ie6 - will be set to true if the current browser is internet explorer 6.
window.ie7 - will be set to true if the current browser is internet explorer 7.
window.khtml - will be set to true if the current browser is Safari/Konqueror.
window.gecko - will be set to true if the current browser is Mozilla/Gecko.
*/

if (window.ActiveXObject) window.ie = window[window.XMLHttpRequest ? 'ie7' : 'ie6'] = true;
else if (document.childNodes && !document.all && !navigator.taintEnabled) window.khtml = true;
else if (document.getBoxObjectFor != null) window.gecko = true;

window.onload = function() {
	if(onloadRef != null) {
		onloadRef();
	}
	for(var i = 0; i < window_onload.length; i++){
		eval( window_onload[i]);
	}
};

function onload_register(func){
	window_onload.push(func);
}
/* end onload handler */


// Identical to getParameter() except sniffs the contents of the URL's # anchor instead of the ? query parameters
function getHashParameter(aP){var qS = new String(location.hash.substring(1,location.hash.length));var p = qS.split("&");var val = "";if(aP){for(i=0;i<p.length;i++){if(p[i].split( "=" )[0] == aP){val = p[i].split( "=" )[1];}}return val;}}
