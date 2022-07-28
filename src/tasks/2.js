// Зараз в консоль виводиться
//  ReferenceError: firstName is not define
// Змінити код так, щоб в консоль виводилась змінна firstName
// без помилок
// !!! Код функціи змінбвати не можна

function print() {
  function log() {
    firstName = "Beetroot";
  }
  log();
}

console.log(firstName);
print();
