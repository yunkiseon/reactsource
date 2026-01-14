import { useState } from 'react';
import '../../App.css';

function InputMultiSample() {
  const [name, setName] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNickname(e.target.value);
  return (
    <>
      <input
        type="text"
        name=""
        id=""
        onChange={handleNameChange}
        value={name}
        placeholder="이름"
        className="border-2 p-1.5"
      />
      <input
        type="text"
        name=""
        id=""
        onChange={handleNicknameChange}
        value={nickname}
        placeholder="닉네임"
        className="border-2 p-1.5"
      />
      <button
        className="bg-red-500 p-2"
        onClick={() => {
          setName('');
          setNickname('');
        }}
      >
        초기화
      </button>
      <div>
        <b>
          입력값 : {name} : {nickname}
        </b>
      </div>
    </>
  );
}

export default InputMultiSample;
