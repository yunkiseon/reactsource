import { useState } from 'react';
import '../../App.css';

function Counter() {
  // useState: 컴포넌트가 기억해야할 값을 만들고 관리하는 함수
  // 초기값이 0인 상태를 하나 만들고 , 그 상태값을 저장하는 변수로 count
  // 값 변경하려면 setCount를 쓸 것이다.
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  let num = 0;
  const increment = () => {
    num += 1;
    console.log(num);
  };

  return (
    <>
      <div>
        <h1 className="text-3xl">{count}</h1>
        <button className="bg-orange-500 p-4" onClick={increase}>
          +1
        </button>
        <button className="bg-red-500 p-4" onClick={decrease}>
          -1
        </button>
        {/* num의 화면 변화x / 이벤트는 일어남 */}
        <h2>{num}</h2>
        <button className="bg-red-500 p-4" onClick={increment}>
          숫자변경
        </button>
      </div>
    </>
  );
}

export default Counter;
