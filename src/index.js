import { addContent } from "./content.js";
import { addMenu } from "./menu.js";
import { addContact } from "./contact.js";

addContent();

const content = document.querySelector("#content");
const navBar = document.createElement("nav");
navBar.classList.add("nav");
document.body.prepend(navBar);

document.addEventListener("click", () => {});
