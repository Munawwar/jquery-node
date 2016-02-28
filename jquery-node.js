if (typeof define === 'function' && define.amd) {
    define(['jquery'], function ($) {
        return $;
    });
} else if (typeof exports === 'object') { //for unit tests
    var jsdom = require('jsdom').jsdom,
        window = jsdom('').defaultView;

    GLOBAL.document = window.document;
    //(document.defaultView === window) is true

    module.exports = require('jquery')(window);
}
