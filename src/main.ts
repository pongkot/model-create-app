import { sayHello } from "./greet";

function showHello(divName: string, name: string) {
  const elt = document.getElementById(divName);
  elt.innerText = sayHello(name);
}

showHello("greeting", "TypeScript");

/////////////////////////////////////////////////////////////////////

const input = {
  className: "person",
  properties: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "age",
      type: "number",
    },
    {
      name: "birthdate",
      type: "Date",
    },
    {
      name: "graduate",
      type: "boolean",
    },
  ],
};

let result: string = "";
const templateClass = "export class [className] { [properties] [method] }";

result = templateClass.replace("[className]", input.className);

const properties: string = input.properties
  .map((i: { name: string; type: string }) => {
    return `private ${i.name}: ${i.type};`;
  })
  .join(" ");

const methods: string = input.properties
  .map((i: { name: string; type: string }) => {
    return {
      getter: `get${i.name}(): ${i.type} { return this.${i.name}; };`,
      setter: `set${i.name}(${i.name}: ${i.type}): this { this.${i.name} = ${i.name}; return this; };`,
    };
  })
  .map((i) => {
    return [i.getter, i.setter].join(" ");
  })
  .join(" ");

result = result.replace("[properties]", properties);
result = result.replace("[method]", methods);

showHello("greeting", result);
