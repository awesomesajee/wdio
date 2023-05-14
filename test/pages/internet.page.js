class InternetPage {
    async openUrl (url) {
        await browser.url(url)

    }
    clickLinkByText(linkText) {
        $(`//a[contains(text(), '${linkText}')]`).click();
    }
    getElementByHeaderText(headerText) {
        return $(`//h3[contains(text(), '${headerText}')]`)
    }
    getButtonByText(buttonText) {
        return $(`//button[contains(text(), '${buttonText}')]`)
    }

    getCheckboxByIndex(index) {
        return $(`//form[@id='checkboxes']/input[${index}]`)
    }

    get selectBox() {
        return $('#dropdown');
    }

    getDropdownOptionByText(text) {
        return $(`//select[@id="dropdown"]/option[contains(text(), '${text}')]`)
    } 
    
    async getTheLinkToDownload(linkText) {
        return await $(`//a[contains(text(), '${linkText}')]`)
    }

}

export default new InternetPage();