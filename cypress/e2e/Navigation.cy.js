describe("MySuite", ()=>{

  it('Navigation Test', ()=> {
    cy.visit("https://demo.opencart.com/");
    cy.title().should('eq', 'Your Store'); // Home Page
    cy.get("li:nth-child(7) a:nth-child(1)").click();
    cy.get("div[id='content'] h2").should('have.text', 'Cameras');

    cy.go('back'); // Go back to home
    cy.title().should('eq', 'Your Store');

    cy.go('forward'); // Go to Camera page
    cy.get("div[id='content'] h2").should('have.text', 'Cameras');

    cy.go(-1); // Home
    cy.title().should('eq', 'Your Store');

    cy.go(1); // Go to Camera page
    cy.get("div[id='content'] h2").should('have.text', 'Cameras');

    cy.reload();
    
  })

})