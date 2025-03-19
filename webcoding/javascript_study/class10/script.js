// for (let i = 1; i <= 8; i += 1) {
//   console.log('반복 진행 중 입니다.');
//   console.log(i);
// }

//짝수일 때만 console.log 출력하기
for (let i = 1; i <= 8; i += 1) {
  if (i % 2 == 0) {
    //i를 2로 나눈 나머지가 0일 때(즉, 짝수일 때)
    console.log(i);
  }
}
