import { AddComputersPage } from "@pages/AddComputersPage";
import { HomePage } from "@pages/HomePage";
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";


Given("I am on the add computers page", () => {
    HomePage.open()
    HomePage.clickAddComputer()
})

When("I enter {string} and {string} and {string} and {string}",
    (name: string, introducedOn: string, discontinuedOn: string, brand: string) => {
        AddComputersPage.enterComputer({ name, introducedOn, discontinuedOn, brand })
    });

Then("I click on the create this computer button", () => {
    AddComputersPage.clickCreate();
})

Then("I should see the {string}", (message: string) => {
    HomePage.messageComponent.verifyMessage('have.text', message);
})