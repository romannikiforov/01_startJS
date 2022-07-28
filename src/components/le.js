// глобальна область видимості

var a = "Bill";
console.log(a);
console.log("window.a = ", window.a);

// Питання - чи є наступния код валідним ?
/*
{{{ var b = 10; }}}
console.log(b)
*/

/* ES5, ES6 - функція визначає локальну область видимості  */
/*
function test(){
   let a = "A"
   var b = "B"
}
test();
console.log(a) // Uncaught ReferenceError
console.log(b) // Uncaught ReferenceError
*/

/* ================ hoisting ============= */
/*
fn();
console.log(a); 

function fn() {
  console.log("I am fn");
}

var a = 30;

console.log(a);
*/
