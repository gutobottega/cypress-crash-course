/// <reference types="cypress" />

describe("Habits", () => {
    beforeEach(() => {
        cy.visit("/habits")
    })

    it("should show modal", () => {
        cy.get("#habit-add-btn").click()
        cy.get(".modal-dialog").should("be.visible")
    })

    it("show add habit", () => {
        cy.get("#habit-add-btn").click()
        cy.get("[placeholder='Habit']").type("Drink water!")
        cy.contains("Save Changes").click()
        cy.contains("Drink water!").should("be.visible")
    })

    it("changes habit status", () => {
        cy.get("#habit-add-btn").click()
        cy.get("[placeholder='Habit']").type("Drink water!")
        cy.contains("Save Changes").click()
        cy.get('[src="/static/media/close.fa7e5ead5078dad970c8de0491992cf5.svg"]').should("be.visible")
        cy.contains("Drink water!").click()
        cy.get('[src="/static/media/check.9e8832df330a1f2d4855cadd8e342e84.svg"]').should("be.visible")
    })
})