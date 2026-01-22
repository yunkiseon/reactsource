import React, { useState } from 'react';
import { MdAdd } from 'react-icons/md';
import { fetchPost, fetchTodos } from '../api/fetch';

const TodoInsert = ({ onAddTodo }) => {
  const [form, setForm] = useState({
    title: '',
    important: false,
    completed: false,
  });

  const { important, title } = form;
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;

    // setForm({
    //   ...form,
    //   [name] : type === 'checkbox' ? checked : value
    // });
    setForm((prev) => ({
      ...prev, // 이전 폼이라는 의미
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  const insert = async (title: string) => {
    const data = await fetchPost(title);
    setTitle(data);
  };

  return (
    <form className="flex bg-black">
      <input
        type="checkbox"
        className="mx-2 grow p-2 text-gray-400 placeholder:text-gray-400 focus:outline-none"
        onChange={handleFormChange}
      />
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        className="grow p-2 text-gray-400 placeholder:text-gray-400 focus:outline-none"
        onChange={handleFormChange}
        value={title}
      />
      <button
        type="button"
        className="cursor-pointer bg-gray-300 p-2 hover:bg-gray-500"
        onClick={() => {
          onAddTodo(form);
          setTitle('');
        }}
      >
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
