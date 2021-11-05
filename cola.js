let products = [
  { name: "Grapefruit", calories: 170, color: "red", sold: 8200 },
  { name: "Orange", calories: 160, color: "orange", sold: 12101 },
  { name: "Cola", calories: 210, color: "caramel", sold: 25412 },
  { name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
  { name: "Lemon", calories: 200, color: "clear", sold: 14983 },
  { name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
  { name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
  { name: "Water", calories: 0, color: "clear", sold: 62123 },
];
function printProducts(products) {
  for (let i = 0; i < products.length; i++) {
    document.write(
      "Name: " +
        products[i].name +
        ", Calories: " +
        products[i].calories +
        ", Color: " +
        products[i].color +
        ", Sold: " +
        products[i].sold +
        "</br>"
    );
  }
}
function compareCalories(colaA, colaB) {
  return colaA.calories > colaB.calories
    ? 1
    : colaA.calories == colaB.calories
    ? 0
    : -1;
}
function compareName(colaA, colaB) {
  return colaA.name > colaB.name ? 1 : colaA.name == colaB.name ? 0 : -1;
}

function compareColor(colaA, colaB) {
  return colaA.color > colaB.color ? 1 : colaA.color == colaB.color ? 0 : -1;
}

function reverceCompareCalories(colaA, colaB) {
  return colaA.calories > colaB.calories
    ? -1
    : colaA.calories == colaB.calories
    ? 0
    : 1;
}
function reverseCompareName(colaA, colaB) {
  return colaA.name > colaB.name ? -1 : colaA.name == colaB.name ? 0 : 1;
}

function reverseCompareColor(colaA, colaB) {
  return colaA.color > colaB.color ? -1 : colaA.color == colaB.color ? 0 : 1;
}

printProducts(products);
let order = prompt("reverse or normal?");
if (order == "normal") {
  document.write("<br><strong><em>compareName</em></strong><br>");
  products.sort(compareName);
  printProducts(products);

  document.write("<br><strong><em>compareCalories</em></strong><br>");
  products.sort(compareCalories);
  printProducts(products);

  document.write("<br><strong><em>compareColor</em></strong><br>");
  products.sort(compareColor);
  printProducts(products);
} else if (order == "reverse") {
  document.write("<br><strong><em>reverseCompareName</em></strong><br>");
  products.sort(reverseCompareName);
  printProducts(products);

  document.write("<br><strong><em>reverseCompareCalories</em></strong><br>");
  products.sort(reverceCompareCalories);
  printProducts(products);

  document.write("<br><strong><em>reverseCompareColor</em></strong><br>");
  products.sort(reverseCompareColor);
  printProducts(products);
} else alert("Error");
