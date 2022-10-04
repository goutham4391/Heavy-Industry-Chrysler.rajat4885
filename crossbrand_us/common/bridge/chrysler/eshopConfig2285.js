
/*
 * Usage details
 *
 * This config is used in Payment calculator page to control the content of Eshop banner
 * 
 * theme - dark/medium - sets the content theme.
 * image - logo image
 * imageAriaLabel - logo alt/aria-label
 * headline - primary headline
 * forceCapsForHeadline - converts headline content to all caps
 * paragraph - content for paragraph
 * button - config for button
 * button.label - button text
 * button.destination - url that will be redirected when button is clicked
 * button.opensInNewTab - controls the icons which is shown in primary button. `true` will is set it to link out, while false will render default chevron
 * button.dataLid - lid for button (for analytics purpose)
 * button.dataLpos - lpos for button (for analytics purpose)
 *
 */

var eshopConfig = {
  theme: 'dark',
  image: '/content/dam/fca-brands/na/chrysler/en_us/2022/econfig/2020-chrysler-e-shop.png',
  imageAriaLabel: 'Chrysler Eshop Logo',
  headline: 'Chrysler E-Shop Program: Start Shopping From Home',
  forceCapsForHeadline: true,
  paragraph: 'The Chrysler E-Shop Program now delivers the complete dealership experience online, from vehicle inventory to finance. Home delivery<span data-component=\"DisclosureBubble\" title=\"Delivery fee may apply.\"></span> is available through participating dealerships.',
  button: {
    label: 'Start Buying process',
    destination: '#app-ore',
    opensInNewTab: true,
    dataLid: 'start-buying-process',
    dataLpos: 'content'
  }
};
