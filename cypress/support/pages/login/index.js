import { el } from './elements'

class LoginPage {

  form(username, password) {
    cy.get(el.inputUsername).type(username)
    cy.get(el.inputPassword).type(password, { log: false })
  }

  formUsername(username) {
    cy.get(el.inputUsername).type(username)
  }

  formPassword(password) {
    cy.get(el.inputPassword).type(password, { log: false })
  }

  submit() {
    cy.get(el.buttonLogin).click()
  }

  messageError(message) {
    cy.get(el.messageError).should('contain.text', message)
  }

}

export default new LoginPage()