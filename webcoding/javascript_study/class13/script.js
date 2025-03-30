// //함수 호출 시, sayVegetable 함수에는 데이터 하나를 전달할 수 있다.
// //전달된 데이터를 vegetable이라 부르고, 이것을 사용해 구문을 수행하도록 하겠다!

// function sayVegetable(vegetable) {
//   console.log('함수에 전달된 채소는?');
//   console.log(vegetable);
// }

// sayVegetable('당근'); //vegetable은 당근
// sayVegetable('오이'); //vegetable은 오이

// function sayFood(food1, food2) {
//   console.log(food1);
//   console.log(food2);
//   console.log('먹고싶다!');
// }

// sayFood('치킨', '돈까스');
// sayFood('피자', '햄버거');

// function whatIsBigger(n1, n2) {
//   if (n1 > n2) {
//     return n1;
//   } else {
//     return n2;
//   }
// }
// console.log(whatIsBigger(3, 5));
// console.log(whatIsBigger(10, 6));

function sayAnything(ant, number) {
  for (let i = 0; i < number; i++) {
    console.log(ant, number);
  }
}
sayAnything('야~옹', 6);
sayAnything('멍멍', 2);

function oddEven(number) {
  if (number % 2 == 1) {
    return '홀수';
  } else {
    return '짝수';
  }
}
console.log(oddEven(10));
console.log(oddEven(7));
