import { useState } from 'react';
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from 'react-icons/md';

const TodoListItem2 = ({ todo, onDeleteTodo, onChangeTodo }) => {
  const [isCompleted, setIsCompleted] = useState(todo.completed);
  const { id, title, completed } = todo;
  const checkClicked = () => {
    setIsCompleted(!isCompleted);
    onChangeTodo({
      ...todo,
      completed: !isCompleted,
    });
  };
  return (
    <div className="flex items-center p-4 even:bg-gray-200">
      <div className="flex grow items-center">
        {isCompleted ? (
          <MdCheckBox onClick={checkClicked} />
        ) : (
          <MdCheckBoxOutlineBlank onClick={checkClicked} />
        )}

        <div
          className={`ml-2 flex-1 ${completed ? 'text-gray-400 line-through' : ''}`}
        >
          {title}
        </div>
      </div>
      <div className="flex cursor-pointer items-center text-2xl text-red-300 hover:text-red-600">
        <MdRemoveCircleOutline onClick={() => onDeleteTodo(id)} />
      </div>
    </div>
  );
};

export default TodoListItem2;
