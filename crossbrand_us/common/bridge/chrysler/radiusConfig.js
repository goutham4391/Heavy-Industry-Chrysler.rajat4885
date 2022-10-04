/*
 * radiusConfig.js usage
 *
 * defaultRadius - sets the brand default search radius. This value shouldn't be lower than incrementRadius value.
 * maxRadius - sets the brand max search radius
 * incrementRadius - sets the increment steps of the slider
 * extendedRadius - requires the mycCode and override radius
 *
 * Please note when setting radius -
 * The service built to work in 25 mile increments (incrementRadius)
 * the maximum valid range is 250 miles (maxRadius)
 *
 */

var radiusConfig = {
    defaultRadius: '25',
    maxRadius: '250',
    incrementRadius: '25',
    extendedRadius: [{}],
    sniRadiusRange: [25, 50, 100, 150, 200, 250]
  };
