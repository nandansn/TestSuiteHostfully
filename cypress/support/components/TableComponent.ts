import { BaseComponent } from "./BaseComponent";

/**
 * Table component class.
 * Contains methods for interacting with a table element.
 */
export class TableComponent extends BaseComponent {

    /**
     * Returns all rows in the table body.
     * @returns A Cypress.Chainable object representing the rows.
     */
    public getRows(): Cypress.Chainable {
        return this.getElement().find('tbody tr');
    }

    /**
     * Returns the columns in the specified row.
     * @param row The row to search for columns in.
     * @param index The index of the column to return.
     * @returns A Cypress.Chainable object representing the columns.
     */
    public getColumns(row: Cypress.Chainable, index: number): Cypress.Chainable {
        return row.find(`td:nth-child(${index})`);
    }
}
