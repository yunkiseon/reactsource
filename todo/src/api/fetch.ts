import axios from 'axios';
import type { boolParam, TodoUpsert } from '../types/todo';

// 서버와 통신하는 역할 담당
export const API_SERVER_HOST = 'http://localhost:8080/todos';

export const fetchTodos = async (completed: boolParam, page: number) => {
  const res = await axios.get(API_SERVER_HOST, {
    params: {
      completed: completed,
      page: page,
    },
  });
  //axios는 자동으로 json 파싱을 해줌
  console.log('서버로부터 받은 데이터', res.data);
  return res.data;
};

// 삭제
export const deleteTodo = async (id: number) => {
  const res = await axios.delete(`${API_SERVER_HOST}/${id}`);
  console.log('삭제', res.data);
  return res.data;
};

// todo 수정
export const updateTodo = async (todo: TodoUpsert) => {
  const res = await axios.put(`${API_SERVER_HOST}/${todo.id}`, todo);
  console.log('수정', res.data);
  return res.data;
};
// todo 생성
export const createTodo = async (todo: TodoUpsert) => {
  const res = await axios.post(`${API_SERVER_HOST}/add`, todo);
  console.log('생성', res.data);
  return res.data;
};
