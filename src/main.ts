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

let result = "";
const templateClass = "export class [className] { [properties] [method] }";

result = templateClass.replace("[className]", input.className);

const properties = input.properties
  .map((i: { name: string; type: string }) => {
    return `private ${i.name}: ${i.type};`;
  })
  .join("");

result = result.replace("[properties]", properties);

showHello("greeting", result);
