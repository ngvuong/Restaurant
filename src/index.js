import { addHome } from "./home.js";
import { addMenu } from "./menu.js";
import { addContact } from "./contact.js";

(function contentDisplay() {
  const content = document.querySelector("#content");
  const navBar = document.createElement("nav");
  const home = document.createElement("button");
  const menu = document.createElement("button");
  const contact = document.createElement("button");

  home.textContent = "Home";
  menu.textContent = "Menu";
  contact.textContent = "Contact";

  home.classList.add("btn", "home");
  menu.classList.add("btn", "menu");
  contact.classList.add("btn", "contact");

  navBar.classList.add("nav");
  navBar.append(home, menu, contact);
  document.body.prepend(navBar);
  addHome();

  const buttons = document.querySelectorAll(".btn");

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

  buttons.forEach((btn) => {
    btn.addEventListener("click", addContent);
  });
})();
