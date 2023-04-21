import { ButtonComponent } from "@components/ButtonComponent";
import { MessageComponent } from "@components/MessageComponent";

/**
 * Page Object for the Home page of the computers application.
 * Provides methods to interact with the home page elements and perform actions.
 */
export class HomePage {

    // A ButtonComponent representing the "Add a new computer" button on the page
    static addComputerButton = new ButtonComponent('#add');

    // A MessageComponent representing the message area on the page
    static messageComponent = new MessageComponent('div.alert-message.warning');

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
}
