export function addMenu() {
  const content = document.querySelector("#content");

  const main = document.createElement("main");
  const title = document.createElement("h1");
  const food = document.createElement("section");
  const foodSubtitle = document.createElement("h2");
  const menu = document.createElement("div");
  const item1 = document.createElement("div");
  const item2 = document.createElement("div");
  const item3 = document.createElement("div");
  const item4 = document.createElement("div");
  const drinks = document.createElement("section");
  const drinkSubtitle = document.createElement("h2");
  const drink1 = document.createElement("div");
  const drink2 = document.createElement("div");

  main.classList.add("menu-page");

  main.append(food, drinks);
  content.append(main);
}
