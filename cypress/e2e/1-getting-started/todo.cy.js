/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example two do items by default', () => {

  it('displays two todo items by default', () => {
    cy.visit("https://demoqa.com/webtables")
    cy.get("#addNewRecordButton").click()


    //cy.get('.todo-list li').should('have.length', 2)
    //cy.get('.todo-list li').first().should('have.text', 'Pay electric bill')
    //cy.get('.todo-list li').last().should('have.text', 'Walk the dog')
  })


})
