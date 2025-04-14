describe('Demo QA Form Test', () => {

    it('Fills out and submits the form', () => {
      // Step 1: Visit the form page
      cy.visit('https://demoqa.com/automation-practice-form')
      cy.url().should('include', 'demoqa')
  
      // Step 2: Fill out first and last name
      cy.get('#firstName').type('Anahit')
      cy.get('#lastName').type('Tester')
  
      // Step 3: Fill out email
      cy.get('#userEmail').type('anahit@example.com')
  
      // Step 4: Select gender
      cy.get('label[for="gender-radio-2"]').click() // Female
  
      // Step 5: Fill out mobile number
      cy.get('#userNumber').type('1234567890')
  
      // Step 6: Select hobbies
      cy.get('label[for="hobbies-checkbox-1"]').click() // Sports
  
      // Step 7: Current address
      cy.get('#currentAddress').type('Yerevan, Armenia')
  
      // Step 8: Click Submit
      cy.get('#submit').click()
  
      // Step 9: Assert confirmation message is visible
      cy.get('#example-modal-sizes-title-lg').should('have.text', 'Thanks for submitting the form')
  
      // Step 10: Close the modal
      cy.get('#closeLargeModal').click({ force: true })

    })
  
  })
  