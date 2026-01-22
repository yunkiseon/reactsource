import axios from 'axios';
import type { boolParam } from '../types/todo';

// 서버와 통신하는 역할 담당
export const API_SERVER_HOST = 'http://localhost:8080/todos';

export const fetchTodos = async (completed: boolParam) => {
  const res = await axios.get(API_SERVER_HOST, {
    params: {
      completed: completed,
    },
  });
  //axios는 자동으로 json 파싱을 해줌
  console.log('서버로부터 받은 데이터', res.data);
  return res.data;
};

export const fetchPost = async (title: string) => {
  const res = await axios.post(API_SERVER_HOST, {
    params: { title: title },
  });
};
