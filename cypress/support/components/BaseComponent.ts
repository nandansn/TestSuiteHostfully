/**
 * Base component class that contains common methods for interacting with UI elements.
 */
export class BaseComponent {
    /**
     * The selector for the UI element.
     */
    constructor(private readonly selector: string) { }

    /**
     * Get the Cypress object representing the UI element.
     */
    protected getElement() {
        return cy.get(this.selector);
    }
}
