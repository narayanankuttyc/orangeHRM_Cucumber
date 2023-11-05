import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { dashboardpage } from "../pages/dashboardpage";

const dashboardPg=new dashboardpage()

Given("Login to OrangeHRM",()=>{
    
    cy.login()
});

When("check dashboard page is active",()=>{
    dashboardPg.verifyDahboardPageIsVisible()
});

Then("verify page header",()=>{
    dashboardPg.verifyDahboardPageIsVisible()
})