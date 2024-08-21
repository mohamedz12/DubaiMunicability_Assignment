class ForgotPasswordPage {

    lnkforgotyourpassword = 'p:contains("Forgot your password?")'
    txtusername = 'input[name="username"]'
    btnresetpassword = 'button[type="submit"]'
    msgpasswordsentsuccessfull = 'h6:contains("Reset Password link sent successfully")'


    ClickForgotMyPasswordlink(){
        cy.get(this.lnkforgotyourpassword).click()
     }

     EnterUsername(user){
        cy.get(this.txtusername).clear()
        return cy.get(this.txtusername).type(user)
     }

     ClickResetPasswordbtn(){
        cy.get(this.btnresetpassword).click()
     }

     ValidateSuccessResetPasswordmsg(){
        cy.get(this.msgpasswordsentsuccessfull).should('exist',{timeout: 10000 })
     }
    }

export default ForgotPasswordPage