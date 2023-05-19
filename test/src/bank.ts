export class Bank {
    static acctInitNumber: number = 1000900;
    private accountNumber:number;
    private amount:number;
    private name: string;

    constructor(name: string, amount: number) {
        this.accountNumber = Bank.acctInitNumber++
        this.amount = amount
        this.name = name
    }

    withdraw(amount: number) {
        
        if (this.amount < amount) {
            return {
                accountNumber: this.accountNumber,
                message: 'Insufficient amount',
                amountWithdraw: 0

            }
        } else {
            this.amount -= amount
            return {
                accountNumber: this.accountNumber,
                amountWithdraw: amount
            }
        }
    }
}