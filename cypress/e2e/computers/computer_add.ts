import { When } from "@badeball/cypress-cucumber-preprocessor";

When("I visit the computers", () => {
    cy.visit('/');
});
