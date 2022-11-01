// Type of Hooks:
// Before
// After
// BeforeEach
// AfterEach
// Type of Tags:
// Skip
// Only

describe("MyTestSuite", ()=> {

  before(()=>{
    cy.log("********** launch app **********");

  });

  after(()=>{
    cy.log("********** closed app **********");

  });

  beforeEach(()=>{
    cy.log("********** login **********");

  });

  afterEach(()=>{
    cy.log("********** logout **********");

  });


  it('Search', ()=> {
    cy.log("********** searching **********");

  });

  it.skip('Advanced Search', ()=> {
    cy.log("********** advanced searching **********");

  });

  it.only('Listing Products', ()=> {
    cy.log("********** listing products **********");

  });

});