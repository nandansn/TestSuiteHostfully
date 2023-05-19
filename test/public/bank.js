"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bank = void 0;
class Bank {
    constructor(name, amount) {
        this.accountNumber = Bank.acctInitNumber++;
        this.amount = amount;
        this.name = name;
    }
    withdraw(amount) {
        if (this.amount < amount) {
            return {
                accountNumber: this.accountNumber,
                message: 'Insufficient amount',
                amountWithdraw: 0
            };
        }
        else {
            this.amount -= amount;
            return {
                accountNumber: this.accountNumber,
                amountWithdraw: amount
            };
        }
    }
}
Bank.acctInitNumber = 1000900;
exports.Bank = Bank;
