import { useState } from 'react';

const Say = () => {
  // useState : 첫번째 인자 -> default 값, 두번째 인자 -> 함수
  const [message, setMessage] = useState<string>();
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');
  const [color, setColor] = useState('black');
  const onClickRed = () => setColor('red');
  const onClickGreen = () => setColor('green');
  const onClickBlue = () => setColor('blue');
  return (
    <>
      <div className="m-3">
        <div className="mt-8">
          <button
            className="m-2 w-32 rounded bg-blue-500 p-4 text-xl text-white"
            onClick={onClickEnter}
          >
            입장
          </button>
          <button
            className="m-2 w-32 rounded bg-orange-500 p-4 text-xl text-white"
            onClick={onClickLeave}
          >
            퇴장
          </button>
        </div>
        <h1 className="p-2 text-3xl" style={{ color }}>
          {message}
        </h1>
        <div>
          <button
            className="m-2 w-32 rounded bg-gray-200 p-4 text-xl text-red-600"
            onClick={onClickRed}
          >
            빨강
          </button>
          <button
            className="m-2 w-32 rounded bg-gray-200 p-4 text-xl text-green-600"
            onClick={onClickGreen}
          >
            초록
          </button>
          <button
            className="m-2 w-32 rounded bg-gray-200 p-4 text-xl text-blue-600"
            onClick={onClickBlue}
          >
            파랑
          </button>
        </div>
      </div>
    </>
  );
};

export default Say;
