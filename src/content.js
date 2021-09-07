export function addContent() {
  const content = document.querySelector("#content");
  const main = document.createElement("main");
  const headline = document.createElement("h1");
  const message = document.createElement("p");

  headline.textContent = "Grandma's Homemade";
  message.textContent = `Welcome! Feel at home and have a lovely meal at Grandma's Homemade!
     We have all of your favorite Grandma's signature Vietnamese cuisines and drinks.`;
  message.classList.add("message");
  main.classList.add("home");
  main.append(headline, message);

  window.addEventListener("load", () => {
    content.appendChild(main);
  });
}
