export class loginelements{
    getUserNameLbl= ()=> {return cy.get(".oxd-form-row>.oxd-input-field-bottom-space")}
    setUserNameInput=() => {return cy.get("input[name='username']")}
    setPasswordInput=() =>{return cy.get("[name='password']")}
    getPasswordLbl=()=> {return cy.get(".oxd-label")}
    submitBtn=()=> {return cy.get("[type='submit']")}
}