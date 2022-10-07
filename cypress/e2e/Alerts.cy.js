describe('Alerts', ()=> {

  //1- Javascript Alert: It will have some text and an 'OK' button
  it.skip('Js alert', ()=> {

    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsAlert()']").click()

    cy.on('window:alert', (t)=> {
      expect(t).contains('I am a JS Alert')
    })

    //alert window will automatically closed by cypress
    cy.get("#result").should('have.text', 'You successfully clicked an alert')

  })

  //2- Javascript Confirm Alert: It will have some text with 'OK" and 'Cancel' buttons
  it('Js confirm alert - OK', ()=> {

    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsConfirm()']").click()

    cy.on('window:confirm', (t)=> {
      expect(t).contains('I am a JS Confirm')
    })

    //alert window will automatically closed by cypress by using ok button - default
    cy.get("#result").should('have.text', 'You clicked: Ok')

  })

  //2- Javascript Confirm Alert: It will have some text with 'OK" and 'Cancel' buttons
  it('Js confirm alert - Cancel', ()=> {

    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsConfirm()']").click()

    cy.on('window:confirm', (t)=> {
      expect(t).contains('I am a JS Confirm')
    })

    cy.on('window:confirm', ()=> false) //cypress closes alert window using cancel button
    cy.get("#result").should('have.text', 'You clicked: Cancel')

  })

  //3 - Javascript Prompt Alert: It willhave some text with a text box for user input along with 'OK' and 'Cancel' button
  it('Js prompt alert', ()=> {

    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

    cy.window().then((win)=> {
      cy.stub(win, 'prompt').returns('welcome')
    })

    cy.get("button[onclick='jsPrompt()']").click()

    //cypress will automatically closed prompted alert - it will use OK button - default
    // cy.on('window:confirm', ()=> false)
    cy.get("#result").should('have.text', 'You entered: welcome')

  })

  //4 - Authenticated alert
  it.only('Authenticated alert', ()=> {

    //Approach #1
    /*cy.visit("https://the-internet.herokuapp.com/basic_auth", {auth: 
                                                                {
                                                                  username: "admin", password: "admin"
                                                                }
                                                              });
    cy.get("div[class='example'] p").should('have.contain', "Congratulations")
    */

    //Approach #2
    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
    cy.get("div[class='example'] p").should('have.contain', "Congratulations")

  })

})