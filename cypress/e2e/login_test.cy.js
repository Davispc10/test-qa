/// <reference types="cypress" />
import loginPage from "../support/pages/login"

describe('Validar login', () => {

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

    it('username inválido', function () {
      loginPage.form(this.invalid.username, this.valid.password)
      loginPage.submit()
      loginPage.messageError(messageError.notMatch)
    });

    it('password inválido', function () {
      loginPage.form(this.valid.username, this.invalid.password)
      loginPage.submit()
      loginPage.messageError(messageError.notMatch)
    });

    it('username vazio', function () {
      loginPage.formPassword(this.valid.password)
      loginPage.submit()
      loginPage.messageError(messageError.userEmpty)
    });

    it('password vazio', function () {
      loginPage.formUsername(this.valid.username)
      loginPage.submit()
      loginPage.messageError(messageError.passwordEmpty)
    });

  })

  context('Validar login correto', () => {

    it('login válido', function () {
      loginPage.form(this.valid.username, this.valid.password)
      loginPage.submit()
    });

  })
})