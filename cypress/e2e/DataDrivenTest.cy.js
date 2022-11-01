describe("MyTestSuite", ()=>{

  it('Data Drivent Test', ()=> {

    cy.fixture('orangehrm2.json').then((data)=>{
      cy.visit("https://opensource-demo.orangehrmlive.com/");

      data.forEach((userdata) => {
        
        cy.get("input[placeholder='Username']").type(userdata.username);
        cy.get("input[placeholder='Password']").type(userdata.password);
        cy.get("button[type='submit']").click();

        // Valid credentials
        if(userdata.username == 'Admin' && userdata.password == 'admin123'){
          cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").
          should('have.text', userdata.expected);
          // Logout
          cy.get(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click();
          cy.get("ul[class='oxd-dropdown-menu']>li:last-child").click();
        }
        else{
          cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").
          should('have.text', userdata.expected);
        }

      });

    });

  });

});