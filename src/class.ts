//class ex 1
class Invoice {
  client: string;
  details: string;
  amount: number;

  constructor(client: string, details: string, amount: number) {
    (this.client = client), (this.details = details), (this.amount = amount);
  }
}


//instance of class Invoice
const invoiceOne = new Invoice("emma", "work on the website", 300);
const invoiceTwo = new Invoice("jon", "design the front end", 450);

let invoices: Invoice[] = [];
invoices.push(invoiceOne);
invoices.push(invoiceTwo);

invoices.forEach((inv) => {
  console.log(inv.client, inv.details);
});

//interface
interface isDoctor{
    name: string,
    age: number,
    speak(a: string): void,
    spend(b:number): number
}

const me: isDoctor = {
    name:'emma',
    age:46,
    speak(text: string){
        console.log(text);
    },
    spend(amount: number) {
        console.log(amount);
        return amount
    }
}

const operatePerson = (person: isDoctor) =>{
    console.log(person.name, person.age)
}
operatePerson(me) 



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
