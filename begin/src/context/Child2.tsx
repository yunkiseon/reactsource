import { useContext } from 'react';
import { CountContext } from './CountContext';

function Child2() {
  const context = useContext(CountContext);
  // prop 등을 이용해서 안내려주어도 자식들에게 잘 내려가짐을 확인가능
  if (!context) {
    throw new Error('CountProvider null');
  }

  const { count, setCount } = context;
  return (
    <>
      <h2>Child2</h2>
      <p>Count - {count}</p>
      <button className="bg-gray-300 p-3" onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  );
}

export default Child2;
