/// <reference types="cypress" />

describe('Validar login', () => {

  var username = 'user_incorreto'
  var password = 'pass_incorreto'

  var user = {
    username: 'standard_user',
    password: 'secret_sauce'
  }

  var messagemError = 'Epic sadface: Username and password do not match any user in this service'

  beforeEach(function () {
    cy.visit('/')
  })

  context('Validar login incorreto', () => {

    it('username inválido', () => {
      cy.get('#user-name').type(username)
      cy.get('#password').type(user.password)
      cy.get('#login-button').click()
      cy.get('[data-test="error"]').should('contain.text', messagemError)
    });

    it('password inválido', () => {
      cy.get('#user-name').type(user.username)
      cy.get('#password').type(password)
      cy.get('#login-button').click()
      cy.get('[data-test="error"]').should('contain.text', messagemError)
    });

  })

  context('Validar login correto', () => {

    it('login válido', () => {
      cy.get('#user-name').type(user.username)
      cy.get('#password').type(user.password)
      cy.get('#login-button').click()
    });

  })
})