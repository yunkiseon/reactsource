import { useToggle } from './useToggle';

function Child4() {
  const context = useToggle();
  // child2를 분해하는 개념이라고 보면 됨
  // Props 와 다르게 내려주고 하는 행위가 없지만 3와 공유되고 있다.

  const { toggle } = context;
  return (
    <>
      <h2>Child4</h2>
      <button className="bg-gray-300 p-3" onClick={toggle}>
        Toggle
      </button>
    </>
  );
}

export default Child4;
