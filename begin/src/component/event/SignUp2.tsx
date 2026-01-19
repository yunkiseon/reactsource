import { useState } from 'react';

function Signup2() {
  // const [message, setMessage] = useState('');
  // const [username, setUsername] = useState('');
  // 한번에 처리
  const [form, setForm] = useState({
    message: '',
    username: '',
  });

  // 분해
  const { message, username } = form;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  return (
    <>
      <form action="" method="post">
        <input
          type="text"
          name="message"
          className="border p-2"
          onChange={onChange}
        />
        <input
          type="text"
          name="username"
          className="border p-2"
          onChange={onChange}
        />
      </form>
      <h3 className="text-2xl">
        {username}:{message}
      </h3>
    </>
  );
}

export default Signup2;
