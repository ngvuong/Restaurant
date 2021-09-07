import { addContent } from "./content.js";
import { addMenu } from "./menu.js";
import { addContact } from "./contact.js";

addContent();

const content = document.querySelector("#content");
const navBar = document.createElement("nav");
const home = document.createElement("button");
const menu = document.createElement("button");
const contact = document.createElement("button");

home.textContent = "Home";
menu.textContent = "Menu";
contact.textContent = "Contact";

home.classList.add("active");
navBar.classList.add("nav");
navBar.append(home, menu, contact);
document.body.prepend(navBar);

document.addEventListener("click", () => {});
