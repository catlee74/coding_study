let number = 3;
let myNumber = 5;

console.log(myNumber);

//함수 선언식

//함수 호출문
sayHello();
sayHello();

//함수 정의
function sayHello() {
  let hello = '문자열 헬로우';
  console.log(hello);
}
//함수는 기능을 재사용하기 편하게 만들어준다

//함수 표현식
const sayBye = function () {
  console.log('good bye~');
};

sayBye();

//둘의 차이점은 함수선언식은 함수를 만든 구문이 함수호출문보다 밑에 있어도 괜찮다는 것
