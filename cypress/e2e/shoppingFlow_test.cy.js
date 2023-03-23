/// <reference types="cypress" />
import loginPage from "../support/pages/login"
import inventoryPage from "../support/pages/inventory"
import cartPage from "../support/pages/cart"
import { products, dadosUser } from "../support/factories"

describe('Fluxo de compra', () => {

  const selectedProducts = [
    { product: products.backpack },
    { product: products.tShirtBolt }
  ]

  beforeEach(function () {
    cy.fixture('login').then(function (login) {
      this.valid = login.userValid
    })
  })

  var quantItem = 0

  it('Fluxo completo de compras', function () {

    cy.visit('/')
    loginPage.form(this.valid.username, this.valid.password)
    loginPage.submit()
    selectedProducts.forEach(function (prod) {
      inventoryPage.addItemCart(prod.product)
      quantItem += 1
      inventoryPage.quantItemCart(quantItem)
    })
    inventoryPage.openCart()
    selectedProducts.forEach(function (prod) {
      cartPage.validItemCart(prod.product)
    })
    cartPage.removeItemCart(products.tShirtBolt)
    cartPage.buttonContinueShopping()
    inventoryPage.selectFilter('Price (high to low)')
    inventoryPage.addFirstItem()
    inventoryPage.openCart()
    cartPage.validItemCart(products.jacket)
    cartPage.validItemCart(products.backpack)
    cartPage.openCheckout()
    cartPage.formUser(dadosUser)
    cartPage.buttonContinue()
    cartPage.buttonFinish()
    cartPage.buttonBackHome()
  });
})