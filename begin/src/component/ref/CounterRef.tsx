import { useRef, useState } from 'react';
import '../../App.css';

function CounterRef() {
  // useState() : 컴포넌트가 기억해야 할 값을 만들고 관리하는 함수
  // 초기값이 0 인 상태를 하나 만들고, 그 상태값을 저장하는 변수로 count
  // 값을 변경하는 함수는 setCount 로 할거야
  const [count, setCount] = useState(0);

  //   const increase = () => setCount(count + 1);
  //   const decrease = () => setCount(count - 1);

  let num = useRef(0);
  const increment = () => {
    num.current += 1;
    console.log(num.current);
  };

  return (
    <>
      <div>
        <h1 className="text-3xl">{count}</h1>
        <button
          className="bg-orange-500 p-4"
          onClick={() => setCount(count + 1)}
        >
          useState
        </button>
        <h2>{num.current}</h2>
        <button className="bg-orange-500 p-4" onClick={increment}>
          useRef
        </button>
      </div>
    </>
  );
}

export default CounterRef;
