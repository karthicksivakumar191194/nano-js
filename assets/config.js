const ENVIRONMENT = "development"; //development | staging | live

//Base URL for API
const API_BASE_URL = "";

//SITE URL
const windowLocation = window.location;
let SITE_URL = "";
if (windowLocation.protocol) {
  SITE_URL += windowLocation.protocol + "//";
}
if (windowLocation.hostname) {
  SITE_URL += windowLocation.hostname;
}
if (windowLocation.port) {
  SITE_URL += ":" + windowLocation.port;
}

if (ENVIRONMENT === "development" || ENVIRONMENT === "staging") {
  console.log("----- Nano JS Configurations Start -----");
  console.log("Environment:", ENVIRONMENT);
  console.log("Site URL:", SITE_URL);
  console.log(
    "Visit [PROJECT]/assets/config.js to modify Environment & Site URL "
  );
  console.log("----- Nano JS Configurations End-----");
}
