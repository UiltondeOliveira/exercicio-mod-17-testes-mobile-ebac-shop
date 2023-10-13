class HomeScreen {
    get #enterStoreAddess(){
        return $('id:button_login_store')
    }

    async goToLogin(){
        await this.#enterStoreAddess.waitForDisplayed()
        await this.#enterStoreAddess.click()          
    }
}

module.exports = new HomeScreen()