const homeScreen = require("../screens/home.screen");
const loginScreen = require("../screens/login.screen");
const myStoreScreen = require("../screens/myStore.screen");

let urlShop = 'http://lojaebac.ebaconline.art.br'
let user = 'gerente'
let password = 'GD*peToHNJ1#c$sgk08EaYJQ'

describe('Access Admin Panel', () => {
    it('Should login with valid credentials', async () => {
        await homeScreen.goToLogin()
        await loginScreen.setStoreAddress(urlShop)
        await loginScreen.continue()
        await driver.pause(1000)
        await loginScreen.continueWithStoreCredendials()
        await loginScreen.login(user,password)
        await loginScreen.goToTwoFactorAuth()
        await loginScreen.twoFactorLogin(password)
        await driver.pause(5000)

        expect(await myStoreScreen.getStoreName()).toEqual('EBAC - Shop')
    });
});