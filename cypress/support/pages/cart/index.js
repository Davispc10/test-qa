import { el } from './elements'

class CartPage {

  validItemCart(item) {
    cy.get(el.listCart).should('contain.text', item)
  }

  removeItemCart(item) {
    cy.get(`${el.itemDescription}:contains("${item}")`)
      .find(el.buttonRemoveCart)
      .as('btn')
      .should('contain.text', 'Remove')
      .click()
  }

  buttonContinueShopping() {
    cy.get(el.buttonBackShopping).click()
    cy.url().should('be.equal', Cypress.config().baseUrl + '/inventory.html')
  }

  quantItemCart(quant) {
    cy.get(el.buttonCart).should('contain.text', quant)
  }

  openCheckout() {
    cy.get(el.buttonCheckout).click()
    cy.url().should('be.equal', Cypress.config().baseUrl + '/checkout-step-one.html')
  }

  formUser(dadosUser) {
    cy.get(el.inputFirstName).type(dadosUser.firstName)
    cy.get(el.inputLastName).type(dadosUser.lastName)
    cy.get(el.inputPostalCode).type(dadosUser.postalCode)
  }

  buttonContinue() {
    cy.get(el.buttonContinue).click()
    cy.url().should('be.equal', Cypress.config().baseUrl + '/checkout-step-two.html')
  }

  buttonFinish() {
    cy.get(el.buttonFinish).click()
    cy.url().should('be.equal', Cypress.config().baseUrl + '/checkout-complete.html')
    cy.get(el.titleFinish).should('contain.text', 'Checkout: Complete!')
    cy.get(el.h2Header).should('contain.text', 'Thank you for your order!')
  }

  buttonBackHome() {
    cy.get(el.buttonBackHome).click()
    cy.url().should('be.equal', Cypress.config().baseUrl + '/inventory.html')
  }
}

export default new CartPage()