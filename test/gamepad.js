/*!
{
  "name": "GamePad API",
  "property": "gamepads",
  "authors": ["Eric Bidelman"],
  "tags": ["media"],
  "notes": [{
    "name": "W3C spec",
    "href": "https://www.w3.org/TR/gamepad/"
  },{
    "name": "HTML5 Rocks tutorial",
    "href": "http://www.html5rocks.com/en/tutorials/doodles/gamepad/#toc-featuredetect"
  }],
  "warnings": [],
  "polyfills": []
}
!*/
/* DOC
Detects support for the Gamepad API, for access to gamepads and controllers.
*/
var Modernizr = require('./../lib/Modernizr.js');
var prefixed = require('./../lib/prefixed.js');

  Modernizr.addTest('gamepads', !!prefixed('getGamepads', navigator));

