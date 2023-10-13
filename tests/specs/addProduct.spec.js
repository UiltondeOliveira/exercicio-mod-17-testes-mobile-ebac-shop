const addProductScreen = require("../screens/addProduct.screen");
const homeScreen = require("../screens/home.screen");
const loginScreen = require("../screens/login.screen");
const { faker, fakerPT_BR, fakerEN_US } = require('@faker-js/faker');


let urlShop = 'http://lojaebac.ebaconline.art.br'
let user = 'gerente'
let password = 'GD*peToHNJ1#c$sgk08EaYJQ'

let productTitle = fakerEN_US.commerce.productName()
let productPrice = faker.random.numeric(2)

describe('Add new product', () => {
    it('Should add a new product', async () => {
        await homeScreen.goToLogin()
        await loginScreen.setStoreAddress(urlShop)
        await loginScreen.continue()
        await driver.pause(1000)
        await loginScreen.continueWithStoreCredendials()
        await loginScreen.login(user,password)
        await loginScreen.goToTwoFactorAuth()
        await loginScreen.twoFactorLogin(password)
        await driver.pause(5000)

        await addProductScreen.goToProductSession()
        await driver.pause(3000)
        await addProductScreen.addNewProduct()
        await addProductScreen.addNewProductDatails(productTitle, productPrice)
        
        expect(await addProductScreen.snackBarText()).toEqual('Product published')        
    });
});