/*
Є 2 об'екта -  users, products 
В файлі home4.html есть 2 елемента select (id="users-select", id="products-select") 
Завдання - написати загальну бізнес логіку, яка в вищевказані елементи select
буде виводити згрупповані options 

В елемент  select  id="users-select" - згрупповані department користівачів
В елемент  select id="products-select" - згрупповані title продуктів

 Тобто треба зробити обробку з наступні кроків
- з масиву об'єктів отримати  масив свойств, 
  наприклад масив який містить всі віки користувачів   
- з масиву  віків користувачів отримати масив їх унікальних значень 
- сортирування отриманого масиву
- створення масиву з елементами options
- вивід результатів в select

Завдання реалізувати з використанням pipe 

Клієнтський код має мати можливість перевизначати 
свойства объектів users, які требі групувати 
         name, age или depratment 
та виводити в елемент select
!!! При эцьому бізнес-логіка не має мінятися   
*/

/*  =============== Data =============  */

let users = [
  { id: 1, name: "John", age: "20", department: "HR" },
  { id: 2, name: "Sasha", age: "30", department: "Marketing" },
  { id: 3, name: "Bill", age: "40", department: "Finance" },
  { id: 4, name: "Ashley", age: "20", department: "IT" },
  { id: 5, name: "Rachel", age: "40", department: "IT" },
  { id: 6, name: "Tom", age: "30", department: "HR" },
  { id: 7, name: "Steve", age: "30", department: "Marketing" },
  { id: 8, name: "Jim", age: "40", department: "IT" },
  { id: 9, name: "Willy", age: "20", department: "Finance" },
];

const products = [
  { id: 1, title: "Panasonic", price: 50 },
  { id: 2, title: "Samsung", price: 34 },
  { id: 3, title: "Grundic", price: 40 },
  { id: 4, title: "Electrolux", price: 34 },
  { id: 4, title: "Samsung", price: 50 },
  { id: 4, title: "Panasonic", price: 40 },
];

// prettier-ignore
const curry = (fn) => (...args) => fn.bind(null, ...args)

// prettier-ignore
const pipe =  (...fns) =>  (x) =>  fns.reduce((v, f) => f(v), x);

/*  Business logics */
const getProp = () => {};
const groupedItems = () => {};
const sortBy = () => {};
const getOpts = () => {};

/* =========== client code ===============  */
const usersSelect = document.getElementById("users-select");

//  Usage:
// getProps може приймати одне з свойст - department, age, name, price, title
/*
const userFn = pipe(getProp("department"), groupedItems, sortBy, getOpts);
const productFn = pipe(getProp("price"), groupedItems, sortBy, getOpts);

const usersOpts = userFn(users);
const productsOpts = productFn(products);

usersSelect.innerHTML = usersOpts.join("");
productsSelect.innerHTML = productsOpts.join("");
 */
