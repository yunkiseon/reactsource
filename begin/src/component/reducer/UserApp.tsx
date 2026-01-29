import { useState } from 'react';

type UserType = {
  name: string;
  year: number;
  warning: string;
};

const initialUser: UserType = {
  name: '',
  year: 0,
  warning: '',
};

function UserApp() {
  const [user, setUser] = useState(initialUser);

  const { name, year, warning } = user;

  const handleChange = (e) => {
    const { name, value } = e.target;

    // 이름(소문자로 변경 후 보여주기)
    if (name === 'name') {
      setUser({
        ...user,
        name: value.trim().toLowerCase(),
      });
    } else {
      // 나이(성인여부 판별 18세 이하면 경고 메세지)
      const age = new Date().getFullYear() - value;
      setUser({
        ...user,
        year: value,
        warning: value !== 0 && age < 18 ? '최소 나이는 18세여야 합니다.' : '',
      });
    }
  };

  const onReset = () => {
    setUser(initialUser);
  };

  return (
    <div className="mt-10 flex flex-col items-center px-3 py-2">
      <div className="flex w-full items-center gap-3">
        <div>
          <input
            type="text"
            name="name"
            className="flex-1 rounded border px-3 py-2"
            placeholder="Enter name"
            onChange={handleChange}
            value={name}
          />
        </div>
        <div>
          <input
            type="number"
            name="year"
            className="flex-1 rounded border px-3 py-2"
            placeholder="Enter birth year"
            onChange={handleChange}
            value={year}
          />
        </div>
        <button
          type="button"
          onClick={onReset}
          className="py-w rounded bg-orange-500 px-4 text-white"
        >
          reset
        </button>
        <div>
          <ul>
            <li>Name : {name}</li>
            <li>
              Year : {year}{' '}
              {warning && <span className="text-red-500">{warning}</span>}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserApp;
