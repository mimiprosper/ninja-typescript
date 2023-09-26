//class ex 2:
export class Invoice {
    constructor(client, // can only read but cannot be changed in or outside the class
    details, // can access anywhere (in & outside the class)
    amount // can only be accessed in the class
    ) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
