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

    /**
     * Click the button using force when it is not interactable.
     */
    public forceClick() {
        this.getElement().click({ force: true });
    }
}
