import {HasFormatter} from '../interfaces/HasFormatter.js'

//class ex 2:
export class Invoice implements HasFormatter {
  constructor(
    readonly client: string, // can only read but cannot be changed in or outside the class
    public details: string, // can access anywhere (in & outside the class)
    private amount: number // can only be accessed in the class
  ) {}

  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}
