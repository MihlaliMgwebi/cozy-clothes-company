// [Dynamically set Angular Environment Variables in Docker](https://pumpingco.de/blog/environment-variables-angular-docker/)

// This JavaScript function defines our future environment variables.
(function (window) {
  window["env"] = window["env"] || {};

  // Environment variables
  window["env"]["apiUrl"] = "";
  window["env"]["debug"] = true;
  window["env"]["webUrl"] = "";
})(this);
