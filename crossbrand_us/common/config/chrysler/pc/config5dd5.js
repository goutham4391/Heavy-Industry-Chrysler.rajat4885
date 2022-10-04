/* paymentCalculatorBanner Object Details
# id - Its value should not change at any case. It should always 'gaq-banner' and 'eshop-banner'
# show - It is boolean. true or false. Both case(gaq and eshop) can't be true. Any one only to be true
*/
var STConfig = window.STConfig = window.top.STConfig = window.top.STConfig || {
  "filters": {
    "trimFilter": {
      "a11yChange": 'Change Trim',
      "description": 'real-trim',
      "formLabel": 'Trim'
    },
    "defaultFilters": [
      {
        "description": "drive",
        "a11yChange": "Change Drive",
        "formLabel": "Drive"
      }
    ],
    "overrideFilters": {}
  },
  "paymentCalculatorBanner": {
    "contentToDisplay": [{
        "id": 'gaq-banner',
        "show": false
      },
      {
        "id": 'eshop-banner',
        "show": true
      }
    ]
  }
};
