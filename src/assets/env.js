// https://pumpingco.de/blog/environment-variables-angular-docker/

// This JavaScript function defines our future environment variables.
(function (window) {
  window["env"] = window["env"] || {};

  // Environment variables
  window["env"]["apiUrl"] = "";
  window["env"]["production"] = false;
})(this);
