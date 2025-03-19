// let number = 1;

// while (number <= 10) {
//   console.log(number);
//   number += 1;
// }

// window.confirm('경고창 메시지');
// alert와 유사하지만 이건 확인과 취소 버튼 둘 다 있다

while (confirm('메시지')) {
  console.log('확인 버튼');
}
console.log('취소 버튼');
//확인과 취소 버튼이 있다는 것은 true를 반환할 것인지 false를 반환할 것인지 알 수 있다는 이야기
