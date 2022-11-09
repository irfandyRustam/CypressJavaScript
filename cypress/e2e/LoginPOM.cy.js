import Login from "../PageObjects/LoginPage2.js"

describe('OrangeHRM POM', ()=> {

  // General approach
  it('Login Test', ()=> {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");
    cy.get("button[type='submit']").click();
    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should('have.text', 'Dashboard');
  })

  // POM approach
  it('Login Test - POM', ()=> {
    cy.visit("https://opensource-demo.orangehrmlive.com/");
    
    const ln = new Login();
    ln.setUsername("Admin");
    ln.setPassword("admin123");
    ln.clickSubmit();
    ln.verifyLogin();
  })

  // POM approach + fixture
  it.only('Login Test - POM with fixture', ()=> {
    cy.fixture('orangehrm').then((data) =>{
      cy.visit(data.loginURL);
      const ln = new Login();
      ln.setUsername(data.username);
      ln.setPassword(data.password);
      ln.clickSubmit();
      ln.verifyLogin();
    })
  })

})