!function(){"";"use strict";if(!window.Handlebars)return;Handlebars.registerHelper("getImg",function(path,width,height,pov,background){return path?(pov=pov?"pov="+pov+"&":"",path=path.replace("&amp;","&"),height=height||"",width=width||"",background=background||"",/^(www|m)/.test(location.hostname)||("http://preview",-1!==location.hostname.indexOf("m.")&&"-m","."+cllc.config.brand+".com"),(-1!==path.indexOf("COSY")||-1<path.indexOf("client=fcaus")?String.format("/mediaserver/iris?{0}&{1}width={2}&height={3}&bkgnd={4}&resp=jpg&cut=",path,pov,width,height,background):String.format("/iof/?IMG=EAL_IMAGES/{0}&WIDTH={1}&HEIGHT={2}&AUTOTRIM=1",path,width,height)).replace(/\\/g,"/")):"/assets/images/blank.gif"}),Handlebars.registerHelper("render",function(template){for(var data={},i=1;i<arguments.length-1;i++)i%2!=0&&(data[arguments[i]]=arguments[i+1]);return Handlebars.compile(document.getElementById(template).innerHTML)(data)}),Handlebars.registerHelper("formatPrice",function(val){return val?(val=parseInt(val),(val=String(val)).length<=3?val:val.replace(/^(\d{1,})(\d{3})$/,"$1,$2")):"-"}),Handlebars.registerHelper("compare",function(a,operator,b,options){var operators,result;if(arguments.length<3)throw new Error("Handlerbars Helper 'compare' needs 2 parameters");if(options||(options=a,a=operator,operator="=="),operators={"==":function(l,r){return l==r},"===":function(l,r){return l===r},"!=":function(l,r){return l!=r},"<":function(l,r){return l<r},">":function(l,r){return r<l},"<=":function(l,r){return l<=r},">=":function(l,r){return r<=l},"%":function(l,r){return l%r==0},rx:function(l,r){return!0===eval(l).test(r)},typeof:function(l,r){return typeof l===r}},!operators[operator])throw new Error("Handlerbars Helper 'compare' doesn't know the operator "+operator);return result=operators[operator](a,b),result?options.fn(this):options.inverse(this)}),Handlebars.registerHelper("isOLSHP",function(services,options){return services&&-1<services.indexOf("OLSHP")?options.fn(this):options.inverse(this)}),Handlebars.registerHelper("isEppEnabled",function(vehicleData,options){if(vehicleData&&"undefined"!=typeof eppVehicles){var inventoryCode=vehicleData.ccode,eepPrice=!(!vehicleData.price||!vehicleData.price.employeePrice);if(!inventoryCode||!eepPrice)return options.inverse(this);var eppData,ccode=inventoryCode.replace("IU","CU"),model=Vehicles.getModelFromCcode(ccode),vehicle=Vehicles.getFamilyFromMYC(ccode.substr(0,9)),year=ccode.substr(3,4);return model&&vehicle&&year&&(eppData=eppVehicles.getEpp({year:year,vehicle:vehicle,base:model})),eppData?options.fn(this):options.inverse(this)}return options.inverse(this)}),Handlebars.registerHelper("oreurl",function(vehicle,oreData){var vin=vehicle.vin||"",vehicleName=oreData.vehicle||"",year=oreData.year||"",radius=oreData.radius||"",color=vehicle.exteriorColorCode||"",zipCode=oreData.zipCode||"",dealerCode=vehicle.dealerCode||"",engineCode=vehicle.engineCode||"",transmissionCode=vehicle.transmissionCode||"",make=oreData.brand||"",trim="",model="",driveType="";if(vehicle.ccode&&vehicleName&&year){trim=Vehicles.getTrimFromCcode(vehicle.ccode),model=Vehicles.getModelFromCcode(vehicle.ccode);var drives=Vehicles.getAvailableDrives({year:year,vehicle:vehicleName,model:model});drives.length&&(driveType=drives[0].name)}var oreContext={vin:vin,make:make,vehicle:vehicleName,year:year,color:color,drivetype:driveType,zipcode:zipCode,trim:trim,radius:radius,dealerCode:dealerCode,engine:engineCode,transmission:transmissionCode};return JSON.stringify(oreContext)}),Handlebars.registerHelper("beingBuilt",function(flag,statusCode,options){return"is"===flag&&statusCode&&"kz"!==statusCode.toLowerCase().substr(0,2)&&"kzx"!==statusCode.toLowerCase()?options.fn(this):"not"!==flag||!statusCode||"kz"!==statusCode.toLowerCase().substr(0,2)&&"kzx"!==statusCode.toLowerCase()?options.inverse(this):options.fn(this)}),Handlebars.registerHelper("isDrawerEnabled",function(ccode,name,options){var lookupConfig=window.vehicleLookupConfig||{};if(lookupConfig&&ccode){var modelCode=ccode.substr(7,2),lookupConfigVehicle=(name=name.toLowerCase()||"",lookupConfig.vehiclesCode);if(lookupConfigVehicle&&lookupConfigVehicle.hasOwnProperty(modelCode)){var optionKey=lookupConfigVehicle[modelCode],availableOptions=[];return lookupConfig.attributes&&lookupConfig.attributes.hasOwnProperty(optionKey)&&(availableOptions=lookupConfig.attributes[optionKey]),"seats"===name&&(name="seating"),"citympg"!==name&&"hwympg"!==name||(name="cityhwy"),-1!==availableOptions.indexOf(name)?options.fn(this):options.inverse(this)}return options.fn(this)}return options.fn(this)})}();