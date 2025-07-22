import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [domain, setDomain] = useState('naver.com');

  const domains = ['naver.com', 'gmail.com', 'hanmail.com'];
  return (
    <>
      <div>
        <div>
          <input type="text" />
          {domain == '' ? null : <span>@</span>}
          <select>
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
