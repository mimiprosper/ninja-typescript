"use strict";
//enums
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const mainOne = {
    uid: 1,
    resourceName: ResourceType.AUTHOR,
    data: { name: "john" },
};
const mainTwo = {
    uid: 2,
    resourceName: ResourceType.BOOK,
    data: { name: "eze goes to school" },
};
