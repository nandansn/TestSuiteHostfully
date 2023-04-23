import { ButtonComponent } from "@components/ButtonComponent";
import { AddComputersPage } from "./AddComputersPage";
import { MessageComponent } from "@components/MessageComponent";

/**
 * Page Object for the Edit Computer page of the application.
 * 
 * Extends AddComputersPage to reuse its methods for entering/editing computer details.
 * 
 * Provides additional methods to interact with the page elements and perform actions.
 */
export class EditComputersPage extends AddComputersPage {

    // A ButtonComponent representing the "Delete this computer" button on the page
    static deleteButton = new ButtonComponent('form input.btn.danger');

    // A ButtonComponent representing the "Delete this computer" button on the page
    static saveButton = new ButtonComponent('form input.btn.primary');

    // A MessageComponent representing the message area on the page
    static messageComponent = new MessageComponent('section#main h1');

    /**
     * Clicks on the "Delete this computer" button to delete the current computer.
     * This action is irreversible and will permanently remove the computer from the database.
     */
    static clickDelete(): void {
        this.deleteButton.forceClick()
    }

    static clickSave(): void {
        this.saveButton.click()
    }

    /**
     * Verif the page is Edit Computer page
     */
    static veirfyEditPage(): void {
        this.messageComponent.verifyMessage('have.text', 'Edit computer');
    }

    /**
     * 
     * verifty the computer name test field value in the edit form.
     * 
     * @param computername 
     */

    static verifyEditPage(computername: string): void {
        this.nameTextField.verifyValue(computername);
    }

}
