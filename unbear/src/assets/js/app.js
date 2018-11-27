import $ from 'jquery'
import whatInput from 'what-input'

window.$ = $

import Foundation from 'foundation-sites'

if (Foundation) {
  // webpack will exclude foundation from
  // the build unless you write an expression
  // using `Foundation`
}

// If you want to pick and choose which
// modules to include, comment out the
// above and uncomment the line below

// import './lib/foundation-explicit-pieces';

// boot up foundation
$(document).foundation()

const FontFaceObserver = require('font-face-observer')
new FontFaceObserver('Source Sans Pro Bold')
    .check()
    .then(() => {
      $('body').addClass('font-loaded')
    }, () => {
      /* failed */
    })
