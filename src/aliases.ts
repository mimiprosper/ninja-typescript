//aliases declaration
type StringOrNum = string | number;
type objWithName = { name: string; uid: StringOrNum };
type person = { name: string; age: number };
type itemDes = string

let logInfo: (obj: { name: string; age: number }) => void; //explicit declaration

//ex 1:
logInfo = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};

const logDetails = (uid: StringOrNum, item: itemDes) => {
  console.log(`${item} has a kind of ${uid}`);
};

const hello = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};
