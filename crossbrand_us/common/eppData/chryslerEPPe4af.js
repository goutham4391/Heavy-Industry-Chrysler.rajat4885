var eppVehicles = {"2019":[],"2020":{"voyager":{"base":"voyager_l","models":[]},"300":{"base":"300_touring","models":[]},"pacifica_hybrid":{"base":"pacifica_hybrid_touring","models":{"pacifica_hybrid_touring":{"ccode":"CUC202010RUEP53A","msrp":"39995","llp":"2DA","epp":38100,"disclaimer":"Offer is available on the purchase or lease of a new 2020 Chrysler Pacifica or Pacifica Hybrid. Customer responsible for $200 administration fee. Must take retail delivery by 5\/3\/2021. See dealer for details."},"pacifica_hybrid_touring_l":{"ccode":"CUC202010RUEH53A","msrp":"42295","llp":"2DN","epp":40304,"disclaimer":"Offer is available on the purchase or lease of a new 2020 Chrysler Pacifica or Pacifica Hybrid. Customer responsible for $200 administration fee. Must take retail delivery by 5\/3\/2021. See dealer for details."},"pacifica_35th_anniversary_hybrid_touring_l":{"ccode":"CUC202010RUEH53B","msrp":"44285","llp":"2DZ","epp":42182,"disclaimer":"Offer is available on the purchase or lease of a new 2020 Chrysler Pacifica or Pacifica Hybrid. Customer responsible for $200 administration fee. Must take retail delivery by 5\/3\/2021. See dealer for details."},"pacifica_hybrid_limited":{"ccode":"CUC202010RUES53A","msrp":"45845","llp":"2DC","epp":43704,"disclaimer":"Offer is available on the purchase or lease of a new 2020 Chrysler Pacifica or Pacifica Hybrid. Customer responsible for $200 administration fee. Must take retail delivery by 5\/3\/2021. See dealer for details."},"pacifica_35th_anniversary_hybrid_limited":{"ccode":"CUC202010RUES53B","msrp":"46840","llp":"2DU","epp":44622,"disclaimer":"Offer is available on the purchase or lease of a new 2020 Chrysler Pacifica or Pacifica Hybrid. Customer responsible for $200 administration fee. Must take retail delivery by 5\/3\/2021. See dealer for details."},"pacifica_hybrid_red_s_edition":{"ccode":"CUC202010RUES53C","msrp":"49140","llp":"2DV","epp":46803,"disclaimer":"Offer is available on the purchase or lease of a new 2020 Chrysler Pacifica or Pacifica Hybrid. Customer responsible for $200 administration fee. Must take retail delivery by 5\/3\/2021. See dealer for details."}}},"pacifica":{"base":"pacifica_touring","models":{"pacifica_touring":{"ccode":"CUC202005RUCR53A","msrp":"34045","llp":"2DW","epp":31609,"disclaimer":"Offer is available on the purchase or lease of a new 2020 Chrysler Pacifica or Pacifica Hybrid. Customer responsible for $200 administration fee. Must take retail delivery by 5\/3\/2021. See dealer for details."},"pacifica_touring_l":{"ccode":"CUC202005RUCH53A","msrp":"37145","llp":"2DL","epp":34377,"disclaimer":"Offer is available on the purchase or lease of a new 2020 Chrysler Pacifica or Pacifica Hybrid. Customer responsible for $200 administration fee. Must take retail delivery by 5\/3\/2021. See dealer for details."},"pacifica_35th_anniversary_touring_l":{"ccode":"CUC202005RUCH53C","msrp":"38735","llp":"2DY","epp":35719,"disclaimer":"Offer is available on the purchase or lease of a new 2020 Chrysler Pacifica or Pacifica Hybrid. Customer responsible for $200 administration fee. Must take retail delivery by 5\/3\/2021. See dealer for details."},"pacifica_awd_launch_edition":{"ccode":"CUC202005RUFH53A","msrp":"40240","llp":"2DL","epp":37125,"disclaimer":"Offer is available on the purchase or lease of a new 2020 Chrysler Pacifica or Pacifica Hybrid. Customer responsible for $200 administration fee. Must take retail delivery by 5\/3\/2021. See dealer for details."},"pacifica_touring_l_plus":{"ccode":"CUC202005RUCP53A","msrp":"40245","llp":"2DJ","epp":37146,"disclaimer":"Offer is available on the purchase or lease of a new 2020 Chrysler Pacifica or Pacifica Hybrid. Customer responsible for $200 administration fee. Must take retail delivery by 5\/3\/2021. See dealer for details."},"pacifica_35th_anniversary_touring_l_plus":{"ccode":"CUC202005RUCP53B","msrp":"41440","llp":"2DQ","epp":38120,"disclaimer":"Offer is available on the purchase or lease of a new 2020 Chrysler Pacifica or Pacifica Hybrid. Customer responsible for $200 administration fee. Must take retail delivery by 5\/3\/2021. See dealer for details."},"pacifica_limited":{"ccode":"CUC202005RUCT53A","msrp":"44795","llp":"2DP","epp":41210,"disclaimer":"Offer is available on the purchase or lease of a new 2020 Chrysler Pacifica or Pacifica Hybrid. Customer responsible for $200 administration fee. Must take retail delivery by 5\/3\/2021. See dealer for details."},"pacifica_35th_anniversary_limited":{"ccode":"CUC202005RUCT53B","msrp":"45790","llp":"2DD","epp":41988,"disclaimer":"Offer is available on the purchase or lease of a new 2020 Chrysler Pacifica or Pacifica Hybrid. Customer responsible for $200 administration fee. Must take retail delivery by 5\/3\/2021. See dealer for details."},"pacifica_red_s_edition":{"ccode":"CUC202005RUCT53C","msrp":"48990","llp":"2DH","epp":44797,"disclaimer":"Offer is available on the purchase or lease of a new 2020 Chrysler Pacifica or Pacifica Hybrid. Customer responsible for $200 administration fee. Must take retail delivery by 5\/3\/2021. See dealer for details."}}}},"2021":{"voyager":{"base":"voyager_l","models":[]},"300":{"base":"300_touring","models":[]},"pacifica_hybrid":{"base":"pacifica_hybrid_touring","models":[]},"pacifica":{"base":"pacifica_touring","models":[]}},getBase: function (obj) {
		if (obj.vehicle && obj.year) {
			if(this[obj.year] && this[obj.year][obj.vehicle]) {
				model = this[obj.year][obj.vehicle];
				if(model && model.base) {
					return model.base
				}
			}
		}
		return null;
	},
	getEpp: function(obj) {
        if (obj.vehicle && obj.year && obj.base) {
			if(this[obj.year] && this[obj.year][obj.vehicle]) {
				var vehicle = this[obj.year][obj.vehicle];
				if(vehicle && vehicle.models && vehicle.models[obj.base]) {
					return {
					 epp: vehicle.models[obj.base].epp,
					 disclaimer: vehicle.models[obj.base].disclaimer || ''
					}
				} else {
					return null;
				}
			}
        }
		if (obj.vehicle && obj.year) {
            var baseModel= this.getBase(obj);
			if(baseModel && this[obj.year][obj.vehicle].models[baseModel]) {
				return {
				 epp: this[obj.year][obj.vehicle].models[baseModel].epp,
				 disclaimer: this[obj.year][obj.vehicle].models[baseModel].disclaimer || ''
				}
			}
        }
		return null;
    },
    overridelabels: {
CUC202001: {  eppMSRPLabel: 'EMPLOYEE PRICING FOR ALL STARTING AT', 
  eppMSRPLabel2: 'EMPLOYEE PRICING FOR ALL', 
  eppMSRPLabel3: 'Employee Pricing for All Starting at', 
  eppMSRPAriaDesc: 'employee pricing for all starting at', 
  eppNetPriceLabel: 'EMPLOYEE PRICING'
}
},
    getMsrpDes: function(myc) {
      if(myc && this.overridelabels[myc]) {
        return this.overridelabels[myc]
      }
      return { 
  eppMSRPLabel: 'FAMILY PRICING FOR ALL STARTING AT', 
  eppMSRPLabel2: 'FAMILY PRICING FOR ALL', 
  eppMSRPLabel3: 'Family Pricing for All', 
  eppMSRPAriaDesc: 'family pricing for all starting at', 
  eppNetPriceLabel: 'FAMILY PRICING FOR ALL'
}
    }}