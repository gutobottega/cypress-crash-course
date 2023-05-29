/// <reference types="cypress" />

describe("Accomplishments", () => {
    beforeEach(() => {
        cy.visit("/accomplishments")
    })

    it("should submit accomplishment", () => {
        cy.getByDataCy('accomplishment-title-input').type('I Drink water!')
        cy.getByDataCy('accomplishment-input').type('I Drink 10L of water!')
        cy.getByDataCy('accomplishment-checkbox').click()
        cy.contains('Submit Accomplishment').click()
        cy.contains('This Accomplisment was Successfully Submitted').should('be.visible')
    })

    it("should submit accomplishment", () => {
        cy.getByDataCy('accomplishment-title-input').type('I Drink water!')
        cy.getByDataCy('accomplishment-input').type('I Drink 10L of water!')
        cy.getByDataCy('accomplishment-checkbox').click()
        cy.contains('Submit Accomplishment').click()
        cy.contains('Go Back').click()
        cy.getByDataCy('accomplishment-title-input').should('be.visible')
        cy.getByDataCy('accomplishment-input').should('be.visible')
    })
    
})