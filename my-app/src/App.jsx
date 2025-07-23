import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

// let initialDomain = 'naver.com'

function App() {
  const [id, setId] = useState('');
  const [domain, setDomain] = useState('naver.com');

  // setDomain('gmail.com');
  const domains = ['naver.com', 'gmail.com', 'hanmail.com'];
  // initialDomain = 'gmail.com'
  //도메인은 초기값을 기억하는 성질을 가지고 있어서 위와같이 중간에 값을 바꿔도 적용이 되지 않는다.
  //업데이트 하려면 setDomain함수를 사용해야 함

  const onChangeEmail = (e) => {
    console.log(id);
    setId(e.target.value);
  };

  const onChangeDomain = (e) => {
    setDomain(e.target.value);
  };

  return (
    <>
      <div>
        <div>
          <input type="text" value={id} onChange={onChangeEmail} />
          {domain == '' ? null : <span>@</span>}
          <select value={domain} onChange={onChangeDomain}>
            {domains.map((d) => {
              return (
                <option key={d} value={d}>
                  {d}
                </option>
              );
            })}
            {/* <option value="naver.com">naver.com</option>
          <option value="gmail.com">gmail.com</option>
          <option value="hanmail.com">hanmail.com</option> */}
            <option value="">직접입력</option>
          </select>
        </div>
        <input type="password" />
        <button>login</button>
      </div>
      <div>회원가입</div>
    </>
  );
}

export default App;
