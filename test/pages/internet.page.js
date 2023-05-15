class InternetPage {
    async openUrl (url) {
        await browser.url(url)

    }
    clickLinkByText(linkText) {
        $(`//a[contains(text(), '${linkText}')]`).click();
    }
    get getElementByHeaderText() {
        return $('//div[@id="content"]/div/h3')
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
    
    getTheLinkToDownload(linkText) {
        return  $(`//a[contains(text(), '${linkText}')]`)
    }

}

export default new InternetPage();