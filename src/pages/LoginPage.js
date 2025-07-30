import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const isNumeric = /^\d+$/.test(username);
    if (isNumeric && username.length >= 3 && password === username.slice(-3)) {
      onLogin();
    } else {
      alert('账号或密码错误。账号应为一串数字，密码为账号的后三位。');
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(to right, #a8e063, #56ab2f)'
    }}>
      <div style={{
        padding: '40px',
        borderRadius: '10px',
        background: 'white',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ textAlign: 'center', color: '#333' }}>重邮AI问答系统</h1>
        <div style={{ marginTop: '20px' }}>
          <label htmlFor="username">账号</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginTop: '20px' }}>
          <label htmlFor="password">密码</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        <button
          onClick={handleLogin}
          style={{
            width: '100%',
            padding: '10px',
            marginTop: '30px',
            borderRadius: '5px',
            border: 'none',
            background: '#56ab2f',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          登录
        </button>
      </div>
    </div>
  );
};

export default LoginPage; 