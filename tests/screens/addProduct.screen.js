class ProductsScreen {
    get #enterProductSession(){
        return $('~Products')
    }

    get #addNewProduct(){
        return $('id:addProductButton')
    }

    get #selectSimpleFisicalProduct(){
        return $('android=new UiSelector().text("Simple physical product")')
    }

    get #productTitle(){
        return $('id:editText')
    }

    get #productPrice(){
        return $('android=new UiSelector().text("Add price")')
    }

    get #editProductPrice(){
        return $('android.widget.EditText')
    }

    get #backToNewProductForm(){
        return $('~Navigate up')
    }

    get #productPublish(){
        return $('id:menu_done')
    }

    get #snackBarText(){
        return $('id:snackbar_text')
    }


    async goToProductSession(){
        this.#enterProductSession.click()
    }

    async addNewProduct(){
        await this.#addNewProduct.waitForDisplayed()
        await this.#addNewProduct.click()
        await this.#selectSimpleFisicalProduct.waitForDisplayed()
        await this.#selectSimpleFisicalProduct.click()       
    }

    async addNewProductDatails(title,price){
        await this.#productTitle.setValue(title)
        await this.#productPrice.click()
        await this.#editProductPrice.setValue(price)
        await this.#backToNewProductForm.click()
        await this.#productPublish.click()       
    }

    async snackBarText(){
        return await this.#snackBarText.getText()
    }

}

module.exports = new ProductsScreen()