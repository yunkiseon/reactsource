import { useState } from 'react';
import { useAuth } from './useAuth';
import type { LoginState } from './AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  // 로그인 클릭 시 Context value 변경
  const { login, isLoggedIn } = useAuth();

  const navigate = useNavigate();

  // 상태관리를 위한 useState
  const [form, setForm] = useState<LoginState>({
    id: '',
    password: '',
  });

  // 그 form 안에 있는 id, passowrd 분해
  const { id, password } = form;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(id, password);
    // 다른 페이지로 이동
    navigate(`/account/profile/${id}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  if (isLoggedIn) {
    return <p>이미 로그인 되었습니다.</p>;
  }

  return (
    <>
      <h1 className="text-3xl">Login</h1>
      <form action="" method="post" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">아이디</label>
          <input
            type="text"
            name="id"
            className="flex-1 rounded border px-3 py-2"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">비밀번호</label>
          <input
            type="password"
            name="password"
            className="flex-1 rounded border px-3 py-2"
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="rounded bg-orange-500">
          로그인
        </button>
      </form>
    </>
  );
}

export default Login;
