import { useState } from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';

function TaskItem({ task, onDeleteTask, onChangeTask }) {
  const [isDone, setIsDone] = useState(task.done);
  const [isEdit, setIsEdit] = useState(false);
  // task.done true 면 체크박스 체크된 걸로

  const CheckboxIcon = isDone ? MdCheckBox : MdCheckBoxOutlineBlank;
  const taskDoneChange = () => {
    setIsDone(!isDone);
    // 기존 done 변경
    onChangeTask({
      ...task,
      done: !isDone,
    });
  };
  return (
    <>
      <div className="flex items-center justify-between px-3 py-2">
        <div className="mr-2 flex w-full items-center gap-3">
          <CheckboxIcon onClick={taskDoneChange} />
          {isEdit ? (
            <input
              type="text"
              className="w-full border p-3"
              placeholder="할 일을 입력하세요"
            />
          ) : (
            <span className="flex items-center gap-2">{task.text}</span>
          )}
        </div>
        <div className="flex items-center gap-3">
          {isEdit ? (
            <button
              type="button"
              className="rounded border px-4 py-2 text-sm text-green-600"
            >
              Save
            </button>
          ) : (
            <button
              type="button"
              className="rounded border px-4 py-2 text-sm text-green-600"
            >
              Edit
            </button>
          )}

          <button
            type="button"
            className="rounded border px-4 py-2 text-sm text-red-600"
            onClick={() => onDeleteTask(task.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

function ListTask({ tasks, onDeleteTask, onChangeTask }) {
  return (
    <>
      {tasks.map((task) => (
        <TaskItem
          task={task}
          onDeleteTask={onDeleteTask}
          onChangeTask={onChangeTask}
        />
      ))}
    </>
  );
}

export default ListTask;
