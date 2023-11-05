import cypress from "cypress"
import { dashboardelements } from "../support/elements/dashboardElements"


const dashboard= new dashboardelements()

export class dashboardpage{
    
    verifyDahboardPageIsVisible(){
        cy.get("dummy locator").should("be.visible")
        cy.get("dummy locator").should("be.visible")
        cy.get("dummy locator").should("be.visible")
        cy.get("dummy locator").should("be.visible")
        cy.get("dummy locator").should("be.visible")

        // dashboard.getDashboardItems().should("have.length", 7)
        // dashboard.getDashboardWidgetHeader().then($element => {
        //     expect($element.text())
        //       .include("Time at Work")
        //       .and.include("My Actions") 
        //       .and.include("Quick Launch")
        //       .and.include("Buzz Latest Posts")
        //       .and.include("Employees on Leave Today")
        //       .and.include("Employee Distribution by Sub Unit")
        //       .and.include("Employee Distribution by Location")
        //   })
    }
    verifyDahboardPageIsVisible(){
        
    }

    verifyDahboardMenuItems(){
        //dashboard.getTopMenue().should("be.visible")
    }
}