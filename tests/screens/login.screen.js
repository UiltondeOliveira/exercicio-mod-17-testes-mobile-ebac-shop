class LoginScreen {
    get #storeAddess(){       
       return $('android.widget.EditText')
    }

    get #username(){
        return $('android= new UiSelector().text("Username")')
    }

    get #password(){
        return $('android= new UiSelector().text("Password")')
    }

    get #continue(){
        return $('id:bottom_button')
    }

    get #continueWithStoreCredendials(){
        return $('id:login_site_creds')
    }

    get #twoFactorPasswordBtn(){
        return $('id:login_enter_password')
    }

    async continue(){
        await this.#continue.click()
    }

    async continueWithStoreCredendials(){
        await this.#continueWithStoreCredendials.click()
    }

    async setStoreAddress(url){
        await this.#storeAddess.setValue(url)
    }

    async login(username, password){
        await this.#username.setValue(username)
        await this.#password.setValue(password)
        await this.#continue.click()
    }

    async goToTwoFactorAuth(){
        await this.#twoFactorPasswordBtn.click()
    }

    async twoFactorLogin(password){
        await this.#password.setValue(password)
        await this.#continue.click()
    }
}

module.exports = new LoginScreen()