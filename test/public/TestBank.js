"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bank_1 = require("./bank");
let account = new bank_1.Bank('nanda', 100000);
console.log(account.withdraw(1000));
let account2 = new bank_1.Bank('nandakumar', 100000);
console.log(account2.withdraw(1000000));
