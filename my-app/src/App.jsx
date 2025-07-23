import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

// let initialDomain = 'naver.com'

function veryHeavyComputation() {
  let sum = 0;
  for (let i = 0; i < 1000000; i++) {
    sum += i;
  }
  return sum;
}

function App() {
  const [id, setId] = useState(veryHeavyComputation);
  const [domain, setDomain] = useState('naver.com');
  const [password, setPassword] = useState('');
  // const [fullEmail, setFullEmail] = useState('');

  // setDomain('gmail.com');
  const domains = ['naver.com', 'gmail.com', 'hanmail.com'];
  // initialDomain = 'gmail.com'
  //도메인은 초기값을 기억하는 성질을 가지고 있어서 위와같이 중간에 값을 바꿔도 적용이 되지 않는다.
  //업데이트 하려면 setDomain함수를 사용해야 함

  console.log('App', id);

  const onChangeEmail = (e) => {
    setId(e.target.value);
    // setFullEmail(`${e.target.value}@${domain}`);
  };

  const onChangeDomain = (e) => {
    setDomain(e.target.value);
    // setFullEmail(`${id}@${e.target.value}`);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const fullDomain = `${id}@${domain}`;

  const onLogin = () => {
    console.log(fullDomain, password);
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
        <input type="password" value={password} onChange={onChangePassword} />
        {/* <div>{fullDomain}</div> */}
        <button onClick={onLogin}>login</button>
      </div>
      <div>회원가입</div>
    </>
  );
}

export default App;
