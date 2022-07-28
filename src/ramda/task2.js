const products = [
  { id: 1, name: "Jeans", price: 55, category: "clothes", stock: 100 },
  { id: 2, name: "Samsung", price: 33, category: "TV", stock: 50 },
  { id: 3, name: "Jacket", price: 66, category: "clothes", stock: 20 },
  { id: 4, name: "Panasonic", price: 77, category: "TV", stock: 20 },
  { id: 5, name: "iPhone", price: 99, category: "phones", stock: 150 },
  { id: 6, name: "Grundic", price: 111, category: "TV", stock: 5 },
  { id: 7, name: "Sneakers", price: 120, category: "clothes", stock: 30 },
];

/* ========================= Задание 1 =====================  */
/* отримати новий масив з свойствами name, price */
const res = products;

console.log(res);

/* ========================= Задание 2 =====================  */
/*  Показати фільтрацію продуктів з використанням 
    R.filter, R.pluck,  R.where({...}),  R.equals(st), R.lt(__, amont)  
     category ->  clothes, stock < 50, price  < 100
 */

/*  
     const predicate = R.T;
    // const getResults = // отримати з отфільтрованих об'єктів свойство name 
    
    console.log(getResults(products));
*/
