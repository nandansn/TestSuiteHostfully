import { ButtonComponent } from "@components/ButtonComponent";
import { MessageComponent } from "@components/MessageComponent";
import { TableComponent } from "@components/TableComponent";
import { TextFieldComponent } from "@components/TextFieldComponent";

/**
 * Page Object for the Home page of the computers application.
 * Provides methods to interact with the home page elements and perform actions.
 */
export class HomePage {

    // A ButtonComponent representing the "Add a new computer" button on the page
    static addComputerButton = new ButtonComponent('#add');

    // A MessageComponent representing the message area on the page
    static messageComponent = new MessageComponent('div.alert-message.warning');

    // A TextFieldComponent representing the filter text intput field on the page
    static filterTextField = new TextFieldComponent("#searchbox")


    // A ButtonComponent representing the "Filter by name" button on the page
    static filterByNameButton = new ButtonComponent('#searchsubmit');

    // A MessageComponent representing the message area on the page
    static filterMessageComponent = new MessageComponent('div.well');


    // A table component representing the table of computers on the page
    static computersTableComponent = new TableComponent('table.computers');



    /**
     * Opens the Home page by visiting its URL.
     */
    static open(): void {
        cy.visit('/');
    }

    /**
     * Clicks on the "Add a new computer" button to open the Add Computer page.
     */
    static clickAddComputer(): void {
        this.addComputerButton.click();
    }


    /**
     * Clicks on the "Filter by name" button to open the Add Computer page.
     */
    static clickFilterComputer(): void {
        this.filterByNameButton.click();
    }

    /**
     * Enter the name of the computer in the "Computer name" field.
     * @param name The name of the computer to be entered.
     */
    static enterName(name: string): void {
        this.filterTextField.enter(name);
    }

    /**
    * Verifies that the table component does not exist in the homepage
    */
    static verifyTableShouldNotExist(): void {
        let emptyTable = new TableComponent("table.computers")
        emptyTable.verifyComponent('not.exist')
    }

    /**
    * Verifies that the table exists in the homepage
    */
    static verifyTableExist(): void {

        this.computersTableComponent.verifyComponent('exist')
    }


}
