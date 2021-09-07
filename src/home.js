export function addHome() {
  const content = document.querySelector("#content");
  const homeBtn = document.querySelector(".btn");
  const main = document.createElement("main");
  const headline = document.createElement("h1");
  const message = document.createElement("p");

  headline.textContent = "Grandma's Homemade";
  message.textContent = `Welcome! Feel at home and have a lovely meal at Grandma's Homemade!
     We have all of your favorite Grandma's signature Vietnamese cuisines and drinks.`;
  message.classList.add("message");
  main.classList.add("home-page");
  main.append(headline, message);

  homeBtn.classList.add("active");

  window.addEventListener("load", () => {
    content.appendChild(main);
  });
}
