import { SiTodoist } from 'react-icons/si';
import Counter from './Counter';

function MyTodo() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Counter />
        <hr />
        <SiTodoist />
      </div>
    </>
  );
}

export default MyTodo;
