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
  const menuItem1 = document.createElement("div");
  const menuItem2 = document.createElement("div");
  const menuItem3 = document.createElement("div");
  const menuItem4 = document.createElement("div");
  const menuItem5 = document.createElement("div");
  const menuItem6 = document.createElement("div");

  food.classList.add("menu-category");
  foodHeading.textContent = "Dishes";

  dish1.innerHTML = `<p><em>Grandma's Homemade Phở Bò</em></p>
  <p>- Beef Noodle soup</p>
  <p>This is Grandma's favorite dish.</p>`;
  menuItem1.classList.add("menu-item");
  menuItem1.insertAdjacentHTML("afterbegin", '<img src="assets/pho2.png">');
  menuItem1.append(dish1);

  dish2.innerHTML = `<p><em>Grandma's Homemade Phở Gà</em></p> 
  <p>- Chicken Noodle soup</p> 
  <p>This is Grandma's favorite dish.</p>`;
  menuItem2.classList.add("menu-item");
  menuItem2.insertAdjacentHTML("afterbegin", '<img src="assets/pho2.png">');
  menuItem2.append(dish2);

  dish3.innerHTML = `<p><em>Grandma's Homemade Bánh Mì</em></p>
  <p>- Vietnamese Sandwich</p> 
  <p>This is Grandma's favorite dish.</p>`;
  menuItem3.classList.add("menu-item");
  menuItem3.insertAdjacentHTML("afterbegin", '<img src="assets/pho2.png">');
  menuItem3.append(dish3);

  dish4.innerHTML = `<p><em>Cơm Tấm </em></p>
  <p>- Rice plate</p> 
  <p>This one is ok.</p>`;
  menuItem4.classList.add("menu-item");
  menuItem4.insertAdjacentHTML("afterbegin", '<img src="assets/pho2.png">');
  menuItem4.append(dish4);

  foodItems.classList.add("menu-items");
  foodItems.append(menuItem1, menuItem2, menuItem3, menuItem4);

  drinks.classList.add("menu-category");
  drinksHeading.textContent = "Drinks";

  drink1.innerHTML = `<p><em>Grandma's Homemde Thai Tea</em></p> 
    <p>- Thai ice tea</p> 
    <p>Grandma likes this.</p>`;
  menuItem5.classList.add("menu-item");
  menuItem5.insertAdjacentHTML("afterbegin", '<img src="assets/pho2.png">');
  menuItem5.append(drink1);

  drink2.innerHTML = `<p><em>Grandma's Homemde Jack 'n Coke</em></p> 
    <p>- Jack and Coke</p> 
    <p>Grandma loves this.</p>`;
  menuItem6.classList.add("menu-item");
  menuItem6.insertAdjacentHTML("afterbegin", '<img src="assets/pho2.png">');
  menuItem6.append(drink2);

  drinkItems.classList.add("menu-items");
  drinkItems.append(drink1, drink2);

  food.append(foodHeading, foodItems);
  drinks.append(drinksHeading, drinkItems);
  main.classList.add("menu-page");
  main.append(food, drinks);
  content.append(main);
}
