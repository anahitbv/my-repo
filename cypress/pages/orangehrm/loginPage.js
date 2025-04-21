class LoginPage {
  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
  }

  fillUsername(username) {
    cy.get('input[name="username"]').type(username)
  }

  fillPassword(password) {
    cy.get('input[name="password"]').type(password)
  }

  clickLogin() {
    cy.get('button[type="submit"]').click()
  }

  assertLoginSuccessful() {
    cy.url().should('include', '/dashboard')
  }
}

export default LoginPage
