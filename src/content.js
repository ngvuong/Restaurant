export function addContent() {
  const content = document.querySelector("#content");
  const headline = document.createElement("h1");
  const message = document.createElement("p");

  headline.textContent = "Grandma's Phở";
  message.textContent =
    "Welcome! Feel at home and have a lovely meal at Backyard Cuisines!";

  window.addEventListener("load", () => {
    content.append(headline, message);
  });
}
