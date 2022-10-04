  var campaign = getCampaign();

  function convertHashStringToParamsObject(value) {
  /**
   *  Examples:
   *  value = "#/models/zipcode/60601/vehicle/CUY201803"
   *  value = "#/models/vehicle/CUY201803"
   *  value = '#/models/zipcode/48009/vehicle/CUY201801/ccode/CUY2018014CFX29A/llp/2DC/options/EBC,DA5,TAK,WBP,B7,R4C,XX,PRZ,22C'
   *
   *  Output (respectively):
   *  returnValue = { zipcode: '60601', vehicle: 'CUY201803' }
   *  returnValue = { vehicle: 'CUY201803' }
   *  returnValue = { zipcode: '48009', vehicle: 'CUY201801', ccode: 'CUY2018014CFX29A', llp: '2DC', options: 'EBC,DA5,TAK,WBP,B7,R4C,XX,PRZ,22C' }
   */

  var returnValue = {};

  var valueArr;

  var keyValuePairArr;

  var returnValueKey;

  var equipmentCategory;

  value = value || '';

  if (!value) {
    return returnValue;
  }

  valueArr = value.replace(/(\/\w+(?:\,\w+)*\S(?!\/))/g, '$1\n').split(/\n/g).filter(function (v) { return v.toString().trim(); });

  equipmentCategory = (valueArr.splice(0, 1).pop() || '').replace(/[#/]+/g, '').trim(); // Remove the first item from the array (e.g. '#/models/') to get the equipmentCategory value.

  returnValue.equipmentCategory = equipmentCategory;

  valueArr.forEach(function (v) {
    keyValuePairArr = v.split(/\//g);

    while (keyValuePairArr.length > 2) {
      keyValuePairArr.pop();
    }

    returnValueKey = keyValuePairArr[0].toString().trim();

    if (returnValueKey) {
      returnValue[returnValueKey] = (keyValuePairArr[1] || '').toString().trim();
    }
  });

  return returnValue;
}

function getVehicleFromModelCode(modelCode) {
  var vehicle;

  if (modelCode) {
    Object.keys(_modelCodes).forEach(function (key) {
      if (_modelCodes[key] === modelCode) {
        vehicle = key;
      }
    });
  }

  return vehicle;
}

function doRedirectBmo(path, query, hash, searchAddedToUrl) {
  var url = path;

  if (hash) {
    url += hash;
  }

  if (query) {
    url += '?' + formatQueryString(query);
  } else {
    if (!searchAddedToUrl) {
      url += window.location.search;
    }
  }

  window.location.replace(url);
}

function isValidMYC(myc) {
  var returnFlag = false;
  var active_years = Vehicles.active_years;
  var year = myc.substr(3, 4);
  var vehicle = getVehicleFromModelCode(myc.substr(-2));
  if(active_years.indexOf(year) > -1 ) {
    if(vehicle) {
      returnFlag = true;
    }
  }
  return returnFlag;
}

function isValidVehicle(vehicle, year) {
	var returnFlag = false;
	var active_years = Vehicles.active_years;
	if(_modelCodes[vehicle]){
		if(year && active_years.indexOf(year) < 0) {
		  returnFlag = false;
		} else {
		  returnFlag = true;
		}
	}
	return returnFlag;
}

  var query = '';
  var appUrl = '../../../../bmo-2.html';
  var hashBase = '#';
  var year = getParameter('year');
  var vehicle = getParameter('vehicle') || getParameter('family');
  var zipcode = getParameter('zipcode') || getCookie('zipcode');
  var ccode = getParameter('ccode');
  var llp = getParameter('llp');
  var modelYearCode = getParameter('modelYearCode') || getParameter('modelyearcode');
  var options = getParameter('options');
  var page = getParameter('page');
  var pageName = getParameter('pageName');
  var trim = getParameter('trim');

  var searchAddedToUrl = false;

  var defaultEquipmentCategory = 'exterior';

  var equipmentCategoryArr = [defaultEquipmentCategory, 'interior', 'packages', 'powertrain', 'summary'];

  var windowLocationHash = window.location.hash;

  var paramsFromHash;

  if (windowLocationHash) {
    paramsFromHash = convertHashStringToParamsObject(windowLocationHash);

    zipcode = paramsFromHash.zipcode || getCookie('zipcode');

    ccode = ccode || paramsFromHash.ccode;

    llp = llp || paramsFromHash.llp;

    modelYearCode = modelYearCode || paramsFromHash.vehicle;

    options = options || paramsFromHash.options;

    page = page || paramsFromHash.equipmentCategory;
  }

  if (equipmentCategoryArr.indexOf(page) < 0) {
    page = defaultEquipmentCategory;
  }


  findApp();

    
