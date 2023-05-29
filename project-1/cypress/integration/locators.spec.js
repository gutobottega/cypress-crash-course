/// <reference types="cypress" />

describe("Locators", () => {
    beforeEach(() => {
        cy.visit("/elements")
    })

    it("locating elements with get", () => {
        // Get all elements by tag name
        cy.get("button")

        // Get all elements by class (use .)
        cy.get(".btn-with-class")

        cy.get(".Elements-btn.btn-with-class")

        // Get all elements with specific classes 
        cy.get("[class='Elements-btn btn-with-class']")
        cy.get("[class='Elements-btn btn-with-class more-btn-classes']")

        // Get all elements with specific classes 
        cy.get("[id='btn-with-id']")
        // or # to supress
        cy.get("#btn-with-id")

        //Get by testid
        cy.get("[data-testid='btn-with-testid']")

        //Get by testid using a custom command
        cy.getByTestId("btn-with-testid")

        //Get by tagname AND class AND testid
        cy.get("button.Elements-btn[data-testid='btn-with-testid']")
    })

    it("Locating elements with contains", () => {
        // Get element by text
        cy.contains("Unique Text")
        // Contains return only one element
        cy.contains("Not Unique Text")

        cy.contains("[type='submit']", "Not Unique Text")
        
        cy.get("[type='submit']").contains("Not Unique Text")

        cy.contains("form", "Not Unique Text")

    })

    it("Locating elements with find", () => {
        //Get all btn with id in the form 
        cy.get("#form-1").find('.btn-1')
        cy.get("#form-2").find('.btn-1')
        //Two get together will not bind
        cy.get("#form-2").get('.btn-1')
    })
})