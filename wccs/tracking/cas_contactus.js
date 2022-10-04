<!--CHRYSLER ANALYTICS SYSTEM (CAS) CODE VERSION 1.0 (Universal)-->

var jsFileInclude = "<script language='javascript1.1' src='cas.js'></script>";
var jsFile = "cas.js";

var tmp = location.hostname.split(".");
var env = tmp[1];
var brand = env;
var pathName = location.pathname;
var country = country;
if (typeof country == "undefined") {
country = "us";
} 
var pageNameRebuilt = "/"+ brand +"/" +country+ pathName +" - " + pageName;


function setPageViewVariables(){
  var path = pageNameRebuilt;
  var pathTokens = path.substring(1).split("/");
  var tokenCount = pathTokens.length;
  if (tokenCount > 10) tokenCount = 10;                                       
  var pathPageName = path;
  if (pathTokens[pathTokens.length - 1] == "") pathPageName += "index.html";
  
  if (typeof pv == 'undefined') pv = new Object();
  for (count = 0; count < tokenCount; count++) {
   pv['p.a_' + (count + 1)] = pathTokens[count];
  } 
      
  if (typeof pageName != 'undefined') {
   // First check and see if we have a "pageName" variable set in the page
    pv['name'] = pageNameRebuilt;                                               
 } else if (typeof hbx.pn != 'undefined') {
   // If not, look for hbx.pn and set that and use hbx.mlc as the first attribute
   // (potentially overriding the first part of the path token set above)
   pv['name'] = hbx.pn;
   pv['p.a_10'] = hbx.mlc;
  } else {  
   // If none of the other options work, use the page name from the URL.
   pv['name'] = pathPageName;
  }
}

function getAccountNumber(){
	var acctNumber = "100361";         //Default to Untagged 100361.	
	var tmp = location.hostname.split(".");   
	var png = tmp[0].toLowerCase();
	
	
	if (png.indexOf("www") >= 0 && brand.indexOf("jeep") >= 0){
		acctNumber = "100365";
	} else if (png.indexOf("www") >= 0 && brand.indexOf("chrysler") >= 0){
		acctNumber = "100364";
	} else if (png.indexOf("www") >= 0 && brand.indexOf("dodge") >= 0){
		acctNumber = "100363";
	} else if (png.indexOf("www") >= 0 && brand.indexOf("ramtrucks") >= 0){
		acctNumber = "100367";
	} else if (png.indexOf("www") == -1 && brand.indexOf("jeep") >= 0){
		acctNumber = "100355";
	} else if (png.indexOf("www") == -1 && brand.indexOf("chrysler") >= 0){
		acctNumber = "100357";
	} else if (png.indexOf("www") == -1 && brand.indexOf("dodge") >= 0){
		acctNumber = "100356";
	} else if (png.indexOf("www") == -1 && brand.indexOf("ramtrucks") >= 0){
		acctNumber = "100362";
	}
	return acctNumber;
}



function getCategory(){
	if (category == ""){
		return "CONTENT+CATEGORY"
	}else{
		return category;
	}
}

//BEGIN EDITABLE SECTION
//CONFIGURATION VARIABLES

dataset = getAccountNumber();		//ACCOUNT NUMBER
setPageViewVariables();		//AASSIGN MULTI-LEVEL URL CATEGORIES TO ATTRIBUTES



//INSERT OTHER CUSTOM EVENTS

//END EDITABLE SECTION


<!--END CAS CODE-->