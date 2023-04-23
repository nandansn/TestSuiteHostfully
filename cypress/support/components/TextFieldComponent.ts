import { BaseComponent } from "./BaseComponent";

/**
 * Text field component class that extends the BaseComponent class.
 */
export class TextFieldComponent extends BaseComponent {
    /**
     * Enter the specified value into the text field.
     * 
     * @param value The value to enter.
     */
    public enter(value: string) {
        this.getElement().clear();
        this.getElement().type(value);
    }


    /**
     * clear the existing content of the text field.
     */

    public clear() {
        this.getElement().clear();
    }

    /**
     * 
     * verify the value of the text field.
     * 
     * @param computerName 
     */
    public verifyValue(computerName: string) {
        this.getElement().should("have.value", computerName);
    }
}
