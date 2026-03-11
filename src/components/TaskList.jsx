import { useState } from "react";
import TaskItem from "./TaskItem";
import EditTaskForm from "./EditTaskForm";
import "../styles/TaskList.css";

const TaskList = ({
  tasks,
  showOnlyIncomplete,
  toggleTaskDone,
  removeTask,
  updateTask,
}) => {
  const [editingTaskId, setEditingTaskId] = useState(null);

  const filtered = tasks.filter((task) => !showOnlyIncomplete || !task.done);

  return (
    <ul className="task-list">
      {filtered.map((task) => (
        <li key={task.id}>
          {editingTaskId === task.id ? (
            <EditTaskForm
              task={task}
              setEditingTaskId={setEditingTaskId}
              updateTask={updateTask}
            />
          ) : (
            <TaskItem
              task={task}
              toggleTaskDone={toggleTaskDone}
              removeTask={removeTask}
              setEditingTaskId={setEditingTaskId}
            />
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
