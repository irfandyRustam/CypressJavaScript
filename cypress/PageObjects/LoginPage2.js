class Login{

  txtUsername = "input[placeholder='Username']";
  txtPassword = "input[placeholder='Password']";
  btnLogin = "button[type='submit']";
  hdrText = ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";

  setUsername(username){
    cy.get(this.txtUsername).type(username);
  }

  setPassword(password){
    cy.get(this.txtPassword).type(password);
  }

  clickSubmit(){
    cy.get(this.btnLogin).click();
  }

  verifyLogin(){
    cy.get(this.hdrText).should('have.text', 'Dashboard');
  }
}

export default Login;