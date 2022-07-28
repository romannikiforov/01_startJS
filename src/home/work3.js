function doMath(a, b, c) {
  console.log(`${this.firstName} adds ${a + b + c}`);
}

const ob = {
  firstName: "Bill",
};

/*
Реалізувати функцію bind яка буде повертати наступний  результат
Створити 2 реалізациї - з вирористанням  ES 5, и >ES 6 
*/

function bind(ob, fn) {
  // todo
}

bind(ob, doMath, 1, 2, 3)(); // Bill adds 6
bind(ob, doMath)(1, 2, 3); // Bill adds 6
bind(ob, doMath, 1)(2, 3); // Bill adds 6
bind(ob, doMath, 1, 2)(3); // Bill adds 6
bind(ob, doMath, 1, 2, 3)(4, 5, 6); // Bill adds 6
