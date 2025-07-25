import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

function App() {
  // let post = '강남 우동 맛집';
  let logo = 'ReactBlog';

  let [글제목, 글제목변경] = useState(['카페 추천', '향수 추천', '옷 추천']);
  let [좋아요, 좋아요변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>

      <button
        onClick={() => {
          let copy1 = [...글제목];
          copy1.sort();
          글제목변경(copy1);
        }}
      >
        가나다순정렬
      </button>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = '여자코트 추천';
          글제목변경(copy);
        }}
      >
        글수정
      </button>

      <div className="list">
        <h4>
          <span>{글제목[0]}</span>

          <span
            onClick={() => {
              좋아요변경(좋아요 + 1);
            }}
          >
            👍
          </span>
          {/* 이렇게 함수를 축약할 수도 있다. ()=>{}는 함수만드는 문법이다. */}

          {좋아요}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      {/* <h4>{post}</h4> */}
      <Modal></Modal>
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}
export default App;
