import { BaseComponent } from "./BaseComponent";
import { ButtonComponent } from "./ButtonComponent";

/**
 * Button component class that extends the BaseComponent class.
 */
export class LinkComponent extends BaseComponent {

    /**
    * Click the link.
    */
    public click(): void {
        this.getElement().click();
    }


    /**
     * Verif the link has been disabled
     */
    public verifyLinkIsDisabled(): void {
        this.getElement().should('not.have.attr', 'href');
    }

    /**
     * Verify that the expected text is displayed in the message.
     * @param expectedMessage The text to verify.
     */
    public verifyMessage(key: string, expectedMessage: string,): void {
        this.getElement().should(key, expectedMessage)
    }

}
