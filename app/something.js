'use strict'

define(['jquery', 'toastr'], function ($, toastr) {
  var App = (function () {

    var _this = null;

    var model = function () {
      _this = this;
    };

    model.prototype = {
      constructor: model,

      init: function () {
        toastr.success('App has been init...');
      },
    };

    return model;
  })();

  return App;
});
