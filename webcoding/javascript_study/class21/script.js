// const myName = 'name';
// console.log(myName);
// localStorage.setItem('myName', myName);

//위 코드를 삭제하든, 창을 새로고침하든지 이 데이터는
//웹브라우저에 영구적으로 기록된다.
//문자열만 저장할 수 있다.
const myName = localStorage.getItem('myName');
alert(myName);

localStorage.setItem('cat', '고양이');
localStorage.setItem('dog', '강아지');

localStorage.removeItem('dog');

localStorage.clear();
