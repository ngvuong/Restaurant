export function addContent() {
  const content = document.querySelector("#content");
  const headline = document.createElement("h1");
  const message = document.createElement("p");

  headline.textContent = "Grandma's Homemade";
  message.textContent =
    "Welcome! Feel at home and have a lovely meal at Grandma's Homemade! We have all your favorite Vietnamese cuisines and drinks";
  message.classList.add("message");
  window.addEventListener("load", () => {
    content.append(headline, message);
  });
}
