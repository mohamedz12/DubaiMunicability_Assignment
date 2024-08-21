class LoginPage {

    txtemail = 'input[name="username"]'
    txtpassword = 'input[name="password"]'
    btnlogin = 'button[type="submit"]'
    msginvalidcreds = 'p:contains("Invalid credentials")'
    nameddl = 'p.oxd-userdropdown-name'
    btnlogout = 'a:contains("Logout")'

    OpenURL(url){
      return cy.visit(url)
    }

     EnterUsername(email){
        cy.get(this.txtemail).clear()
        return cy.get(this.txtemail).type(email)
     }

     EnterPassword(password){
        cy.get(this.txtpassword).clear()
        return cy.get(this.txtpassword).type(password)
     }

     ClickLoginbtn(){
        cy.get(this.btnlogin).click()
     }

     ValidateSuccessLogin(){
        cy.url().should('include', '/dashboard/index');
     }

     ValidateFailedLogin(){
        cy.get(this.msginvalidcreds).should('exist',{timeout: 10000 })
     }

     ClickLogoutbtn(){
        cy.get(this.nameddl).click({timeout: 5000 })
        cy.wait(2000)
        cy.get(this.btnlogout).click()
     }

     ValidateSuccessLogout(){
        cy.url().should('include', '/auth/login');
     }
}

export default LoginPage