import LoginPage from "../pages/login.page.js"
import WelcomePage from "../pages/welcome.page.js"


describe('Login Tests', function() {

    it('Verify login with valid credentials', async () => {

        await LoginPage.open()
        await LoginPage.login('Username', 'Password', 'standard_user', 'secret_sauce')
        await LoginPage.verifyMessage('Swag Labs')
        await WelcomePage.GetAllItemHeaders()

    })
})