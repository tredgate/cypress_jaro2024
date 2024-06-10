const baseConfig = require("../cypress.config");

module.exports = {
  ...baseConfig,
  env: {
    pmtool_url: "https://google.com",
    eshop_url: "https://seznam.cz",
    webtrain_url: "https://ministryoftesting.com",
    automation_test_store_url: "https://irozhlas.cz",
  },
};
