import { Trash, Pencil } from "lucide-react";
import "../styles/TaskItem.css";

const TaskItem = ({ task, toggleTaskDone, removeTask, setEditingTaskId }) => {
  return (
    <li className="task-item">
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => toggleTaskDone(task.id)}
      />

      <span className={`task-text ${task.done ? "done" : ""}`}>
        {task.text}
      </span>

      <span className="priority">{task.priority}</span>

      <button className="edit-btn" onClick={() => setEditingTaskId(task.id)}>
        <Pencil size={16} />
      </button>

      <button className="delete-btn" onClick={() => removeTask(task.id)}>
        <Trash size={16} />
      </button>
    </li>
  );
};

export default TaskItem;
