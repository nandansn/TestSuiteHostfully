import { BaseComponent } from './BaseComponent';
import { ButtonComponent } from './ButtonComponent';

/**
 * Represents the pagination component on the page.
 * Extends the BaseComponent class.
 */


export default class PaginationComponent extends BaseComponent {
    static previousButton = new ButtonComponent('li.prev a')
    static nextButton = new ButtonComponent('li.next a')

    /**
     * Clicks the previous button in the pagination component.
     */


    static clickPrevious() {
        this.previousButton.click();
    }

    /**
     * Clicks the next button in the pagination component.
     */


    static clickNext() {
        this.nextButton.click();
    }
}
