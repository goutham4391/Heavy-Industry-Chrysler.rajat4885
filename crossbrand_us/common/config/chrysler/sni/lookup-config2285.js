/**
 * SNI Quick info Drawer Config
 * This file is used to controlled which quick info drawer option author want to show on screen 
 * based on vehicle model code.
 * 
 * Make either VehicleLookupConfig object empty or remove model code entry if in case author don't 
 * want to control quick info drawer.
 * 
 * Schema of this file
 * ---------------------------
 * var vehicleLookupConfig = {
 *    "vehiclesCode": {
 *      "modelCode": "option1",
 *    },
 *   "attributes": {
 *      "option1": [ "engine", "transmission", "drive", "towing", "horsepower", "seating", "cityhwy" ]
 *    }
 * };
 * 
 * Note:
 * 1) options should always be lower case string and should be any of value from array shown above.
 * 2) There is below modification in options
 *     a) Instead of 'seats' we are using 'seating'
 *     b) Instead of 'cityMpg' or 'hwyMpg' we are using 'cityhwy'
 */

var vehicleLookupConfig = {
  "vehiclesCode": {
    "05": "option1",
    "13": "option1",
    "10": "option1",
    "01": "option2"
  },
  "attributes": {
    "option1": [ "engine", "drive", "seating", "cityhwy" ],
    "option2": [ "engine", "transmission", "horsepower", "seating", "cityhwy" ],
  }
};