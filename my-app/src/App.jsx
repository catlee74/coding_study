import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

function App() {
  let post = '강남 우동 맛집';
  let logo = 'ReactBlog';

  let [글제목1, a] = useState('카페 추천');
  let [글제목2, b] = useState('향수 추천');
  let [글제목3, c] = useState('옷 추천');

  // let [logo, setLogo] = useState('ReactBlog');
  //블로그 로고 같은 것은 그냥 변수로 만들어서 하는 것이 더 좋음
  //왜냐하면 자주 안바뀌니까. 그러니까 위에 logo처럼 하지말고
  //let post처럼 변수로 let logo뭐 이렇게 만들자ㅣ
  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <div className="list">
        <h4>{글제목1}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목2}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목3}</h4>
        <p>2월 17일 발행</p>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
