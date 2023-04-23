import { ButtonComponent } from "@components/ButtonComponent";
import { LinkComponent } from "@components/LinkComponent";
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

    // A MessageComponent representing the computer count on the page
    static countMessageComponent = new MessageComponent('section#main h1');

    // A MessageComponent representing the next link on the pagination
    static nextLinkComponent = new LinkComponent('li.next a');

    // A LinkComponent representing the previous link on the pagination
    static prevLinkComponent = new LinkComponent('li.prev a');


    // A LinkComponent representing the current message on the pagination, 
    // this is created as link element in the page
    static currentLinkComponent = new LinkComponent('li.current a');



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

    /**
     * Selects the computer and opens the computer edit page.
     * 
     * @param computerName 
     */
    static selectComputer(computerName: string): void {
        let row = this.computersTableComponent.getRow(1)
        let computerNameColumn = this.computersTableComponent.getColumns(row, 1)
        computerNameColumn.find('a').contains(computerName).click();
    }


    /**
     * Verify the home page is displayed. by checking the add new computer button exist
     */

    static verifyHomePage(): void {
        this.addComputerButton.verifyComponent('exist');
    }


}
