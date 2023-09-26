"use strict";
//class ex 1
class Invoice {
    constructor(client, details, amount) {
        (this.client = client), (this.details = details), (this.amount = amount);
    }
}
//instance of class Invoice
const invoiceOne = new Invoice("emma", "work on the website", 300);
const invoiceTwo = new Invoice("jon", "design the front end", 450);
let invoices = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);
invoices.forEach((inv) => {
    console.log(inv.client, inv.details);
});
const me = {
    name: 'emma',
    age: 46,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(amount);
        return amount;
    }
};
const operatePerson = (person) => {
    console.log(person.name, person.age);
};
operatePerson(me);
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("luke", "ui/ux design", 450);
// docTwo = new Payment("monday", "api design", 360);
//array
/*
let docs: HasFormatter[] = [];
docs.push(docOne)
docs.push(docTwo)
console.log(docs);
*/
