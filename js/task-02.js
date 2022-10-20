const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// for (let i = 0; i < ingredients.length; i += 1) {
//   const ingredient = document.createElement("li");
//   ingredient.textContent = ingredients[i];
//   console.log(ingredient);
// }

const ingredientsRefs = document.querySelector("#ingredients");
const itemsArr = [];

ingredients.forEach((el) => {
  const item = document.createElement("li");
  item.textContent = el;
  item.classList.add("item");
  itemsArr.push(item);
});

ingredientsRefs.append(...itemsArr);
