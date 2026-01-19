import { useRef, useState } from 'react';
import '../../App.css';

function CounterRef() {
  // useState: 컴포넌트가 기억해야할 값을 만들고 관리하는 함수
  // 초기값이 0인 상태를 하나 만들고 , 그 상태값을 저장하는 변수로 count
  // 값 변경하려면 setCount를 쓸 것이다.
  const [count, setCount] = useState(0);
  // const increase = () => setCount(count + 1);
  // const decrease = () => setCount(count - 1);
  // 기존 방식은 값 유지가 안됨

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
        {/* num의 화면 변화x / 이벤트는 일어남-> state 일으키면 그 때 반영됨 */}
        <h2>{num.current}</h2>
        <button className="bg-red-500 p-4" onClick={increment}>
          useRef
        </button>
      </div>
    </>
  );
}

export default CounterRef;
