import LoginPage from "../pages/login.page.js"


describe('Login Tests', function() {

    it('Verify login with valid credentials', async () => {

        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce', 'Swag Labs')

    })
})