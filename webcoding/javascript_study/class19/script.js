const button = document.querySelector('button');

// setTimeout(function () {
//   console.log('2초 뒤에 출력된다');
// }, 2000);

// setInterval은 출력과 동시에 자신의 아이디를 반환한다
let interID;
interID = setInterval(function () {
  console.log('2초마다 반복출력된다');
}, 2000);

console.log(interID);

button.addEventListener('click', function () {
  clearInterval(interID);
});
