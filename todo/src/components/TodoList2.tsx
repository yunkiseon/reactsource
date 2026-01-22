import TodoListItem from './TodoListItem';
import TodoListItem2 from './TodoListItem2';

const TodoList2 = ({ todos, onDeleteTodo, onChangeTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoListItem2
          todo={todo}
          key={todo.id}
          onDeleteTodo={onDeleteTodo}
          onChangeTodo={onChangeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList2;
