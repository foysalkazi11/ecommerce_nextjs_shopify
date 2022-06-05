const path = require("path");
const marge = require("deepmerge");

const withFrameworkConfig = (defaultConfig = {}) => {
  const framework = "shopify";

  const frameworkNextConfig = require(path.join(
    "../",
    framework,
    "next.config"
  ));
  const config = marge(defaultConfig, frameworkNextConfig);
  return config;
};

module.exports = { withFrameworkConfig };
