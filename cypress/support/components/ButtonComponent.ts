import { BaseComponent } from "./BaseComponent";

/**
 * Button component class that extends the BaseComponent class.
 */
export class ButtonComponent extends BaseComponent {
    /**
     * Click the button.
     */
    public click() {
        this.getElement().click();
    }
}
