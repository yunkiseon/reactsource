import Child4 from './Child4';
import { useToggle } from './useToggle';

function Child3() {
  const { isOn } = useToggle();

  return (
    <>
      <h2>Child3</h2>
      <p>Toggle {isOn ? 'On' : 'Off'}</p>
      <Child4 />
    </>
  );
}

export default Child3;
