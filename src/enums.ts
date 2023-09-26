//enums
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

interface ResourceMaterial<T> {
  uid: number;
  resourceName: ResourceType;
  data: T;
}

const mainOne: ResourceMaterial<object> = {
  uid: 1,
  resourceName: ResourceType.AUTHOR,
  data: { name: "john" },
};

const mainTwo: ResourceMaterial<boolean> = {
  uid: 2,
  resourceName: ResourceType.BOOK,
  data: false,
};
