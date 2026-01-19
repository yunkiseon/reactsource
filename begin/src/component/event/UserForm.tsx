import { useState } from 'react';

function UserForm() {
  const initUser = {
    username: '',
    isSubscribed: false,
    role: 'user',
  };
  const roles = ['user', 'admin', 'guest'];
  // 관리할 거리 name, role, suibscribe 개별 or 통합
  const [formData, setFormData] = useState(initUser);
  const { username, isSubscribed, role } = formData;
  // name, role, subscribe 변화 감지 함수
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    // e.target의 content 모두 가져와서 분해정의 가능
    const target = e.target;
    const { name } = target;

    const nextForm = {
      ...formData,
      //   [e.target.name]: e.target.value, 원래는 이렇게 해야하지만 분해했기에
      [name]:
        target instanceof HTMLInputElement && target.type === 'checkbox'
          ? target.checked
          : target.value,
    };
    setFormData(nextForm);
  };

  return (
    <>
      <div className="mt-10 flex justify-center">
        <div className="w-full max-w-2xl space-y-6 rounded-lg bg-white p-6 shadow-md">
          <h2 className="text-center text-2xl font-semibold">User</h2>
          <form action="">
            <div>
              Name: {username} {isSubscribed && '(Subscribe)'}
            </div>
            <div>Role: {role}</div>
            <div>
              <input
                type="text"
                name="username"
                id=""
                className="flex-1 rounded border px-3 py-2"
                placeholder="Name"
                onChange={handleChange}
                value={username}
              />
            </div>
            <div>
              <input
                type="checkbox"
                name="isSubscribed"
                id=""
                onChange={handleChange}
                checked={isSubscribed}
              />
              <label htmlFor="">Subscribe</label>
            </div>
            <div>
              <select name="role" id="" onChange={handleChange} value={role}>
                {roles.map((role, idx) => (
                  <option value={role} key={idx}>
                    {role}
                  </option>
                ))}
              </select>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UserForm;
