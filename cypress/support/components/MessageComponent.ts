import { BaseComponent } from "./BaseComponent";

/**
 * Message component class that extends the BaseComponent class.
 */
export class MessageComponent extends BaseComponent {
    /**
     * Verify that the expected text is displayed in the message.
     * @param expectedMessage The text to verify.
     */
    public verifyMessage(key: string, expectedMessage: string,): void {

        this.getElement().should(key, expectedMessage)


    }
}

