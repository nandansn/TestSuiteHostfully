import { AddComputersPage } from "@pages/AddComputersPage";
import { HomePage } from "@pages/HomePage";
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";


Given("I am on the add computers page", () => {
    HomePage.open()
    HomePage.clickAddComputer()
})


When("I click on the create this computer button", () => {
    AddComputersPage.clickCreate();
})


When("I enter computer name as {string}",
    (name: string) => {
        AddComputersPage.enterName(name);
    });


Then("I enter introduced date with wrong format as {string}",
    (introduced: string) => {
        AddComputersPage.enterIntroduced(introduced);
    });


Then("I enter discontinued date with wrong format as {string}",
    (introduced: string) => {
        AddComputersPage.enterDiscontinued(introduced);
    });



Then("I should see the form validation error for name {string}", (message: string) => {
    AddComputersPage.nameFieldError.verifyMessage('have.text', message);
})


Then("I should see the form validation error for introduced date {string}", (message: string) => {
    AddComputersPage.introducedFieldError.verifyMessage('have.text', message);
})


Then("I should see the form validation error for discontinued date {string}", (message: string) => {
    AddComputersPage.discontinuedFieldError.verifyMessage('have.text', message);
})