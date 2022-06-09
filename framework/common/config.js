const path = require("path");
const marge = require("deepmerge");
const fs = require("fs");

const allowedFW = ["shopify", "bigcommerce", "shopify_local"];

const fallbackFw = "shopify";

const withFrameworkConfig = (defaultConfig = {}) => {
  let framework = defaultConfig?.framework?.name;

  if (!framework) {
    throw new Error(
      "The api framework is missing, please provide a valid framewrok"
    );
  }
  if (!allowedFW?.includes(framework)) {
    throw new Error(
      `The api framework: ${framework} can not be forund, please use one of the framework ${allowedFW?.join(
        ", "
      )}`
    );
  }

  if (framework === "shopify_local") {
    framework = fallbackFw;
  }

  const frameworkNextConfig = require(path.join(
    "../",
    framework,
    "next.config"
  ));
  const config = marge(defaultConfig, frameworkNextConfig);
  const tsPath = path.join(process.cwd(), "tsconfig.json");
  //const tsPath = path.join("../../", "tsconfig.json");
  const tsConfig = require(tsPath);
  tsConfig.compilerOptions.paths["@framework"] = [`framework/${framework}`];
  tsConfig.compilerOptions.paths["@framework/*"] = [`framework/${framework}/*`];

  fs.writeFileSync(tsPath, JSON.stringify(tsConfig, null, 2));

  return config;
};

module.exports = { withFrameworkConfig };
