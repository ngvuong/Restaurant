import { addContent } from "./content.js";
import { addMenu } from "./menu.js";
import { addContact } from "./contact.js";

addContent();

const content = document.querySelector("#content");
const navBar = document.createElement("nav");
const home = document.createElement("button");
const menu = document.createElement("button");
const contact = document.createElement("button");
navBar.classList.add("nav");
navBar.document.body.prepend(navBar);

document.addEventListener("click", () => {});
