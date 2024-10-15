// 1. store details: assigning names to the const variables:
const storeName = "D'Lobio Store";
const storeLocation = "San pedro, Laguna";
const storeCapacity = 230;


// 2. Dynamic Product Inventory: creating the variables for the products
let products = [
    { name: "Laptop", price: 18999, quantity: 50 },
    { name: "Smartphone", price: 9999, quantity: 100 },
    { name: "Tablet", price: 12999, quantity: 80 }
];


// 3. providing the calculations for the total inventory value
let totalInventoryValue = 0;
let totalNumberOfProducts = 0;

for (let product of products) {
    totalInventoryValue += product.price * product.quantity;
    totalNumberOfProducts += product.quantity;
}

/* 4. for adding the product information 
      this section of the code updates the qunatity of laptop 
      so that it adds 10 new units to its existing stock*/

for (let product of products) {
    if (product.name === "Laptop") {
        product.quantity += 10;
        break;
    }
}


// 5. locating the most expensive product
let mostExpensiveProduct = products[0];
for (let product of products) {
    if (product.price > mostExpensiveProduct.price) {
        mostExpensiveProduct = product;
    }
}

/* 6. adding a new product with its price and quantity to the inventory
      in this section of the code i have added a new product called smartwatch
      with its price and quantity*/
let newProduct = { name: "Smartwatch", price: 6969, quantity: 69 };
products.push(newProduct); // add the new product to the array


// 7. recalculating the total inventory value with a new product
totalInventoryValue = 0;
totalNumberOfProducts = 0;

for (let product of products) {
    totalInventoryValue += product.price * product.quantity;
    totalNumberOfProducts += product.quantity;
}

console.log("Store Name:", storeName);
console.log("Store Location:", storeLocation);
console.log("Total Number of Products:", totalNumberOfProducts);
console.log("Total Inventory Value:", totalInventoryValue);
console.log("Updated Laptop Quantity:", products.find(p => p.name === "Laptop").quantity);
console.log("Most Expensive Product:", mostExpensiveProduct.name);