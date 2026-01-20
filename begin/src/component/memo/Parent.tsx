import { useCallback, useState } from 'react';
import Child from './Child';

const style = {
  height: '300px',
  backgroundColor: 'lightGray',
};

function Parent() {
  const [count1, setCount1] = useState(0);
  const [active, setActive] = useState(false);

  console.log('parent renderd');

  // 두번째 배열에 포함된 값이 바뀌지 않는 한 props 로 전달되는 함수를 재생생하지 말기
  const handleClick = useCallback(() => {
    setCount1(count1 + 1);
  }, []);
  return (
    <>
      <div>
        <h3 className="text-xl">Parent {count1}</h3>
        <button className="border bg-amber-600 p-3" onClick={handleClick}>
          +
        </button>
        <button
          className="border bg-amber-600 p-3"
          onClick={() => setActive(!active)}
        >
          Active 변경
        </button>
        <Child active={active} onClick={handleClick} />
      </div>
    </>
  );
}

export default Parent;
// useState : 부모 렌더링 시 자식 렌더링 같이 발생 -> count1 처럼 state가 변경되면
// 자식 렌더링도 같이 변경됨. 하지만 자식 state 변경 시에는 자식 렌더링만 일어남
// 하지만 현재 새로고침도 같이 일어나서 부모도 렌더링됨.
