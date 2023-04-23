import { TextFieldComponent } from "@components/TextFieldComponent";
import { ButtonComponent } from "@components/ButtonComponent";
import { DropDownComponent } from "@components/DropDownComponent";
import { MessageComponent } from "@components/MessageComponent";

/**
 * Page Object for the Add Computer page of the application.
 * Provides methods to interact with the page elements and perform actions.
 * 
 */
export class AddComputersPage {

    // A ButtonComponent representing the "Create this computer" button on the page
    static createButton = new ButtonComponent('input[type="submit"]');

    // A ButtonComponent representing the "Cancel" button on the page
    static cancelButton = new ButtonComponent('a.btn[href*="computers"]');

    // A TextFieldComponent representing the "Computer name" field on the page
    static nameTextField = new TextFieldComponent('#name');

    // A TextFieldComponent representing the "Introduced date" field on the page
    static introducedTextField = new TextFieldComponent('#introduced');

    // A TextFieldComponent representing the "Discontinued date" field on the page
    static discontinuedTextField = new TextFieldComponent('#discontinued');

    // A DropDownComponent representing the "Company" dropdown on the page
    static companySelectField = new DropDownComponent('#company');

    static nameFieldError = new MessageComponent('div.input input#name + span.help-inline');

    static introducedFieldError = new MessageComponent('div.input input#introduced + span.help-inline');

    static discontinuedFieldError = new MessageComponent('div.input input#discontinued + span.help-inline');

    /**
     * Enter the name of the computer in the "Computer name" field.
     * @param name The name of the computer to be entered.
     */
    static enterName(name: string): void {
        this.nameTextField.enter(name);
    }

    /**
     * Enter the introduced date of the computer in the "Introduced date" field.
     * @param introducedOn The date the computer was introduced.
     */
    static enterIntroduced(introducedOn: string): void {
        this.introducedTextField.enter(introducedOn);
    }

    /**
     * Enter the discontinued date of the computer in the "Discontinued date" field.
     * @param discontinuedOn The date the computer was discontinued.
     */
    static enterDiscontinued(discontinuedOn: string): void {
        this.discontinuedTextField.enter(discontinuedOn)
    }

    /**
     * Select the company of the computer from the "Company" dropdown.
     * @param companyName The name of the company to be selected.
     */
    static selectCompany(companyName: string): void {
        this.companySelectField.select(companyName);
    }

    /**
     * Clicks on the "Create this computer" button to submit the form and create a new computer.
     */
    static clickCreate(): void {
        this.createButton.click();
    }

    /**
     * Clicks on the "Cancel" button to discard the changes and return to the Home page.
     */
    static clickCancel(): void {
        this.cancelButton.click();
    }

    /**
    *    It takes a computer object as input, which contains the name, introduction date, discontinuation date, and brand of 
    *    the computer. 
    * 
    *    @param computer An object containing the name, introduction date, discontinuation date, and brand of the computer.
    *    @returns void
    */

    static enterComputer(computer: { name: string, introducedOn: string, discontinuedOn: string, brand: string }): void {
        console.log(computer.brand);
        computer?.name.length > 0 ? this.enterName(computer.name) : console.log("Name is empty String")
        computer?.introducedOn.length > 0 ? this.enterIntroduced(computer.introducedOn) : console.log("Introduced On is empty String")
        computer?.discontinuedOn.length > 0 ? this.enterDiscontinued(computer.discontinuedOn) : console.log("Discontinued On is empty String")
        computer?.brand.length > 0 ? this.selectCompany(computer.brand) : console.log("Brand is empty String")
    }

    /**
     * 
     * @param message Verify the field validation error message
     */

    static verifyFieldError(message: string): void {
        this.nameFieldError.verifyMessage('have.text', message)
    }
}
