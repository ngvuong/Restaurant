export function addMenu() {
  const content = document.querySelector("#content");

  const main = document.createElement("main");
  const food = document.createElement("section");
  const foodHeading = document.createElement("h2");
  const foodItems = document.createElement("ol");
  const dish1 = document.createElement("li");
  const dish2 = document.createElement("div");
  const dish3 = document.createElement("div");
  const dish4 = document.createElement("div");
  const drinks = document.createElement("section");
  const drinksHeading = document.createElement("h2");
  const drinkItems = document.createElement("ol");
  const drink1 = document.createElement("div");
  const drink2 = document.createElement("div");

  food.classList.add("menu-category");
  foodHeading.textContent = "Dishes";
  dish1.innerHTML = `<em>Phở Bò</em> <br />
    - Beef Noodle soup <br/>
    This is Grandma's favorite dish.`;

  dish2.innerHTML = `<em>Phở Gà</em> <br />
    - Beef Noodle soup <br/>
    This is Grandma's favorite dish.`;

  dish3.innerHTML = `<em>Bánh Mì</em> <br />
    - Vietnamese Sandwich <br/>
    This is Grandma's favorite dish.`;

  dish4.innerHTML = `<em></em></em> <br />
    - Beef Noodle soup <br/>
    This is Grandma's favorite dish.`;

  foodItems.append(dish1, dish2, dish3, dish4);

  drinks.classList.add("menu-category");
  drinksHeading.textContent = "Drinks";
  food.append(foodHeading, foodItems);
  drinks.append(drinksHeading, drinkItems);
  main.classList.add("menu-page");
  main.append(food, drinks);
  content.append(main);
}
