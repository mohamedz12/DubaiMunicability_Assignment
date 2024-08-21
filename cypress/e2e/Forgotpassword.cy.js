import ForgotPasswordPage from "../support/Pages/ForgotPasswordPage";
import LoginPage from "../support/Pages/LoginPage";

describe('Forgot Password TCs', function () {
    const forgotpassword = new ForgotPasswordPage
    const login = new LoginPage
    let userdata;

    beforeEach(function () {
        cy.fixture("TestData").then((data)=>{
            userdata = data
            login.OpenURL(userdata.url)
        })
    });


    it('Verify sending forgot password request', function () {

        forgotpassword.ClickForgotMyPasswordlink()
        forgotpassword.EnterUsername(userdata.username)
        forgotpassword.ClickResetPasswordbtn()
        forgotpassword.ValidateSuccessResetPasswordmsg()
    })
})