import { el } from './elements'

class InventoryPage {

  titlePage(title) {
    cy.get(el.titlePage).should('contain.text', title)
  }

  addItemCart(item) {
    cy.get(`${el.itemDescription}:contains("${item}")`)
      .find(el.buttonAddCart)
      .as('btn')
      .should('contain.text', 'Add to cart')
      .click()

    cy.get('@btn').should('contain.text', 'Remove')
  }

  removeItemCart(item) {
    cy.get(`${el.itemDescription}:contains("${item}")`)
      .find(el.buttonAddCart)
      .as('btn')
      .should('contain.text', 'Remove')
      .click()

    cy.get('@btn').should('contain.text', 'Add to cart')
  }

  openProductAndAdd(item) {
    cy.get(`${el.itemDescription}:contains("${item}")`)
      .find(el.itemNameProduct)
      .click()
    cy.get(el.buttonAddCart).as('btn')
      .should('contain.text', 'Add to cart')
      .click()

    cy.get('@btn').should('contain.text', 'Remove')
  }

  openProductAndRemove(item) {
    cy.get(`${el.itemDescription}:contains("${item}")`)
      .find(el.itemNameProduct)
      .click()
    cy.get(el.buttonAddCart).as('btn')
      .should('contain.text', 'Remove')
      .click()

    cy.get('@btn').should('contain.text', 'Add to cart')
  }

  backProducts() {
    cy.get(el.buttonBackProducts).click()
  }

  quantItemCart(quant) {
    cy.get(el.buttonCart).should('contain.text', quant)
  }

  openCart() {
    cy.get(el.buttonCart).click()
  }

  selectFilter(filter) {
    cy.get(el.selectFilter).select(filter)
  }

}

export default new InventoryPage()