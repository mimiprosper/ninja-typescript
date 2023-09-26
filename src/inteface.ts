// with interface
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docTwo: Resource<object> = {
  uid: 1,
  resourceName: "person",
  data: { name: "paul" },
};

const docThree: Resource<string[]> = {
  uid: 3,
  resourceName: "shopping list",
  data: ["bread", "milk", "butter"],
};
