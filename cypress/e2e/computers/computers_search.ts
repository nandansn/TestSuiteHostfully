import { HomePage } from "@pages/HomePage";
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { TableComponent } from "@components/TableComponent";

Given("i am on the computer home page", () => {
    HomePage.open()
});

When("i enter the name of a computer {string} in the filter text field", (computerName: string) => {
    HomePage.enterName(computerName)
});

When("i click the filter button", () => {
    HomePage.clickFilterComputer()
});

Then("the list of computers table should not be displayed", () => {
    HomePage.verifyTableShouldNotExist();
})

Then("the list of computers table should be displayed", () => {
    HomePage.verifyTableExist();
})

Then("i should see the message {string}", (message: string) => {
    HomePage.filterMessageComponent.verifyMessage('have.text', message)
});

Then("i should see the record for search, with computer name {string} introduced on {string} discontinued on {string} and company as {string}", (computername: string, introducedon: string, discontinuedon: string, company: string) => {
    HomePage.computersTableComponent.verifyTableValues(computername, introducedon, discontinuedon, company)
})

Then("i should see the list of computers displayed include computers whose name contains Cosmac,  with computer name {string} introduced on {string} discontinued on {string} and company as {string}", (computername: string, introducedon: string, discontinuedon: string, company: string) => {
    HomePage.computersTableComponent.verifyTableValues(computername, introducedon, discontinuedon, company)
})
