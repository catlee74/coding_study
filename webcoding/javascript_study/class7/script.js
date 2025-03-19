// console.log(document.querySelector('h1'));
// console.log(document.querySelector('p'));
// console.log(document.querySelector('#text'));
// console.log(document.querySelector('.paragraph'));

// console.log(document.getElementById('text'));
// console.log(document.getElementById('p'));

const h1 = document.querySelector('h1');
const p = document.getElementById('text');
console.log(h1.textContent);
h1.textContent = 'text change';

p.textContent = '텍스트 변경';
console.log(p.textContent);
