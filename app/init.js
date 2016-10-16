requirejs.config({
    baseUrl: "./libs/",
    paths: {
		    jquery: 'jquery/dist/jquery.min',
        toastr: 'toastr/toastr.min',
    },
    shim: {
		  'toastr': {
          deps: ['jquery'],
          exports: 'toastr',
      },
    },
});

require(["jquery", "../app/something"], function ($, Application) {
  $(document).ready(function () {
    loadCss('./libs/toastr/toastr.min.css');
    var app = new Application();

    app.init();

  });

  function loadCss(url) {
    var link = document.createElement("link");
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = url;
    document.getElementsByTagName("head")[0].appendChild(link);
  }
});
