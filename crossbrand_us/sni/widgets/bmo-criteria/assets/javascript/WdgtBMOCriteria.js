var WdgtBMOCriteria=function($){"";"use strict";var bmoConfig,bmoModal,_render=function(){var markup,templateId,data;bmoModal||((bmoModal=new cllc.ui.modal).width="1030px"),$(bmoModal.window).addClass("match-modal-window bmo-criteria"),templateId="bmo-match-hb-template",data=bmoConfig,markup=Handlebars.compile(document.getElementById(templateId).innerHTML)(data).replace(/(\r\n|\n|\r|\t)/gm,""),bmoModal.open(markup),$(".match-modal-window .cllc-modal-close").off("click").on("click",function(){bmoModal.close(),DATALAYER.linkTrack(!1,{lpos:"search-new-inventory",lid:"build-criteria:overlay:close",linkType:"tool",vars:{eVar5:cllc.context.get("vehicle"),prop1:cllc.context.get("vehicle")}})})};return"undefined"!=typeof Handlebars&&Handlebars.registerHelper("nameFormat",function(vehicleDesc){return vehicleDesc.replace("500e",'<b class="lower-case">500e</b>').replace("500c",'<b class="lower-case">500c</b>')}),function(){var curOption,col1Length,sniOptions=cllc.session.get("sniInventoryFilters"),params=SNI.params,ccode=params.ccode,configuredOptions=params.optionCodes.split(","),vehObj={year:cllc.context.get("year"),vehicle:cllc.context.get("vehicle")},filterOptions=[decodeURIComponent(SNI.params.variation),SNI.params.drive];if(SNI.params.wheelbase&&filterOptions.push(decodeURIComponent(SNI.params.wheelbase)),SNI.params.vehicletype&&filterOptions.push(decodeURIComponent(SNI.params.vehicletype)),SNI.CVDData){var allCVDVehicles,matchingCVDVehicle,matchingCVDVehicles,optionCodeArr;if(allCVDVehicles=SNI.CVDData.getModelWithTrimsCollection().getAllVehicles(),optionCodeArr=(SNI.params.optionCodes||"").split(",").map(function(v){return v.trim()}).filter(function(v){return v}),1===(matchingCVDVehicles=allCVDVehicles.filter(function(v){return v.ccode===ccode})).length&&(matchingCVDVehicle=matchingCVDVehicles[0]),1<matchingCVDVehicles.length)if(optionCodeArr.length){var matchingCVDVehiclesCount=matchingCVDVehicles.map(function(v){var matchCount=v.optionCodeArr.filter(function(v2){return 0<=optionCodeArr.indexOf(v2)}).length;return{vehicle:v,matchCount:matchCount}});matchingCVDVehiclesCount.sort(function(v1,v2){return v2.matchCount-v1.matchCount}),matchingCVDVehicle=matchingCVDVehiclesCount[0].vehicle}else matchingCVDVehicle=matchingCVDVehicles[0];matchingCVDVehicle&&Array.isArray(matchingCVDVehicle.selectedFilters)&&matchingCVDVehicle.selectedFilters.forEach(function(selectedFilter){var selectedFilterDescription=selectedFilter.description;!(0<(Array.isArray(selectedFilter.optionCodeArr)&&selectedFilter.optionCodeArr||[]).length)&&filterOptions.indexOf(selectedFilterDescription)<0&&filterOptions.push(selectedFilterDescription)})}vehObj.model=Vehicles.getModelFromCcode(ccode),bmoConfig={year:vehObj.year,description:Vehicles.getDescription(vehObj),options:{}};for(var i=0;i<configuredOptions.length;i++)sniOptions[curOption=configuredOptions[i]]?filterOptions.push(sniOptions[curOption]):/^2[A-Z0-9]{2}$/.test(curOption)?filterOptions.push("Customer Preferred Package "+curOption):console.warn("WdgtBMOCriteria:undefined.optioncode:"+curOption);col1Length=Math.ceil(filterOptions.length/2),bmoConfig.options={col1:filterOptions.slice(0,col1Length),col2:filterOptions.slice(col1Length)}}(),_render(),{render:_render}}(jQuery);