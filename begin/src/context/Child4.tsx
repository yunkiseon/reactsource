import { useToggle } from './useToggle';

function Child4() {
  // const context = useToggle();
  // const { toggle } = context;

  const { toggle } = useToggle();

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
