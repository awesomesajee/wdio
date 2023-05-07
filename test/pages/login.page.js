import Page from "../pageobjects/page.js";

class LoginPage extends Page {
    get usernameTextBox() {
        return $('#user-name');
    }

    get passwordTextbox() {
        return $('#password');
    }

    get loginButton() {
        return $('#login-button');
    }

    get welcomePageHeader() {
        return $('div=Swag Labs')
    }

    async login(username, password, welcomeMessage) {
        await this.usernameTextBox.setValue(username)
        await this.passwordTextbox.setValue(password)
        await this.loginButton.click()
        await expect(this.welcomePageHeader).toHaveText(welcomeMessage)
    }

    open () {
        return super.open();
    }

}
export default new LoginPage();