import { addHome } from "./home.js";
import { addMenu } from "./menu.js";
import { addContact } from "./contact.js";

// IIFE for display
(function contentDisplay() {
  const content = document.querySelector("#content");
  const navBar = document.createElement("nav");
  const home = document.createElement("button");
  const menu = document.createElement("button");
  const contact = document.createElement("button");

  // Setup navigation for tabbed browsing
  home.textContent = "Home";
  menu.textContent = "Menu";
  contact.textContent = "Contact";

  navBar.classList.add("nav");
  navBar.append(home, menu, contact);
  document.body.prepend(navBar);

  const buttons = document.querySelectorAll("button");

  buttons.forEach((btn) => {
    btn.classList.add("btn");
    btn.addEventListener("click", addContent);
  });

  // Initial page load call to add homepage
  addHome();

  // Page switching logic to add active tab contents
  function addContent() {
    if (!this.classList.contains("active")) {
      buttons.forEach((btn) => btn.classList.remove("active"));
      content.textContent = "";
      this.classList.add("active");
      const page = this.textContent;
      if (page === "Home") {
        addHome();
      } else if (page === "Menu") {
        addMenu();
      } else addContact();
    }
  }
})();
