class WelcomePage {
    get parent() {
        return $('.inventory_list')
    } 

    async GetAllItemHeaders() {
        return this.parent.$$('div.inventory_item_description>div>a>div').filter(element => {
            console.log(element.getText())
        })
    }
}

export default new WelcomePage()