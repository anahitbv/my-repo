import { faker } from '@faker-js/faker';

describe('Cypress 2: Automation Scenario Practice', () => {
  it('should complete the full purchase flow with Faker', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

    // Search and assert one result
    cy.get('.search-keyword').type('Brocolli');
    cy.wait(1000);
    cy.get('.products .product:visible').should('have.length', 1);
    cy.get('.product:visible').contains('Brocolli');

    // Increase quantity to 3
    cy.get('.product:visible').within(() => {
      cy.get('.increment').click().click();
      cy.get('.quantity').should('have.value', '3');
    });

    // Add to cart
    cy.get('.product:visible').within(() => {
      cy.contains('ADD TO CART').click();
    });

    // Open cart
    cy.get('.cart-icon').click();

    // Assert product in cart preview
    cy.get('.cart-preview').should('be.visible');
    cy.get('.cart-preview').contains('Brocolli');

    // Proceed to checkout
    cy.contains('PROCEED TO CHECKOUT').click();

    // Assert product name
    cy.get('.product-name').should('contain.text', 'Brocolli');

    // Promo code generation using Faker
    const promoCode = faker.string.alphanumeric(10); // Generates a random 10-character promo code
    cy.get('.promoCode').clear().type(promoCode);
    cy.get('.promoBtn').click();

    // Wait for message and assert
    cy.get('.promoInfo', { timeout: 10000 })
      .should('be.visible')
      .and('contain.text', 'Invalid code');

    // Place Order
    cy.contains('Place Order').click();

    // Select Armenia as the country
    cy.get('select').select('Armenia');

    // Agree to terms
    cy.get('.chkAgree').check();

    // Click proceed
    cy.contains('Proceed').click();

    // Final thank you
    cy.contains('Thank you', { matchCase: false }).should('be.visible');
  });
});
