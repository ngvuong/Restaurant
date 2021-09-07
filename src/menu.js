export function addMenu() {
  const content = document.querySelector("#content");

  const main = document.createElement("main");
  const food = document.createElement("section");
  const foodHeading = document.createElement("h2");
  const foodItems = document.createElement("ol");
  const dish1 = document.createElement("li");
  const dish2 = document.createElement("li");
  const dish3 = document.createElement("li");
  const dish4 = document.createElement("li");
  const drinks = document.createElement("section");
  const drinksHeading = document.createElement("h2");
  const drinkItems = document.createElement("ol");
  const drink1 = document.createElement("li");
  const drink2 = document.createElement("li");

  food.classList.add("menu-category");
  foodHeading.textContent = "Dishes";

  dish1.innerHTML = `<em>Grandma's Homemade Phở Bò</em> <br />
    - Beef Noodle soup <br/>
    This is Grandma's favorite dish.`;

  dish2.innerHTML = `<em>Grandma's Homemade Phở Gà</em> <br />
    - Chicken Noodle soup <br/>
    This is Grandma's favorite dish.`;

  dish3.innerHTML = `<em>Grandma's Homemade Bánh Mì</em> <br />
    - Vietnamese Sandwich <br/>
    This is Grandma's favorite dish.`;

  dish4.innerHTML = `<em>Cơm Tấm </em> <br />
    - Rice plate <br/>
    This one is ok.`;

  foodItems.classList.add("menu-items");
  foodItems.append(dish1, dish2, dish3, dish4);

  drinks.classList.add("menu-category");
  drinksHeading.textContent = "Drinks";

  drink1.innerHTML = `<em>Grandma's Homemde Thai Tea</em> <br/>
    - Thai ice tea <br/>
    Grandma likes this.`;

  drink2.innerHTML = `<em>Grandma's Homemde Jack 'n Coke</em> <br />
    - Jack and Coke <br/>
    Grandma loves this.`;

  drinkItems.classList.add("menu-items");
  drinkItems.append(drink1, drink2);

  food.append(foodHeading, foodItems);
  drinks.append(drinksHeading, drinkItems);
  main.classList.add("menu-page");
  main.append(food, drinks);
  content.append(main);
}
