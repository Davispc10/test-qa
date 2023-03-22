/// <reference types="cypress" />
import loginPage from "../support/pages/login"
import inventoryPage from "../support/pages/inventory"
import { products } from "../support/factories"

describe('Carrinho', () => {

  const selectedProducts = [
    { product: products.backpack },
    { product: products.tShirtBolt }
  ]

  beforeEach(function () {
    cy.fixture('login').then(function (login) {
      this.valid = login.userValid
    })
    cy.visit('/')
  })

  context('Adicionar item ao carrinho', () => {

    beforeEach(function () {
      loginPage.form(this.valid.username, this.valid.password)
      loginPage.submit()
    })

    it('Adicionar pela página do inventário', function () {
      var quantItem = 0
      selectedProducts.forEach(function (prod) {
        inventoryPage.addItemCart(prod.product)
        quantItem += 1
        inventoryPage.quantItemCart(quantItem)
      })
    });

    it('Adicionar pela página do item', function () {
      var quantItem = 0
      selectedProducts.forEach(function (prod) {
        inventoryPage.openProductAndAdd(prod.product)
        quantItem += 1
        inventoryPage.backProducts()
        inventoryPage.quantItemCart(quantItem)
      });
    })
  })

  context('Remover item do carrinho', () => {
    var quantItem

    beforeEach(function () {
      quantItem = 0
      loginPage.form(this.valid.username, this.valid.password)
      loginPage.submit()
      selectedProducts.forEach(function (prod) {
        inventoryPage.addItemCart(prod.product)
        quantItem += 1
      })
    })

    it('Remover pela página do inventário', function () {
      selectedProducts.forEach(function (prod) {
        inventoryPage.removeItemCart(prod.product)
        quantItem -= 1
        if (quantItem == 0) {
          quantItem = ""
        }
        inventoryPage.quantItemCart(quantItem)
      })
    });

    it('Remover pela página do item', function () {
      selectedProducts.forEach(function (prod) {
        inventoryPage.openProductAndRemove(prod.product)
        quantItem -= 1
        if (quantItem == 0) {
          quantItem = ""
        }
        inventoryPage.quantItemCart(quantItem)
        inventoryPage.backProducts()
      });
    })
  })
})