const baseConfig = require("../cypress.config");

module.exports = {
  ...baseConfig,
  env: {
    pmtool_url: "https://tredgate.com/pmtool/index.php?",
    eshop_url: "https://tredgate.com/eshop/",
    webtrain_url: "https://tredgate.com/webtrain/",
    automation_test_store_url: "https://automationteststore.com/",
  },
};
