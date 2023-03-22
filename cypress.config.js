const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 15000,
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    defaultCommandTimeout: 15000,
    viewportHeight: 1080,
    viewportWidth: 1920,
    experimentalRunAllSpecs: true,
    video: false
  },
});
