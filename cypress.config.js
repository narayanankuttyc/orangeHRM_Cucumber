const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  video: false,
  screenshotOnRunFailure: false,
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    specPattern: "cypress/integration/*.feature",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
   

  },
 

  env: {
    infor: "real secret keys should be long and random",
    userName: "Admin",
    password:
      "73884defd0b7bf9a01abdc8a2b341e6b048f3efb0009d025d67279a9716cdad312c9e610476bb454e7452f937322aea3IZppvoTY7c2q2PcncNnNLw==",
  },
  
});
