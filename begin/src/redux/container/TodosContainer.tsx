import { connect } from 'react-redux';
import Todos from '../component/Todos';
import type { RootState } from '../modules';
import { changeInput, insert, remove, toggle } from '../modules/todos';
import type { TodoProps } from '../types/type';

// 컴포넌트와 저장소와 연동
const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}: TodoProps) => {
  return (
    <Todos
      input={input}
      todos={todos}
      changeInput={changeInput}
      insert={insert}
      toggle={toggle}
      remove={remove}
    />
  );
};

export default connect(
  ({ todos }: RootState) => ({
    input: todos.input,
    todos: todos.todos,
  }),
  { changeInput, insert, toggle, remove },
)(TodosContainer);
