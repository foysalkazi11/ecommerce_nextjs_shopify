const { withFrameworkConfig } = require("./framework/common/config");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = withFrameworkConfig({
  framework: {
    name: "shopify_local",
  },
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US",
  },
});
