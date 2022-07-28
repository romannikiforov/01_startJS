/* 
Зараз змінна firstName виводиться в наступному порядку 
        Fill 
        Tom
        Bill

ЗАВДАННЯ:
Не змінюючи областів видимості змінних дописати код так,
щоб послідовність виводу була наступною

        Bill
        Fill
        Tom 

!!! Змінні мають лишатися в тих областях видимості,
    в яких вони є виначально
!!! Значення змінних міняти НЕ МОЖНА
*/
let firlstName = "Bill";
{
  let firlstName = "Tom";

  {
    let firlstName = "Fill";
    console.log(firlstName);
  }
  console.log(firlstName);
}
console.log(firlstName);
