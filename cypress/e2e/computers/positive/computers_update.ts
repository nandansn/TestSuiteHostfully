import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { AddComputersPage } from "@pages/AddComputersPage";
import { EditComputersPage } from "@pages/EditComputersPage";
import { HomePage } from "@pages/HomePage";

Given('I am on the computers home page', () => {
    HomePage.open()
});

When('I filter computers by name {string}', (computerName: string) => {
    HomePage.enterName(computerName)
    HomePage.clickFilterComputer()
});

Then('I select the {string} computer from the filtered list', (computerName: string) => {
    HomePage.selectComputer(computerName);
});

Then('I should be on the edit computer page for {string}', () => {
    EditComputersPage.veirfyEditPage();
});


Then('I click the "Cancel" button', () => {
    EditComputersPage.clickCancel();
})


Then('I should be redirected to the home page',() => {
    HomePage.verifyHomePage();
})


Then("I enter {string} and {string} and {string} and {string}",
    (name: string, introducedOn: string, discontinuedOn: string, brand: string) => {
        EditComputersPage.enterComputer({ name, introducedOn, discontinuedOn, brand })
    });


Then("I click the Save this computer button", () => {
    EditComputersPage.clickSave();
})

Then("I should see the message {string}", (message: string) => {
    HomePage.messageComponent.verifyMessage('have.text', message);
})

