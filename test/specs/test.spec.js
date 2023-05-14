import InternetPage from "../pages/internet.page.js";


describe('Verify navigating to a link', () => {

    before(() => {
        InternetPage.openUrl('https://the-internet.herokuapp.com/');
    })
    it("Click on the A/B testing link", async () => {
        await InternetPage.clickLinkByText('A/B Testing')
    })
    it("Verify Header of the navigated page", async () => {
        await expect(InternetPage.getElementByHeaderText('A/B Test Variation 1')).toHaveTextContaining(['A/B Test Variation 1', 'A/B Test Control'])
    })
})

describe('Verify Add Remove Elements', () => {

    before(() => {
        InternetPage.openUrl('https://the-internet.herokuapp.com/');
    })
    it("Click on the Add/Remove Elements link", async () => {
        await InternetPage.clickLinkByText('Add/Remove Elements');
    })
    it("Click on the Add Element button", async () => {
        (await InternetPage.getButtonByText('Add Element')).click();
    })
    it("Verify delete button displayed", async () => {
        await expect(InternetPage.getButtonByText('Delete')).toBeDisplayed();
    })
    it("Click on the Delete button", async () => {
        (await InternetPage.getButtonByText('Delete')).click();
    })
    it("Verify delete button disapeared", async () => {
        await expect(InternetPage.getButtonByText('Delete')).not.toBeDisplayed();
    })

})

describe('Verify Checkboxes Selection', () => {

    before(() => {
        InternetPage.openUrl('https://the-internet.herokuapp.com/');
    })
    it("Click on the Checkboxes link", async () => {
        await InternetPage.clickLinkByText('Checkboxes');
    })
    it("Click on first checkbox", async () => {
        (await InternetPage.getCheckboxByIndex(1)).click();
    })
    it("Verify whether the checkbox is selected", async () => {
        await expect(await InternetPage.getCheckboxByIndex(1)).toBeSelected({ message: 'The checkbox is not selected' })
    })

})

describe('Selecting a value from a dropdown', () => {

    before(() => {
        InternetPage.openUrl('https://the-internet.herokuapp.com/');
    })
    it("Click on the Checkboxes link", async () => {
        await InternetPage.clickLinkByText('Dropdown');
    })
    it("Select a option from drodown", async () => {
        (await InternetPage.selectBox).selectByVisibleText('Option 1')
    })
    it("Verify whether selected option selected", async () => {
        await expect(await InternetPage.getDropdownOptionByText('Option 1')).toHaveAttribute('selected', 'true', { message: 'The mentioned option is not selected' })
    })

})

describe('Download A File', () => {

    before(() => {
        InternetPage.openUrl('https://the-internet.herokuapp.com/');
    })
    it("Click on the download file link", async () => {
        await InternetPage.clickLinkByText('File Download');
        await browser.pause(3000);
        const link = await InternetPage.getTheLinkToDownload('sample.png')
        await link.click()
        await browser.pause(3000);
    })
    

})