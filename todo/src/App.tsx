import React, { useCallback, useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TodoTeamplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import {
  initialTodos,
  type boolParam,
  type PageResult,
  type Todo,
  type TodoCreate,
  type TodoUpsert,
} from './types/todo';
import { createTodo, deleteTodo, fetchTodos, updateTodo } from './api/fetch';
import ReactPaginate from 'react-paginate';

// 서버 연동 방식
const initialPageState: PageResult<Todo> = {
  dtoList: [],
  pageNumList: [],
  pageRequestDTO: { page: 0, size: 10 },
  prev: false,
  next: false,
  prevPage: 0,
  nextPage: 0,
  totalPage: 0,
  current: 0,
  totalCount: 0,
};

function App() {
  const [todos, setTodos] = useState<PageResult<Todo>>(initialPageState);
  const [isCompleted, setIsCompleted] = useState<boolParam>('');
  // 강제 refresh 필요한 상황에 사용
  const [refreshkey, setRefreshkey] = useState(0);
  const forceReload = () => setRefreshkey((k) => k + 1);

  // 페이지 나누기 현재 페이지 저장용
  const [currentPage, setCurrentPage] = useState(1);
  const offset = currentPage * todos.pageRequestDTO.size;
  console.log(`Loading items from ${currentPage} to ${offset}`);

  // 100/ 10 = [1~10] pageNumList가 담고 있긴하지만 그대로 쓸 수 없다. 그래서 새로 선언
  const pageCount = Math.ceil(todos.totalCount / todos.pageRequestDTO.size);

  // 페이지 번호 클릭 시 호출
  const handlePageClick = (event: { selected: number }) => {
    console.log(`User requested page number ${event.selected}`);
    setCurrentPage(event.selected);
  };

  const getList = useCallback(async (completed: boolParam, page: number) => {
    try {
      const data = await fetchTodos(completed, page);
      setTodos(data);
    } catch (error) {
      console.error('fetchTodos error', error);
    }
  }, []);

  // 데이터 가져오기
  useEffect(() => {
    getList(isCompleted, currentPage);
    console.log('확인');
  }, [isCompleted, getList, currentPage, refreshkey]);

  // 일정 추가
  const handleAddToDo = async (todo: TodoUpsert) => {
    try {
      const result = await createTodo(todo);
      console.log('생성', result);
      setIsCompleted('');
      setCurrentPage(0);
      forceReload();
    } catch (error) {
      console.error('fetchTodos error', error);
    }
    // 기존 todos 에 추가
    // setTodos([
    //   ...todos,
    //   { id: nextId.current, title: title, completed: false, important: false },
    // ]);
    // nextId.current += 1;
  };

  // 일정 완료
  const handleChangeTodo = async (todo: TodoUpsert) => {
    // 전체 todos 에서 인자로 넘어온 todo 와 같은 id 찾아서 completed 업데이트
    // setTodos(todos.map((t) => (t.id === todo.id ? { ...t, ...todo } : t)));
    try {
      const result = await updateTodo(todo);
      console.log('수정', result);
      setIsCompleted('');
      setCurrentPage(0);
      forceReload();
    } catch (error) {
      console.error('fetchTodos error', error);
    }
  };

  // 일정 삭제
  const handleDeleteTodo = async (id: number) => {
    // 전체  todos 에서 id 와 일치하지 않는 todos 추출후 setTodos()
    // setTodos(todos.filter((todo) => todo.id !== id));
    try {
      const result = deleteTodo(id);
      console.log('삭제여부', result);
      // 리스트 호출 : getList() => useEffect() 자동호출
      // 완료 구분 없이 전체 지정
      // setIsCompleted(''); 이렇게 두면 전체에서 삭제하면 useState가 안됨
      setIsCompleted('');
      setCurrentPage(0);
      forceReload();
    } catch (error) {}
  };

  // 완료-미완료 선택
  const handleComplete = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const completed = e.target.value as boolParam;
    setIsCompleted(completed);
    // getList(isCompleted); => useEffect() 자동호출
    forceReload();
  };
  return (
    <>
      <TodoTeamplate>
        <div className="flex p-3">
          <span className="flex-1 text-left text-orange-700">
            중요일정은 체크 클릭
          </span>
          <div className="shrink-0">
            <span>완료</span>
            <select
              name="completed"
              className="mx-2 rounded border border-gray-400"
              onChange={handleComplete}
              value={isCompleted}
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
        <TodoInsert onAddTodo={handleAddToDo} />
        <TodoList
          todos={todos}
          onDeleteTodo={handleDeleteTodo}
          onChangeTodo={handleChangeTodo}
        />
      </TodoTeamplate>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        forcePage={currentPage}
        containerClassName="flex justify-center gap-2 mt-4 "
        pageClassName="px-3 py-1 border rounded cursor-pointer"
        activeClassName="bg-orange-500 text-white"
        previousClassName="px-3 py-1 border rounded cursor-pointer"
        nextClassName="px-3 py-1 border rounded cursor-pointer"
      />
    </>
  );
}

export default App;
