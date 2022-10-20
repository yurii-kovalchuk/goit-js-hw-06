// method 1

// const categoriesObj = document.querySelector("#categories");
// const numberOfCategories = categoriesObj.children.length;
// console.log("Number of categories:", numberOfCategories);

// for (let i = 0; i < numberOfCategories; i += 1) {
//   const categoryName = categoriesObj.children[i].firstElementChild.textContent;
//   const numberOfElements =
//     categoriesObj.children[i].lastElementChild.children.length;

//   console.log("Category:", categoryName);
//   console.log("Elements:", numberOfElements);
// }

//method 2

const categoryArr = document.querySelectorAll(".item");
console.log("Number of categories:", categoryArr.length);

for (let i = 0; i < categoryArr.length; i += 1) {
  const categoryName = categoryArr[i].firstElementChild.textContent;
  const numberOfElements = categoryArr[i].lastElementChild.children.length;
  console.log("Category:", categoryName);
  console.log("Elements:", numberOfElements);
}
