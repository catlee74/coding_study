const inuptType = document.querySelector('#typing');
const inputClick = document.querySelector('#push');

// const handleTyping = function () {
//   console.log('타이핑 되고 있음');
// };

// const handleClick = function () {
//   console.log('클릭되고 있음');
// };

// inuptType.onkeydown = handleTyping;
// //onkeydown은 키보드가 눌렸을 때

// inputClick.onclick = handleClick;
// //onclick 클릭되었을 때

inuptType.onkeydown = function () {
  console.log('타이핑 되고 있음');
};
//onkeydown은 키보드가 눌렸을 때

inputClick.onclick = function () {
  console.log('클릭되고 있음');
};
//onclick 클릭되었을 때
