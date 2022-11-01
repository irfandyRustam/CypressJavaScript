import 'cypress-iframe'
require ('@4tw/cypress-drag-drop')

describe("Mouse Operations", ()=>{

  it('Mouse Hover', ()=>{
    cy.visit("https://demo.opencart.com/");
    cy.xpath("//a[normalize-space()='Desktops']/following-sibling::div//a[contains(text(),'Mac')]").should('not.be.visible');
    cy.xpath("//a[normalize-space()='Desktops']").trigger('mouseover').click();
    cy.xpath("//a[normalize-space()='Desktops']/following-sibling::div//a[contains(text(),'Mac')]").should('be.visible');

  });

  it('Right Click', ()=>{
    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");

    //Apprach 1
    // cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu');
    // cy.get('.context-menu-icon-copy').should('be.visible');

    //Apprach 2
    cy.get(".context-menu-one.btn.btn-neutral").rightclick();
    cy.get('.context-menu-icon-copy').should('be.visible');

  });

  it('Double Click', ()=>{
    cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3");
    cy.frameLoaded("#iframeResult");  // Load the frame

    // Appraoch 1 - trigger()
    // cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").trigger('dblclick');
    // cy.iframe("#iframeResult").find("#field2").should('have.value', 'Hello World!');

    // Appraoch 2 - dblclick()
    cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").dblclick();
    cy.iframe("#iframeResult").find("#field2").should('have.value', 'Hello World!');

  });

  it('Drag and Drop Using Plugin', ()=>{
    cy.visit("http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html");
    cy.get('#box6').should('be.visible');
    cy.get('#box106').should('be.visible');

    cy.wait(3000);
    cy.get('#box6').drag('#box106', {force:true});

  });

  it.only('Scrolling Page', ()=>{
    cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html");

    // Indonesia Flag - scroll down
    cy.get("img[alt='Flag of Indonesia']").scrollIntoView({duration: 2000});
    cy.get("img[alt='Flag of Indonesia']").should('be.visible');
    cy.wait(1000);

    // Malaysia Flag - scroll up
    cy.get("img[alt='Flag of Malaysia']").scrollIntoView({duration: 2000});
    cy.get("img[alt='Flag of Malaysia']").should('be.visible');
    cy.wait(1000);

    // Scroll to bottom of a page
    cy.get("#footer").scrollIntoView({duration: 2000});

  });

});