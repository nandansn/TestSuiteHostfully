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
     * Returns a row in the table body.
     * @returns A Cypress.Chainable object representing the rows.
     */
    public getRow(index: number): Cypress.Chainable {
        return this.getElement().find(`tbody tr:nth-child(${index})`);
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

    /**
    * Verifies that the values in the table row match the specified values
    * @param computername - The expected value for the 'computer name' column
    * @param introducedon - The expected value for the 'introduced on' column
    * @param discontinuedon - The expected value for the 'discontinued on' column
    * @param company - The expected value for the 'company' column
    */
    public verifyTableValues(computername: string, introducedon: string, discontinuedon: string, company: string): void {
        let row = this.getRow(1)
        this.getColumns(row, 1).should('contain.text', computername)
        row = this.getRow(1)
        this.getColumns(row, 2).should('contain.text', introducedon)
        row = this.getRow(1)
        this.getColumns(row, 3).should('contain.text', discontinuedon)
        row = this.getRow(1)
        this.getColumns(row, 4).should('contain.text', company)
    }


}
