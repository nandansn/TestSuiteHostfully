import { ButtonComponent } from "@components/ButtonComponent";
import { AddComputersPage } from "./AddComputersPage";

/**
 * Page Object for the Edit Computer page of the application.
 * 
 * Extends AddComputersPage to reuse its methods for entering/editing computer details.
 * 
 * Provides additional methods to interact with the page elements and perform actions.
 */
export class EditComputersPage extends AddComputersPage {

    // A ButtonComponent representing the "Delete this computer" button on the page
    private readonly deleteButton = new ButtonComponent('input[type="submit"]');

    /**
     * Clicks on the "Delete this computer" button to delete the current computer.
     * This action is irreversible and will permanently remove the computer from the database.
     */
    public clickDelete(): void {
        this.deleteButton.click();
    }
}
