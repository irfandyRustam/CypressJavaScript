
describe('My First Test', () => {
  it('verify title-positive test', () => {
    
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should('eq', 'OrangeHRM')

  })

  it('verify title-negative test', () => {
    
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should('eq', 'OrangeHRM123')

  })

})