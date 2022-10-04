
(function (w, d) {
	var exlcudeMYC = [];
	var exlcudeCcode = [];
	var cssElement = d.querySelector("#eppHide");
	function getCCodeFromLocation() {
		var locationHash = window.location.hash;
		var splitEdLoc = locationHash.split("index.html");
		if (splitEdLoc.length > 3) {
			ccode = splitEdLoc[4];
			if (ccode && ccode.length == 16) {
				return ccode;
			}
		}
		return null;
	}
	function handleCss(vehicle, year, fromParams) {
		var ccodeFromloc = getCCodeFromLocation();
		var myc = Context.modelYearCode;
		var ccodeFromSDpC = null;
		var mycFromParams = null;
		if ((sdp && sdp.context && sdp.context.get())) {
			ccodeFromSDpC = sdp.context.get().ccode;
		}
		if (fromParams && typeof Vehicles != undefined && Vehicles.model_years[year] && Vehicles.model_years[year][vehicle]) {
			mycFromParams = Vehicles.model_years[year][vehicle].myc
		}
		var ccode = ccodeFromloc;
		if (myc) {
			var splitedMYC = myc.split("|");
			if (splitedMYC.length > 1) {
				myc = splitedMYC[0];
			}
		} else {
			if (typeof Vehicles != undefined && Vehicles.model_years[year] && Vehicles.model_years[year][vehicle]) {
				myc = Vehicles.model_years[year][vehicle].myc
			}
		}
		if (mycFromParams && mycFromParams !== myc) {
			myc = mycFromParams;
		}
		if (myc && exlcudeMYC.indexOf(myc) > -1) {
			// if(ccode && ccode.indexOf(myc) >= 0 && exlcudeCcode.indexOf(ccode) > -1) {
			// 	cssElement.setAttribute("disabled", "true");
			// } else {
			// 	cssElement.removeAttribute("disabled");

			// }
			cssElement.removeAttribute("disabled");
		} else {
			cssElement.setAttribute("disabled", "true");
		}
	}
	function addListner() {
		window.addEventListener("hashchange", function () {
			var vehicle = Context.vehicle;
			var year = Context.year;
			handleCss(vehicle, year);
		}, false);
	}
	function checkForUrlSelectorAndHashDiff() {
		var locationPath = window.location.pathname;
		var locationhash = window.location.hash;
		var pathregx = /\/bmo.(.*?)\.(\d{4})\.html/g;
		var hashregx = /\/model\/(CUX(\d{6}))/g;
		var hashregx2 = /\/models\/(\d{4})\/(.*?)(\/|\?|\.|$)/g;
		var vehicleInPath = null;
		var vehicleInhash = null;
		var yearInhash = null;
		if (locationPath) {
			var res = pathregx.exec(locationPath);
			if (res && res[1] && res[2]) {
				vehicleInPath = res[1];
			}
		}
		if (locationhash) {
			var resHash = hashregx.exec(locationhash);
			var resHash2 = hashregx2.exec(locationhash);
			if (resHash) {
				if (typeof Vehicles != undefined && resHash[1] && resHash[2].substr(0, 4) && Vehicles.model_years[resHash[2].substr(0, 4)]) {
					var vehiclesFromVd = Vehicles.model_years[resHash[2].substr(0, 4)];
					for (var i in vehiclesFromVd) {
						if (vehiclesFromVd[i].myc == resHash[1]) {
							vehicleInhash = i;
							yearInhash = resHash[2].substr(0, 4);
						};
					};
				}
			}
			if (resHash2) {
				vehicleInhash = resHash2[2];
				yearInhash = resHash2[1];
			}
		}
		if (vehicleInhash && vehicleInPath && yearInhash && vehicleInhash != vehicleInPath) {
			handleCss(vehicleInhash, yearInhash, true);
		}
	}
	function init(Context) {
		var vehicle = Context.vehicle;
		var year = Context.year;
		addListner(vehicle, year);
		handleCss(vehicle, year);
		checkForUrlSelectorAndHashDiff();
	}
	var timerVar = setInterval(Ctimer, 1000);
	var countTrack = 0;
	function Ctimer() {
		countTrack = countTrack + 1;
		if (typeof Context !== 'undefined' && Context.vehicle && Context.year) {
			init(Context);
			stopTimer();
		}
		if (countTrack > 50) {
			stopTimer();
		}
	}
	function stopTimer() {
		clearInterval(timerVar);
	}
})(window, document)
