export class dashboardelements{
    
    getdummylocator(){
        return cy.get("dummylocator")
    }
    getDashboardWidgetHeader=()=> {
        return cy.get(".orangehrm-dashboard-widget-name > p")
    }

    getDashboardItems=()=>{return cy.get(".oxd-sheet")}
}