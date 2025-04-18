// // 버튼을 누르면 input에 쓰여진 내용을 value속성으로 읽어냄
// const textInput = document.getElementById('text');
// const button = document.getElementById('button');

// button.addEventListener('click', function () {
//   // console.log(textInput.value);
//   //value란 사용자 입력값
//   textInput.value = '야옹';
// });

const form = document.querySelector('form');
//쿼리셀렉터로 폼을 선택하고
//submit이벤트가 발생했을 때 fuction에 들어간 이 코드를 실행시킨다
form.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log(form.name.value);
  //이름이 name인 함수의 value를 읽어들이겠다
  console.log(form.town.value);
});
