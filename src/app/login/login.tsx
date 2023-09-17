"use client";

// import { useRouter } from 'next/router';
import React, { useState } from 'react'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberPassword, setRememberPassword] = useState(false);
  // const router = useRouter();

  const handleSubmit = () => {
    // e.preventDefault();
    // Xử lý đăng nhập ở đây, ví dụ kiểm tra tên người dùng và mật khẩu
    // Nếu đăng nhập thành công, bạn có thể định tuyến đến trang chính
    // router.push('/');
  };

  return (
    <div className="l-container--2">
      <div className='form'>
        <h1>Đăng nhập</h1>
        <p className='txt-small'>Vui lòng điền tên người dùng và mật khẩu của bạn.</p>
        <hr />

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username"><b>Tên người dùng</b></label>
            <input
              type="text"
              placeholder="Nhập tên người dùng"
              name="username"
              id="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password"><b>Mật khẩu</b></label>
            <input
              type="password"
              placeholder="Nhập mật khẩu"
              name="password"
              id="password"
              required
              value={password}
              checked={rememberPassword}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="loginbtn">Đăng nhập</button>

          <label>
            <input type="checkbox" defaultChecked={true} name="remember" /> Nhớ mật khẩu
          </label>

          <div className="signin">
            <p>Bạn chưa có tài khoản? <a href="/register">Đăng ký</a>.</p>
            <p>Quên mật khẩu? <a href="#">Lấy lại</a>.</p>
          </div>
        </form>
      </div>
      </div>
  );
}

export default (Login);