import { useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TodoTeamplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { initialTodos, type Todo, type TodoCreate } from './types/todo';

function App() {
  const [todos, setTodos] = useState<TodoCreate[]>(initialTodos);
  const nextId = useRef(4);

  // 일정 추가
  const handleAddToDo = (title: string) => {
    // 기존 todos 에 추가
    setTodos([
      ...todos,
      { id: nextId.current, title: title, completed: false, important: false },
    ]);
    nextId.current += 1;
  };

  // 일정 완료
  const handleChangeTodo = (todo: TodoCreate) => {
    // 전체 todos 에서 인자로 넘어온 todo 와 같은 id 찾아서 completed 업데이트
    setTodos(todos.map((t) => (t.id === todo.id ? { ...t, ...todo } : t)));
  };

  // 일정 삭제
  const handleDeleteTodo = (id: number) => {
    // 전체  todos 에서 id 와 일치하지 않는 todos 추출후 setTodos()
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <TodoTeamplate>
        <TodoInsert onAddTodo={handleAddToDo} />
        <TodoList
          todos={todos}
          onDeleteTodo={handleDeleteTodo}
          onChangeTodo={handleChangeTodo}
        />
      </TodoTeamplate>
    </>
  );
}

export default App;
