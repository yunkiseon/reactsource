import { useEffect, useReducer, useState } from 'react';
import AddTask from './AddTask';
import ListTask from './ListTask.tsx';
import type { Task } from '../types/task.ts';
import { taskReducer } from '../reducer/taskReducer.ts';

export type TaskProps = {
  id: number;
  text: string;
  done: boolean;
};

const intialTask = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];
let nextId = 3;

function TaskApp() {
  // const [tasks, setTasks] = useState(intialTask);
  const [tasks, dispatch] = useReducer(taskReducer, intialTask);

  // 여행 계획 추가
  const handleAddTask = (text: string) => {
    // tasks 추가
    dispatch({
      type: 'ADD',
      id: nextId++,
      text: text,
      done: false,
    });
  };
  // 여행 계획 수정
  const handleChangeTask = (task: Task) => {
    console.log('업데이트 된 tasks ', tasks);
    // 수정할 task 찾기
    dispatch({
      type: 'CHANGE',
      task: task,
    });
    // console.log(task) 해도 상태확인 불가능 아래코드필요
    // fetch나 axios 사용시 사용
  };
  // 여행 계획 제거
  const handleDeleteTask = (taskId: number) => {
    // tasks 에서 id 에 해당하는 task 제거
    // 혹은 id와 일치하지 않는 task 추출해서 새로운 배열 생성-> map(),filter()
    // ... 없어도 됨. 기존 배열 자체가 필요하지 않은 상황이기에
    dispatch({
      type: 'DELETE',
      id: taskId,
    });
  };

  return (
    <>
      <div className="mt-10 flex justify-center">
        <div className="w-full max-w-2xl space-y-6 rounded-lg bg-white p-6 shadow-md">
          <h2 className="text-center text-2xl font-semibold">여행지 계획</h2>
          {/* 데이터 입력 */}
          <AddTask onAddTask={handleAddTask} />
          {/* 리스트 */}
          <ListTask
            tasks={tasks}
            onDeleteTask={handleDeleteTask}
            onChangeTask={handleChangeTask}
          />
        </div>
      </div>
    </>
  );
}

export default TaskApp;
