import { useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TodoTeamplate from './components/TodoTemplate2';
import TodoList from './components/TodoList2';
import { initialTodos, type Todo, type TodoCreate } from './types/todo';
import TodoTeamplate2 from './components/TodoTemplate2';
import TodoList2 from './components/TodoList2';
import TodoInsert2 from './components/TodoInsert2';

function App2() {
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
      <TodoTeamplate2>
        <div className="flex p-3">
          <span className="flex-1 text-left text-orange-700">
            중요일정은 체크 클릭
          </span>
          <div className="shrink-0">
            <span>완료</span>
            <select
              name="completed"
              className="mx-2 rounded border border-gray-400"
            >
              {[
                { label: '전체', value: '' },
                { label: '완료', value: 'true' },
                { label: '미완료', value: 'false' },
              ].map((option, idx) => (
                <option value={option.value} key={idx}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <TodoInsert2 onAddTodo={handleAddToDo} />
        <TodoList2
          todos={todos}
          onDeleteTodo={handleDeleteTodo}
          onChangeTodo={handleChangeTodo}
        />
      </TodoTeamplate2>
    </>
  );
}

export default App2;
