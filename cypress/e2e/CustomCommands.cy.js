// click on link using label
// over-writing existing contains() command
// re-usable custom command

describe("Custom Commands", ()=> {

  it('Handling links', ()=> {
    cy.visit("https://demo.nopcommerce.com/");

    // direct approach without custom command
    // cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click();

    // using custom command
    cy.clickLink("Apple MacBook Pro 13-inch");
    cy.get("div[class='product-name'] h1").should('have.text', 'Apple MacBook Pro 13-inch');

  });

  it('Overwriting existing command', ()=> {
    // using custom command
    cy.visit("https://demo.nopcommerce.com/");
    cy.clickLink("APPLE MACBOOK Pro 13-inch");
    cy.get("div[class='product-name'] h1").should('have.text', 'Apple MacBook Pro 13-inch');

  });

  it.only('Login command', ()=> {
    cy.visit("https://demo.nopcommerce.com/");
    cy.clickLink("Log in");
    cy.wait(3000);
    cy.loginApp('testing@gmail.com', 'testing123');
    cy.get(".ico-account").should('have.text', 'My account');

  });

});