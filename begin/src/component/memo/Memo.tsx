import { useMemo, useState } from 'react';

const heavyCalc = (num) => {
  console.log('Calculating...');
  let result = 0;
  for (let index = 0; index < 10000000000; index++) {
    result += num;
  }
  return result;
};
// 화면이 렌더링 되는 조건은 count 임. 그런데 return 에 heavbycal을 호출함
// num은 시간이 걸리는 함수임 수가 커서. 그래서 화면이 켜지는데 오래걸림
function Memo() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  // 배열 안의 count2 값이 변화될 때만 이 함수를 실행해라. 라는 의미.
  const calculatedValue = useMemo(() => heavyCalc(count2), [count2]);

  return (
    <>
      <div>
        <h3 className="text-xl">Conter1 {count1}</h3>
        <button
          className="border bg-amber-600 p-3"
          onClick={() => setCount1(count1 + 1)}
        >
          +
        </button>
        <button
          className="border bg-amber-600 p-3"
          onClick={() => setCount1(count1 - 1)}
        >
          -
        </button>
      </div>
      <div>
        <h3 className="text-xl">Conter2 {calculatedValue}</h3>
        <button
          className="border bg-gray-600 p-3"
          onClick={() => setCount2(count2 + 1)}
        >
          +
        </button>
        <button
          className="border bg-gray-600 p-3"
          onClick={() => setCount2(count2 + 1)}
        >
          -
        </button>
      </div>
    </>
  );
}

export default Memo;
