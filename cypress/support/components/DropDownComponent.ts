import { BaseComponent } from "./BaseComponent";


/**
 * Dropdown component class that extends the BaseComponent class.
 */
export class DropDownComponent extends BaseComponent {
    /**
     * Select the specified option from the dropdown.
     * @param optionText The text of the option to select.
     */
    public select(optionText: string) {
        console.log(optionText);

        this.getElement()
            .select(optionText)
    }

}

