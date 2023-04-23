import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { EditComputersPage } from "@pages/EditComputersPage";
import { HomePage } from "@pages/HomePage";

Given('I am on the computers home page', () => {
    HomePage.open()
});

When('I filter the computers by {string}', (computerName: string) => {
    HomePage.enterName(computerName)
    HomePage.clickFilterComputer()
});

When('I select the computer {string} from the filtered list', (computerName: string) => {
    HomePage.selectComputer(computerName);

});

Then('I should be redirected to the computer edit page', () => {
    EditComputersPage.veirfyEditPage();
});

When('I click the "Delete" button', () => {
    EditComputersPage.clickDelete();
});

Then('I should see the message {string}', (message: string) => {
    HomePage.messageComponent.verifyMessage('have.text', message);
});
