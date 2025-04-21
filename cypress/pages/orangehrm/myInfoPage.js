class MyInfoPage {
  // Navigate to the 'My Info' section
  navigateToMyInfo() {
    cy.get('a[href*="viewMyDetails"]').click()
  }

  // Click the 'Edit' button
  clickEditButton() {
    // Wait for the button to be visible and click it
    cy.get('button.oxd-icon-button').contains('Edit').should('be.visible').click()
  }

  // Update the first name
  updateFirstName(newFirstName) {
    cy.get('input[name="firstName"]').clear().type(newFirstName)
  }

  // Update the last name
  updateLastName(newLastName) {
    cy.get('input[name="lastName"]').clear().type(newLastName)
  }

  // Click the 'Save' button
  clickSave() {
    cy.get('button').contains('Save').click()
  }

  // Assert success message
  assertSuccessMessage() {
    cy.contains('Successfully Updated').should('be.visible')
  }

  // Assert the updated name
  assertUpdatedName(firstName, lastName) {
    cy.get('input[name="firstName"]').should('have.value', firstName)
    cy.get('input[name="lastName"]').should('have.value', lastName)
  }
}

export default MyInfoPage
