const report = require("multiple-cucumber-html-reporter");
report.generate({
jsonDir: "cypress/reports/cucumber-json",  // ** Path of .json file **//
reportPath: "cypressn/reports/cucumber-htmlreport.html",
metadata: {
browser: {
name: "chrome",
version: "81",
},
device: "Local test machine",
platform: {
name: "mac",
version: "Sonoma",
},
},
});