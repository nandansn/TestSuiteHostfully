import { BaseComponent } from "./BaseComponent";

/**
 * Text field component class that extends the BaseComponent class.
 */
export class TextFieldComponent extends BaseComponent {
    /**
     * Enter the specified value into the text field.
     * @param value The value to enter.
     */
    public enter(value: string) {
        this.getElement().type(value);
    }
}
