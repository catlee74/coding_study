const btn1 = document.getElementById('one');
const btn2 = document.getElementById('two');
const btn3 = document.getElementById('three');

const handleClick = function (event) {
  console.log(event.target); //이벤트가 발생한 타겟만 볼 수 있음
};

//버튼 2번을 눌렀을 때만 콘솔이 출력이 됨
btn1.addEventListener('click', handleClick);
btn2.addEventListener('click', handleClick);
btn3.addEventListener('click', handleClick);
// btn2.addEventListener('click', function () {
//   console.log('또 다른 핸들러가 추가 등록');
// });

//등록된 핸들러 제거
// btn2.removeEventListener('click', handleClick);
