import Page from "../pageobjects/page.js";

class LoginPage extends Page {
    async GettextField(placeholder) {
        return $(`//input[@placeholder='${placeholder}']`);
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


    async login(textfieldName, textfieldOther, username, password) {
        await (await this.GettextField(textfieldName)).setValue(username)
        await (await this.GettextField(textfieldOther)).setValue(password)
        await this.loginButton.click()

    }

    async verifyMessage(welcomeMessage) {
        await expect(this.welcomePageHeader).toHaveText(welcomeMessage)
    }

    open() {
        return super.open();
    }

}
export default new LoginPage();