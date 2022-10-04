var set_time=new Date().getTime() ;


function validateFields(){
var error= false;
var con_error=false;
var code="";
var email1="";
var email2="";
var vin_error=false;
 code=document.getElementById("category_code").value;
	//	alert("entered");
	var errorFields = [];
	if(code== 'N'){
	vfield = document.getElementById('first_name').value;
	var name = /^([a-zA-Z-'\s]*)$/ ;

		if ( vfield == null || vfield== "" || vfield.length < 2) {  
			errorFields.push('first_name');
			$('#first_name').attr('aria-describedby','firstname_empty');
			document.getElementById("firstname_empty").style.display="block";
			document.getElementById("firstname_required").style.display="none";
			//document.getElementById('first_name').focus();
			error=true;
			
		} else if (vfield.search(name) == -1 ) {
			errorFields.push('first_name');
			$('#first_name').attr('aria-describedby','firstname_required');
			document.getElementById("firstname_empty").style.display="none";
			document.getElementById("firstname_required").style.display="block";
			//document.getElementById('first_name').focus();
			con_error=true;
			
		}
		else{
			$('#first_name').removeAttr('aria-describedby');
			document.getElementById("firstname_empty").style.display="none";
			document.getElementById("firstname_required").style.display="none";
			
		}


   vfield = document.getElementById('last_name').value;
	var name = /^([a-zA-Z-'\s]*)$/ ;

		if ( vfield == null || vfield== "" || vfield.length < 2) {  
			errorFields.push('last_name');
			$('#last_name').attr('aria-describedby','lastname_empty');
			document.getElementById("lastname_empty").style.display="block";
			document.getElementById("lastname_required").style.display="none";
			//document.getElementById('last_name').focus();
			error=true;
			
		} else if (vfield.search(name) == -1 ) {
			errorFields.push('last_name');
			$('#last_name').attr('aria-describedby','lastname_required');
			document.getElementById("lastname_empty").style.display="none";
			document.getElementById("lastname_required").style.display="block";
			//document.getElementById('last_name').focus();
			con_error=true;
			
		}
		else{
			$('#last_name').removeAttr('aria-describedby');
			document.getElementById("lastname_empty").style.display="none";
			document.getElementById("lastname_required").style.display="none";
			
		}


  vfield = document.getElementById('address_1').value;
	var add_str = /^([a-zA-Z0-9_\s\.\-\'\;\/\:]*)$/  ; 

		if (vfield.search(add_str) == -1 ) {
			errorFields.push('address_1');
			$('#address_1').attr('aria-describedby', 'address1_required');
			document.getElementById("address1_required").style.display="block";
			//document.getElementById('address_1').focus();
			con_error=true;
		}
		else{
			$('#address_1').removeAttr('aria-describedby');
			document.getElementById("address1_required").style.display="none";
			
			
		}

	vfield = document.getElementById('address_2').value;
	var add_str = /^([a-zA-Z0-9_\s\.\-\'\;\/\:]*)$/  ; 

		if (vfield.search(add_str) == -1 ) {
			errorFields.push('address_2');
			$('#address_2').attr('aria-describedby', 'address2_required');
			document.getElementById("address2_required").style.display="block";
			//document.getElementById('address_2').focus();
			con_error=true;
		}
		else{
			$('#address_2').removeAttr('aria-describedby');
			document.getElementById("address2_required").style.display="none";
			
			
		}

	vfield = document.getElementById('city').value;
	var add_str = /^([a-zA-Z0-9_\s\.\-\;\/\:]*)$/  ; 

		if ( vfield.length === 0 || vfield== "" ) {
			errorFields.push('city');
			$('#city').attr('aria-describedby', 'city_required');
			document.getElementById("city_required").style.display="block";
			//document.getElementById('city').focus();
			con_error=true;
		} else if (vfield.search(add_str) == -1 ) {
			errorFields.push('city');
			$('#city').attr('aria-describedby', 'city_required');
			document.getElementById("city_required").style.display="block";
			//document.getElementById('city').focus();
			con_error=true;
		}
		else{
			$('#city').removeAttr('aria-describedby');
			document.getElementById("city_required").style.display="none";
			
			
		}


	vfield = document.getElementById('state').value; 

		if (vfield == "none" ) {
			errorFields.push('state');
			$('#state').attr('aria-describedby', 'state_required');
			document.getElementById("state_required").style.display="block";
			//document.getElementById('state').focus();
			con_error=true;
		}
		else{
			$('#state').removeAttr('aria-describedby');
			document.getElementById("state_required").style.display="none";	
			
		}
	 
	vfield =  document.getElementById('zip').value;
	var zip_str = /^([0-9]*)$/  ; 
	if (vfield == null || vfield== ""  ){
		errorFields.push('zip');
		$('#zip').attr('aria-describedby', 'zip_empty');
		document.getElementById("zip_empty").style.display="block";
		//document.getElementById('zip').focus();
		document.getElementById("zip_required").style.display="none";
		error=true;
	}
	
	else if (vfield.search(zip_str) == -1 || vfield.length<5 || vfield == "00000"){
		errorFields.push('zip');
		$('#zip').attr('aria-describedby', 'zip_required');
		document.getElementById("zip_empty").style.display="none";
		document.getElementById("zip_required").style.display="block";
		//document.getElementById('zip').focus();
		con_error=true;
	}
	
	else{
		$('#zip').removeAttr('aria-describedby');
		document.getElementById("zip_empty").style.display="none";
		document.getElementById("zip_required").style.display="none";
		
	}
	
	 area =  document.getElementById('area').value;
	  phone =  document.getElementById('phone_1').value;
	  phone1 =  document.getElementById('phone_2').value;
	var phone_str =  /^([0-9]*)$/  ;
	//if (area == null || area== "" || phone == null || phone== "" || phone1== null || phone1== "" ){
		if ((area == null && phone == null && phone1== null) || (area =="" && phone == "" && phone1== "" )){
		errorFields.push('area');
		$('#area').attr('aria-describedby', 'phone_empty');
		document.getElementById("phone_empty").style.display="block";
		document.getElementById("phone_required").style.display="none";
		//document.getElementById('area').focus();
		error=true;
	}
	
	else if (area.search(phone_str) == -1 || phone.search(phone_str) == -1  || phone1.search(phone_str) == -1  || area.length<3 || phone.length<3 || phone1.length<4){
		errorFields.push('area');
		$('#area').attr('aria-describedby', 'phone_required');
		document.getElementById("phone_empty").style.display="none";
		document.getElementById("phone_required").style.display="block";
		//document.getElementById('area').focus();
		con_error=true;
	}
	
	else{
		$('#area').removeAttr('aria-describedby');
		document.getElementById("phone_empty").style.display="none";
		document.getElementById("phone_required").style.display="none";
	
	}

    vfield =  document.getElementById('email').value;
	
	if (vfield == null || vfield== ""  ){
		errorFields.push('email');
		$('#email').attr('aria-describedby', 'email_empty');
		document.getElementById("email_empty").style.display="block";
		document.getElementById("email_required").style.display="none";
		//document.getElementById('email').focus();
		error=true;
	}
	
	else if(vfield.search(/[\_\-\d]*[A-Za-z]+[\w\_\-]*[\@][\d]*[A-Za-z]+[\w\-]*[\.][A-Za-z]+/g) == -1) {
		errorFields.push('email');
		$('#email').attr('aria-describedby', 'email_required');
		document.getElementById("email_empty").style.display="none";
		document.getElementById("email_required").style.display="block";
		//document.getElementById('email').focus();
		con_error=true;
	}
	
	else{
		$('#email').removeAttr('aria-describedby');
		document.getElementById("email_empty").style.display="none";
		document.getElementById("email_required").style.display="none";
		
	}

	 vfield =  document.getElementById('confirm_email').value;
	 email1=document.getElementById('email').value;

	 if (vfield == null || vfield== ""  ){
		errorFields.push('confirm_emailconfirm_email');
		$('#confirm_email').attr('aria-describedby', 'confirmemail_empty');
		document.getElementById("confirmemail_empty").style.display="block";
		document.getElementById("confirmemail_required").style.display="none";
		//document.getElementById('confirm_email').focus();
		error=true;
	}
	
	else if (vfield != email1){
		errorFields.push('confirm_email');
		$('#confirm_email').attr('aria-describedby', 'confirmemail_required');
		document.getElementById("confirmemail_empty").style.display="none";
		document.getElementById("confirmemail_required").style.display="block";
		//document.getElementById('confirm_email').focus();
		con_error=true;
	}
	
	else{
		$('#confirm_email').removeAttr('aria-describedby');
		document.getElementById("confirmemail_empty").style.display="none";
		document.getElementById("confirmemail_required").style.display="none";
		
	}

    
}



// Second div
else{
theForm = document.getElementById('sendemail_submit');
//alert("entered one");
if(isVinRelatedForm(theForm)){
     var vfield = document.getElementById('vin_number').value.trim();
	var name = /^([a-zA-Z0-9]*)$/ ;
		if ( vfield == null || vfield== "") {  
			errorFields.push('vin_number');
			$('#vin_number').attr('aria-describedby', 'vin_empty');
			document.getElementById("vin_empty").style.display="block";
			document.getElementById("vin_required").style.display="none";
			//document.getElementById('vin_number').focus();
			vin_error=true;
		 
		}
		else if (vfield.length < 17 ) {
			errorFields.push('vin_number');
			$('#vin_number').attr('aria-describedby', 'vin_required');
			document.getElementById("vin_empty").style.display="none";
			document.getElementById("vin_required").style.display="block";
			//document.getElementById('vin_number').focus();
			vin_error=true;
		}
		else if (vfield.search(name) == -1  ) {
			errorFields.push('vin_number');
			$('#vin_number').attr('aria-describedby', 'vin_required');
			document.getElementById("vin_empty").style.display="none";
			document.getElementById("vin_required").style.display="block";
			//document.getElementById('vin_number').focus();
			vin_error=true;
		}
		else{
			$('#vin_number').removeAttr('aria-describedby');
			document.getElementById("vin_empty").style.display="none";
			document.getElementById("vin_required").style.display="none";    
			
		}

		var vfield = document.getElementById('mileage').value;
	     var name =   /^([0-9]*)$/  ;
		 if ( vfield == null || vfield== "") {  
			errorFields.push('mileage');
			$('#mileage').attr('aria-describedby', 'mileage_empty');
			document.getElementById("mileage_empty").style.display="block";
			document.getElementById("mileage_required").style.display="none";
			//document.getElementById('mileage').focus();
			vin_error=true;
		 
		}
		else if (vfield.search(name) == -1){
			errorFields.push('mileage');
			$('#mileage').attr('aria-describedby', 'mileage_required');
		    document.getElementById("mileage_empty").style.display="none";
			document.getElementById("mileage_required").style.display="block";
			//document.getElementById('mileage').focus();
			vin_error=true;
		}
		else{
			$('#mileage').removeAttr('aria-describedby');
			document.getElementById("mileage_empty").style.display="none";
			document.getElementById("mileage_required").style.display="none";
			
		}
	
   }
   
	var vfield = document.getElementById('first_name_2').value;
	var name = /^([a-zA-Z-'\s]*)$/ ;

		if ( vfield == null || vfield== "" || vfield.length < 2) {  
			errorFields.push('first_name_2');
			$('#first_name_2').attr('aria-describedby', 'firstname_empty_2');
			document.getElementById("firstname_empty_2").style.display="block";
			document.getElementById("firstname_required_2").style.display="none";
			//document.getElementById('first_name_2').focus();
			error=true;
			
		} else if (vfield.search(name) == -1 ) {
			errorFields.push('first_name_2');
			$('#first_name_2').attr('aria-describedby', 'firstname_required_2');
			document.getElementById("firstname_empty_2").style.display="none";
			document.getElementById("firstname_required_2").style.display="block";
			//document.getElementById('first_name_2').focus();
			con_error=true;
			
		}
		else{
			$('#first_name_2').removeAttr('aria-describedby');
			document.getElementById("firstname_empty_2").style.display="none";
			document.getElementById("firstname_required_2").style.display="none";
			
		}


   vfield = document.getElementById('last_name_2').value;
	var name = /^([a-zA-Z-'\s]*)$/ ;

		if ( vfield == null || vfield== "" || vfield.length < 2) {  
			errorFields.push('last_name_2');
			$('#last_name_2').attr('aria-describedby', 'lastname_empty_2');
			document.getElementById("lastname_empty_2").style.display="block";
			document.getElementById("lastname_required_2").style.display="none";
			//document.getElementById('last_name_2').focus();
			error=true;
		} 
		else if (vfield.search(name) == -1 ) {
			errorFields.push('last_name_2');
			$('#last_name_2').attr('aria-describedby', 'lastname_required_2');
			document.getElementById("lastname_empty_2").style.display="none";
			document.getElementById("lastname_required_2").style.display="block";
			//document.getElementById('last_name_2').focus();
			con_error=true;
			
		}
		else{
			$('#last_name_2').removeAttr('aria-describedby');
			document.getElementById("lastname_empty_2").style.display="none";
			document.getElementById("lastname_required_2").style.display="none";
			
		}


  vfield = document.getElementById('address_1_2').value;
	var add_str = /^([a-zA-Z0-9_\s\.\-\'\;\/\:]*)$/  ;  

       if ( vfield == null || vfield== "" ) {  
			errorFields.push('address_1_2');
			$('#address_1_2').attr('aria-describedby', 'address1_empty_2');
			document.getElementById("address1_empty_2").style.display="block";
			document.getElementById("address1_required_2").style.display="none";
			//document.getElementById('address_1_2').focus();
			error=true;
		}
		else if (vfield.search(add_str) == -1 ) {
			errorFields.push('address_1_2');
			$('#address_1_2').attr('aria-describedby', 'address1_required_2');
			document.getElementById("address1_empty_2").style.display="none";
			document.getElementById("address1_required_2").style.display="block";
			//document.getElementById('address_1_2').focus();
			con_error=true;
		}
		else{
			$('#address_1_2').removeAttr('aria-describedby');
			document.getElementById("address1_empty_2").style.display="none";
			document.getElementById("address1_required_2").style.display="none";
			
		}

	vfield = document.getElementById('address_2_2').value;
	var add_str = /^([a-zA-Z0-9_\s\.\-\'\;\/\:]*)$/  ; 

		 
	   if (vfield.search(add_str) == -1 ) {
			errorFields.push('address_2_2');
			$('#address_2_2').attr('aria-describedby', 'address2_required_2');
			document.getElementById("address2_required_2").style.display="block";
			//document.getElementById('address_2_2').focus();
			con_error=true;
		}
		else{
			$('#address_2_2').removeAttr('aria-describedby');
			document.getElementById("address2_required_2").style.display="none";
		
		}

	vfield = document.getElementById('city_2').value;
	var add_str = /^([a-zA-Z0-9_\s\.\-\;\/\:]*)$/  ; 

		 if ( vfield == null || vfield== "" ) {  
			errorFields.push('city_2');
			$('#city_2').attr('aria-describedby', 'city_empty_2');
			document.getElementById("city_empty_2").style.display="block";
			document.getElementById("city_required_2").style.display="none";
			//document.getElementById('city_2').focus();
			error=true;
		}
		else if (vfield.search(add_str) == -1 ) {
			errorFields.push('city_2');
			$('#city_2').attr('aria-describedby', 'city_required_2');
			document.getElementById("city_empty_2").style.display="none";
			document.getElementById("city_required_2").style.display="block";
			//document.getElementById('city_2').focus();
			con_error=true;
		}
		else{
			$('#city_2').removeAttr('aria-describedby');
			document.getElementById("city_empty_2").style.display="none";
			document.getElementById("city_required_2").style.display="none";
			
		}
	 vfield = document.getElementById('state_2').value;
	  if ( vfield == "none" ) {  
			errorFields.push('state_2');
			$('#state_2').attr('aria-describedby', 'state_empty_2');
			document.getElementById("state_empty_2").style.display="block";
			//document.getElementById('state_2').focus();
			error=true;
		}
		else{
			$('#state_2').removeAttr('aria-describedby');
			document.getElementById("state_empty_2").style.display="none";
			
		   
		}
	vfield =  document.getElementById('zip_2').value;
	var zip_str =   /^([0-9]*)$/  ;
	if (vfield == null || vfield== ""  ){
		errorFields.push('zip_2');
		$('#zip_2').attr('aria-describedby', 'zip_empty_2');
		document.getElementById("zip_empty_2").style.display="block";
		document.getElementById("zip_required_2").style.display="none";
		//document.getElementById('zip_2').focus();
		error=true;
	}
	
	else if (vfield.search(zip_str) == -1 || vfield.length<5 || vfield == "00000"){
		errorFields.push('zip_2');
		$('#zip_2').attr('aria-describedby', 'zip_required_2');
		document.getElementById("zip_empty_2").style.display="none";
		document.getElementById("zip_required_2").style.display="block";
		//document.getElementById('zip_2').focus();
		con_error=true;
	}
	
	else{
		$('#zip_2').removeAttr('aria-describedby');
		document.getElementById("zip_empty_2").style.display="none";
		document.getElementById("zip_required_2").style.display="none";
		
	}
	
	 area =  document.getElementById('area_2').value;
	  phone =  document.getElementById('phone_1_2').value;
	  phone1 =  document.getElementById('phone_2_2').value;
	var phone_str = /^([0-9]*)$/  ; ; 
	if ((area == null && phone == null && phone1== null) || (area =="" && phone == "" && phone1== "" )){
		errorFields.push('area_2');
		$('#area_2').attr('aria-describedby', 'phone_empty_2');
		document.getElementById("phone_empty_2").style.display="block";
		document.getElementById("phone_required_2").style.display="none";
		//document.getElementById('area_2').focus();
		error=true;
	}
	
	else if (area.search(phone_str) == -1 || phone.search(phone_str) == -1  || phone1.search(phone_str) == -1  || area.length<3 || phone.length<3 || phone1.length<4){
		errorFields.push('area_2');
		$('#area_2').attr('aria-describedby', 'phone_required_2');
		document.getElementById("phone_empty_2").style.display="none";
		document.getElementById("phone_required_2").style.display="block";
		//document.getElementById('area_2').focus();
		con_error=true;
	}
	
	else{
		$('#area_2').removeAttr('aria-describedby');
		document.getElementById("phone_empty_2").style.display="none";
		document.getElementById("phone_required_2").style.display="none";
		
	}

    vfield =  document.getElementById('email_2').value;
	
	if (vfield == null || vfield== ""  ){
		errorFields.push('email_2');
		$('#email_2').attr('aria-describedby', 'email_empty_2');
		document.getElementById("email_empty_2").style.display="block";
		document.getElementById("email_required_2").style.display="none";
		//document.getElementById('email_2').focus();
		error=true;
	}
	
	else if(vfield.search(/[\_\-\d]*[A-Za-z]+[\w\_\-]*[\@][\d]*[A-Za-z]+[\w\-]*[\.][A-Za-z]+/g) == -1) {
		errorFields.push('email_2');
		$('#email_2').attr('aria-describedby', 'email_required_2');
		document.getElementById("email_empty_2").style.display="none";
		document.getElementById("email_required_2").style.display="block";
		//document.getElementById('email_2').focus();
		con_error=true;
	}
	
	else{
		$('#email_2').removeAttr('aria-describedby');
		document.getElementById("email_empty_2").style.display="none";
		document.getElementById("email_required_2").style.display="none";
		
	}

	 vfield =  document.getElementById('confirm_email_2').value;
	 email2=document.getElementById('email_2').value;

	 if (vfield == null || vfield== ""  ){
		errorFields.push('email_2');
		$('#email_2').attr('aria-describedby', 'confirmemail_empty_2');
		document.getElementById("confirmemail_empty_2").style.display="block";
		document.getElementById("confirmemail_required_2").style.display="none";
		//document.getElementById('confirm_email_2').focus();
		error=true;
	}
	
	else if (vfield != email2){
		errorFields.push('email_2');
		$('#email_2').attr('aria-describedby', 'confirmemail_required_2');
		document.getElementById("confirmemail_empty_2").style.display="none";
		document.getElementById("confirmemail_required_2").style.display="block";
		//document.getElementById('confirm_email_2').focus();
		con_error=true;
	}
	
	else{
		$('#email_2').removeAttr('aria-describedby');
		document.getElementById("confirmemail_empty_2").style.display="none";
		document.getElementById("confirmemail_required_2").style.display="none";
		
	}

}

vfield =  document.getElementById('subject').value;
	if (vfield == null || vfield== ""  ){
		errorFields.push('subject');
		$('#subject').attr('aria-describedby', 'subject_empty');
		document.getElementById("subject_empty").style.display="block";
		//document.getElementById('subject').focus();
		error=true;
		
	}
	else{
		$('#subject').removeAttr('aria-describedby');
		document.getElementById("subject_empty").style.display="none";
		
	}

    vfield =  document.getElementById('visible_description').value;
	if (vfield == null || vfield== ""  ){
		errorFields.push('visible_description');
		$('#visible_description').attr('aria-describedby', 'description_empty');
		document.getElementById("description_empty").style.display="block";
		//document.getElementById('visible_description').focus();
		error=true;
		
	}
	else{
		$('#visible_description').removeAttr('aria-describedby');
		document.getElementById("description_empty").style.display="none";
		
	}

        if(code== 'N'){
        if(error == false && con_error == false ){
			
             confirmEmail(email1,code);
         } else {
			 var errorID = errorFields[0];
			 $('#' + errorID).focus();
			 //$('.' + errorID + 'WCAG').attr('role', 'alert');
			 document.getElementById(errorID).focus();
		 }
		}

       else{
	    if(error == false && con_error== false && vin_error == false){
			
                	confirmEmail(email2,code);
        } else {
			 var errorID = errorFields[0];
			 $('#' + errorID).focus();
			 //$('.' + errorID + 'WCAG').attr('role', 'alert');
			 document.getElementById(errorID).focus();
		 }
        }

}

function enableVin(){

document.getElementById("vin_number").disabled = false;
document.getElementById("vin_number").className="FieldUnlocked";
document.getElementById("mileage").disabled = false;
document.getElementById("mileage").className="FieldUnlocked";
document.getElementById("service_center_name").disabled = false;
document.getElementById("service_center_name").className="FieldUnlocked";
document.getElementById("vin_empty").style.display="none";
document.getElementById("vin_required").style.display="none";
document.getElementById("mileage_empty").style.display="none";
document.getElementById("mileage_required").style.display="none";
document.getElementById("conditionno").style.display="block";
}


function disableVin(){

document.getElementById("vin_number").disabled = true;
document.getElementById("vin_number").className="FieldLocked";
document.getElementById("mileage").disabled = true;
document.getElementById("mileage").className="FieldLocked";
document.getElementById("service_center_name").disabled = true;
document.getElementById("service_center_name").className="FieldLocked";
document.getElementById("vin_empty").style.display="none";
document.getElementById("vin_required").style.display="none";
document.getElementById("mileage_empty").style.display="none";
document.getElementById("mileage_required").style.display="none";
document.getElementById("conditionno").style.display="none";
}

function isVinRelatedForm(form) {
    if (form.vin_related == null)
	return false ;

    if (form.vin_related[0].checked)
      checkedValue = form.vin_related[0].value ;
    else
        checkedValue = form.vin_related[1].value ;

    if (checkedValue == "Yes")
	return true ;
    else
	return false ;
}

var popup;
var wwwFound = false;

function confirmEmail(emailAddress,category_code)
{


	if(navigator.cookieEnabled)
		{
          //added as part of cookie
         var end = new Date().getTime(); 	     
         var temp= end-set_time;
         temp=temp/1000;		 
        if(temp < 15)
         {        
			var divTag = document.createElement("div");  
            divTag.id = "some";  
			divTag.style.display = "block";
            document.body.appendChild(divTag); 
		var alertpopup= '<div style="display: block; top: 358.5px; left: 395px;" id="popUpDiv_whatisthis">'+

		//var alertpopup= '<div id="popUpDiv_whatisthis" style="display: block; position: fixed; overflow: hidden; z-index: 1002; outline: 0px none; height: auto; width: 630px; top: 50%; left: 50%; margin-left: -325px; margin-top: -75px;">'+
		'<div class="popUpHeader" id="popUpHeader">'+		
		'</div>'+
		'<div class="popUpbg" id="popUpbg">'+
		'<div class="errormsg" style="left:42px; margin-left:42px;">'+
		'<br>'+				
		'<html>'+		
		'<head>'+
		'<link rel="stylesheet" href="/wccs/brand_forms/us/classes/popupStyle.css" type="text/css" />'+
		'</head>' +
		'<body onBlur="window.focus()">'+		
			
		'<strong><label class="errormsglbl" id="lblErrorMsg_fiat_2"> Please validate and re-enter the information submitted .</label> </strong><br>'+
		'<input type="submit" onclick="javascript:divclose_popUpDiv_whatisthis();" title="Okay" value="Okay" id="button"  name="button" style="color:white; background-color:#336699; float:right; margin-top:20px; padding:4px; font-weight:bold;"><p></p>'+
		'</body></html>' +
		' </div>'+
		'</div>'+
		'<div class="popUpFooter" id="popUpFooter">'+		
		'</div>'+
     	'</div>';		
		document.getElementById('some').innerHTML=alertpopup;
        var headID = document.getElementById('some');         
		var newScript = document.createElement('script');
		newScript.type = 'text/javascript';
		newScript.src = '/wccs/brand_forms/us/scripts/trackingUser.js';
		headID.appendChild(newScript);
		var newScript1 = document.createElement('script');
		newScript1.type = 'text/javascript';
		newScript1.src = '/wccs/brand_forms/us/scripts/trackingUserPageName.js';
		headID.appendChild(newScript1);		
		setTimeout(function() {var newScript2 = document.createElement('script');
		newScript2.type = 'text/javascript';
		newScript2.src = '/wccs/tracking/cas_contactus.js';
		headID.appendChild(newScript2);},2000);		         
		setTimeout(function() {var newScript3= document.createElement('script');
		newScript3.type = 'text/javascript';
		newScript3.src = '/wccs/tracking/cas.js';
		headID.appendChild(newScript3);},3000);
         }
         else
         {
    wwwInEmail(emailAddress);
    if (wwwFound == true) {
	return;
    }
    
	hitOk(category_code);

		 }
}
else
	{
	 //msg="Browser cookies must be enabled to submit this form.  Please enable cookies and click ok.";
	 msg="Browser cookies must be enabled to submit this form.  Please enable cookies and resubmit.";
	 showError3(msg);
	 return false;	
	}
}

function wwwInEmail(emailAddress)
{
    var wwwLoc = emailAddress.indexOf("www.");
    if (wwwLoc == -1) {
	wwwFound = false;
	return;
    }

    badAddress = emailAddress;
    goodAddress = emailAddress.substr(4);
    var options = "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,width=450,height=280";
    if( window.screen ) {
      var xPos = ( screen.availWidth - 450 ) / 2;
      var yPos = ( ( screen.availHeight - 280 ) / 2 ) - 40;
      options += ",left=" + xPos + ",screenX=" + xPos;
      options += ",top=" + yPos + ",screenY=" + yPos;
    }
    if (navigator.appName != "Netscape") {
	if (popup != null) popup.close();
    }
    popup = window.open('', 'emailCfm', options);

    var htmlString = 
		'<html>' +
		'<head><title>Confirm E-mail address</title>' +
		'</head>' +
		'<body onBlur="window.focus()"> ' +
		'<center>' +
		'<form>' +
		'<table>' +
		'<tr> <td align=center> <font face="verdana" size=2>You entered E-mail address ' +
		'      <font color=blue><b>' + badAddress + '</b></font>. <br>' + 
		'      Please note that E-mail addresses typically do not have a <b>"www."</b> at the start. If your address is incorrect, we will not be able to respond to your request. </br></br>Perhaps you meant your E-mail address to be ' +
		'      <b><font color="blue">' + goodAddress + '</font></b></td></tr>' +
		'<tr> <td align=center> <br><br><input type="button" value="Let me correct it" onClick="window.close()"> </br></br>' +
		'				 <input type="button" value="I entered my address correctly" onClick="window.opener.hitOk();window.close()"> </td>' + 
		'</tr>' +
		'</table>' +
		'</form>' +
		'</center></body></html>';
    popup.document.writeln(htmlString);
    // return true; // do not continue with regular confirm
    wwwFound = true;
}

function hitOk(code)
{
    
	document.getElementById("sbuttonemail").style.display="none";
	document.getElementById("pg_loading_img").style.display="block";
	customerSaidOk = true;
	
	//Sudeep change
	var reason = $('input[name="emailform"]:checked').attr('value');

    // Submit the form again here
    //theForm.submitted.value = "true" ;
    //theForm.visible_description.value = "";
    //theForm.visible_comments.value = "";
    //alert(document.getElementById("qqq").value);
    
	if(code == 'N'){
		
    var category_code = document.getElementById("category_code").value;
    var franchise = 'C';//document.getElementById("franchise").value;
    var vin_number ="0";//document.getElementById("vin_number").value;
    var mileage = "";//document.getElementById("mileage").value;
    var service_center_name ="";// document.getElementById("service_center_name").value;
    var title = "";//document.getElementById("title").value;
    var first_name = document.getElementById("first_name").value.trim();
    var middle_initial = "";//document.getElementById("middle_initial").value.trim();
    var last_name = document.getElementById("last_name").value.trim();
    var address_1 = document.getElementById("address_1").value;
    var address_2 = document.getElementById("address_2").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
     var radioarray=document.getElementsByName("phone_pref");
    var phone_pref='';
    for(var i=0;i<radioarray.length;i++)
    {
                                 if(radioarray[i].checked==true)
                                	 phone_pref=radioarray[i].value;
    }
    var area = document.getElementById("area").value;
    var phone_1 = document.getElementById("phone_1").value;
    var phone_2 = document.getElementById("phone_2").value;
    var from = document.getElementById("email").value;
    var visible_description =document.getElementById("subject").value;
    var visible_comments =document.getElementById("visible_description").value;

    var phone = ""+area+""+phone_1+""+phone_2+"";
	}


	else{
		
	var category_code = document.getElementById("category_code").value;
    var franchise =  'C';//document.getElementById("franchise").value;
    var vin_number1 =document.getElementById("vin_number").value;
      if(vin_number1!= null && vin_number1!= "" && vin_number1.length > 1)
      {
       var vin_number =document.getElementById("vin_number").value.trim();
      }
      else
      {
      var vin_number= "0";
      }
    var mileage = document.getElementById("mileage").value;
    var service_center_name =document.getElementById("service_center_name").value;
    var title = "";//document.getElementById("title_2").value;
    var first_name = document.getElementById("first_name_2").value.trim();
    var middle_initial = "";//document.getElementById("middle_initial_2").value.trim();
    var last_name = document.getElementById("last_name_2").value.trim();
    var address_1 = document.getElementById("address_1_2").value;
    var address_2 = document.getElementById("address_2_2").value;
    var city = document.getElementById("city_2").value;
    var state = document.getElementById("state_2").value;
    var zip = document.getElementById("zip_2").value;
     var radioarray=document.getElementsByName("phone_pref_2");
    var phone_pref='';
    for(var i=0;i<radioarray.length;i++)
    {
                                 if(radioarray[i].checked==true)
                                	 phone_pref=radioarray[i].value;
   }
    var area = document.getElementById("area_2").value;
    var phone_1 = document.getElementById("phone_1_2").value;
    var phone_2 = document.getElementById("phone_2_2").value;
    var from = document.getElementById("email_2").value;
    var visible_description =document.getElementById("subject").value;
    var visible_comments =document.getElementById("visible_description").value;

    
    var phone = ""+area+""+phone_1+""+phone_2+"";
	}


    var domain = window.location.hostname;
    
    if(domain.toLowerCase().indexOf("test")==0)
	{    
		//alert("index");
    	var url = "https://test.chrysler.com/wccsapp/SendUsEmail.do?action=sendEmail&sub_menu=None&franchise="+franchise+"&state="+state+"&zip="+zip+"&description="+visible_description+"&comments="+visible_comments+"&vin_number="+vin_number+"&mileage="+mileage+"&service_center_name="+service_center_name+"&title="+title+"&first_name="+first_name+"&middle_initial="+middle_initial+"&last_name="+last_name+"&address_1="+address_1+"&address_2="+address_2+"&city="+city+"&phone_pref="+phone_pref+"&area="+area+"&phone_1="+phone_1+"&phone_2="+phone_2+"&from="+from+"&category_code="+category_code+"&phone_number="+phone+"&reason="+reason+"&service=json"
    	//alert("url is"+ url);
		var urld= "https://test.chrysler.com/wccsapp/SendUsEmail.do";
	
	}
    else if(domain.toLowerCase().indexOf("uat")==0)
	{    
    	var url = "https://uat.chrysler.com/wccsapp/SendUsEmail.do?action=sendEmail&sub_menu=None&franchise="+franchise+"&state="+state+"&zip="+zip+"&description="+visible_description+"&comments="+visible_comments+"&vin_number="+vin_number+"&mileage="+mileage+"&service_center_name="+service_center_name+"&title="+title+"&first_name="+first_name+"&middle_initial="+middle_initial+"&last_name="+last_name+"&address_1="+address_1+"&address_2="+address_2+"&city="+city+"&phone_pref="+phone_pref+"&area="+area+"&phone_1="+phone_1+"&phone_2="+phone_2+"&from="+from+"&category_code="+category_code+"&phone_number="+phone+"&reason="+reason+"&service=json"
    	var urld= "https://uat.chrysler.com/wccsapp/SendUsEmail.do";
	}
    else if(domain.toLowerCase().indexOf("www")==0)
	{    
    	var url = "https://www.chrysler.com/wccsapp/SendUsEmail.do?action=sendEmail&sub_menu=None&franchise="+franchise+"&state="+state+"&zip="+zip+"&description="+visible_description+"&comments="+visible_comments+"&vin_number="+vin_number+"&mileage="+mileage+"&service_center_name="+service_center_name+"&title="+title+"&first_name="+first_name+"&middle_initial="+middle_initial+"&last_name="+last_name+"&address_1="+address_1+"&address_2="+address_2+"&city="+city+"&phone_pref="+phone_pref+"&area="+area+"&phone_1="+phone_1+"&phone_2="+phone_2+"&from="+from+"&category_code="+category_code+"&phone_number="+phone+"&reason="+reason+"&service=json"
    	var urld= "https://www.chrysler.com/wccsapp/SendUsEmail.do";
	}
    //var x=17;
    //var y="??";
    var myData = { action: "sendEmail", sub_menu: "None", franchise : franchise,state : state,zip : zip,description : visible_description, comments : visible_comments,vin_number : vin_number, mileage : mileage,service_center_name : service_center_name, title : title,first_name : first_name ,middle_initial : middle_initial ,last_name :last_name, address_1 : address_1 , address_2 : address_2, city : city, phone_pref : phone_pref,area : area, phone_1 : phone_1, phone_2 : phone_2, from : from ,category_code : category_code, phone_number : phone, reason : reason, service : "json"  };
 //   alert("mydata" +myData);
    //theForm.submit();
	//url=encodeURIComponent(url);
    //ajaxCall(url,code);
    ajaxCall(urld,code,myData);
}
function ajaxCall(url,code,myData)
{
//	alert("entered ajax");
	if(code == 'N'){
	//	alert("entered N");
	//var title = document.getElementById("title").value;
	var first_name = document.getElementById("first_name").value.trim();
	//var middle_initial = document.getElementById("middle_initial_2").value.trim();
	var last_name = document.getElementById("last_name").value.trim();
	}
	else{
		
   // var title = document.getElementById("title_2").value;
	var first_name = document.getElementById("first_name_2").value.trim();
	//var middle_initial = document.getElementById("middle_initial_2").value.trim();
	var last_name = document.getElementById("last_name_2").value.trim();
	}
	
	var domain = window.location.hostname;
    
    if(domain.toLowerCase().indexOf("test")==0)
	{ 
    	//var confirm_url = "http://test.chrysler.com/webselfservice/chrysler/redesign/confirm.html?title="+title+"&first_name="+first_name+"&middle_initial="+middle_initial+"&last_name="+last_name;
		var confirm_url = "https://test.chrysler.com/webselfservice/chrysler/confirm.html";
		var error_url = "https://test.chrysler.com/webselfservice/chrysler/error.html";
	
	}
    else if(domain.toLowerCase().indexOf("uat")==0)
	{    
    	var confirm_url = "https://uat.chrysler.com/webselfservice/chrysler/confirm.html";
		var error_url = "https://uat.chrysler.com/webselfservice/chrysler/error.html";
	}
    else if(domain.toLowerCase().indexOf("www")==0)
	{    
    	var confirm_url = "https://www.chrysler.com/webselfservice/chrysler/confirm.html";
		var error_url = "https://www.chrysler.com/webselfservice/chrysler/error.html";
	}
	

	
	/*jQuery.ajax({
        url: url,
		contentType: "application/json; charset=utf-8",
        dataType: "json",       
        type: 'POST',
	     complete: function(request, status) {
           
        },
        error: function(XMLHttpRequest, status, errorThrown) {

           	         
        }, 
        success: function(data, status, request) {
        	
         result = data;
         if(result.SENDEMAIL.STATUS == 'Success')
        	 {
			 
        	 window.open(confirm_url,"_self");
        	 }
         else 		
         {
			 
        	 //alert('failure reason is :' + result.Error_Code);
			 window.open(error_url,"_self");
        	 }
           }
           

       });*/
 //   alert("before ajax" +url);
    jQuery.ajax({
        type: "POST",
        url: url,
        data: myData,
        dataType: "json",
	    complete: function(request, status) {            
        },
        error: function(XMLHttpRequest, status, errorThrown) {           	         
        }, 
        success: function( data, status, request ) {    	
    	result = data;
	//	alert("Result"+result);
        if(result.SENDEMAIL.STATUS == 'Success')
       	 {			 
         //document.getElementById("sbuttonemail").style.display="none";
	     document.getElementById("pg_loading_img").style.display="none";
       	 window.open(confirm_url,"_self");
       	 }
        else 		
        {			 
       	 //alert('failure reason is :' + result.Error_Code);
		 document.getElementById("pg_loading_img").style.display="none";
		 document.getElementById("sbuttonemail").style.display="block";
		 window.open(error_url,"_self");
       	}
            /*$.each(data, function( k, v ) {
                console.log(k, v);
            });*/
        }
		//,
        //jsonpCallback: 'EmailService'
    });
	}

function isMileage(d)
{ 
  var c;
  for(var i=0; i<d.length; i++) 
  {
    c = d.charAt(i);
    if(!(c >= "0" && c <= "9" || c == ",")) return false;
  }
  return true;
}