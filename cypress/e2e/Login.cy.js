
import LoginPage from "../support/Pages/LoginPage";
describe('Login TCs', function () {
    const login = new LoginPage
    let userdata;


    beforeEach(function () {
        cy.fixture("TestData").then((data)=>{
            userdata = data
            login.OpenURL(userdata.url)
        })
        //login.OpenURL("https://opensource-demo.orangehrmlive.com/")
    });


    it('Verify Login with invalid email and password', function () {

        login.EnterUsername(userdata.username)
        login.EnterPassword(userdata.invalidpassword)
        login.ClickLoginbtn()
        login.ValidateFailedLogin()
    })

    it('Verify Login with valid email and password', function () {

        login.EnterUsername(userdata.username)
        login.EnterPassword(userdata.password)
        login.ClickLoginbtn()
        login.ValidateSuccessLogin()
    })

    it('Verify Logout user', function () {

        login.EnterUsername(userdata.username)
        login.EnterPassword(userdata.password)
        login.ClickLoginbtn()
        login.ValidateSuccessLogin()
        login.ClickLogoutbtn()
        login.ValidateSuccessLogout()
    })

})