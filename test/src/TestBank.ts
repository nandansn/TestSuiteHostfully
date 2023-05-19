import { Bank } from './bank'


let account = new Bank('nanda', 100000)

console.log(account.withdraw(1000))

let account2 = new Bank('nandakumar', 100000)

console.log(account2.withdraw(1000000))