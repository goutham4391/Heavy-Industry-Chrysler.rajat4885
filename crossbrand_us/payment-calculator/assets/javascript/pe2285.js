var $=$||jQuery,PE=new function(){this.toString=function(){return"[object PE]"}},pickerPage=function(){"alfaromeousa"===cllc.context.get("brand")?window.location.replace("vehicle-selector.pe?app=pe"):window.location.replace("vehicle-selector.pe.html")},query=cllc&&cllc.request&&cllc.request.queryString?cllc.request.queryString:null,vehicles=Vehicles.getAvailableVehicles(),activeYears=Vehicles.getAvailableYears(),isOverlay=query.isOverlay||"false";if(query&&"false"===isOverlay){var vehicle=query.vehicle,year=query.year,modelYearCode=query.modelYearCode,ccode=query.ccode;try{ccode&&Vehicles.getTrimFromCcode(ccode)}catch(err){err&&pickerPage()}if(modelYearCode){var family=Vehicles.getFamilyFromMYC(modelYearCode);family||pickerPage()}vehicle&&(vehicles.indexOf(vehicle)<0||year&&(activeYears.indexOf(year)<0||0===Vehicles.model_years[year][vehicle].active))&&pickerPage(),vehicle||year||ccode||pickerPage()}parent.window&&(-1<parent.window.location.pathname.indexOf("/build#")||-1<parent.window.location.pathname.indexOf("/bmo")?cllc.context.set("overlay-page","build-price"):cllc.context.set("overlay-page",parent.window.cllc.context.get("pageName"))),window.preventTrack=!0,$(function(){var contentToDisplay=STConfig&&STConfig.paymentCalculatorBanner&&STConfig.paymentCalculatorBanner.contentToDisplay||[];contentToDisplay&&contentToDisplay.length&&contentToDisplay.filter(function(v){var vId=v.id||"",vShow=v.show;vId&&vShow&&$("#"+vId+".is-hidden").removeClass("is-hidden")})});