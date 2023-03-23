/// <reference types="cypress" />
import loginPage from "../support/pages/login"
import inventoryPage from "../support/pages/inventory"

describe('Login', () => {

  var messageError = {
    notMatch: 'Epic sadface: Username and password do not match any user in this service',
    userEmpty: 'Epic sadface: Username is required',
    passwordEmpty: 'Epic sadface: Password is required'
  }

  beforeEach(function () {
    cy.fixture('login').then(function (login) {
      this.valid = login.userValid
      this.invalid = login.userInvalid
    })
    cy.visit('/')
  })

  context('Validar login incorreto', () => {

    it('Username inválido', function () {
      loginPage.form(this.invalid.username, this.valid.password)
      loginPage.submit()
      loginPage.messageError(messageError.notMatch)
    });

    it('Password inválido', function () {
      loginPage.form(this.valid.username, this.invalid.password)
      loginPage.submit()
      loginPage.messageError(messageError.notMatch)
    });

    it('Username vazio', function () {
      loginPage.formPassword(this.valid.password)
      loginPage.submit()
      loginPage.messageError(messageError.userEmpty)
    });

    it('Password vazio', function () {
      loginPage.formUsername(this.valid.username)
      loginPage.submit()
      loginPage.messageError(messageError.passwordEmpty)
    });
  })

  context('Validar login correto', () => {

    it('Login válido', function () {
      loginPage.form(this.valid.username, this.valid.password)
      loginPage.submit()
      inventoryPage.titlePage('Swag Labs')
      cy.url().should('be.equal', Cypress.config().baseUrl + '/inventory.html')
    })
  })
})