import { useState } from "react";
import "../styles/EditTaskForm.css";

const EditTaskForm = ({ task, updateTask, setEditingTaskId }) => {
  const [text, setText] = useState(task.text);
  const [priority, setPriority] = useState(task.priority);

  const handleSave = () => {
    updateTask({
      taskId: task.id,
      editText: text,
      editPriority: priority,
    });

    setEditingTaskId(null);
  };

  return (
    <div className="edit-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        type="number"
        min="1"
        value={priority}
        onChange={(e) => setPriority(Number(e.target.value))}
      />

      <button className="save-btn" onClick={handleSave}>
        Save
      </button>

      <button className="cancel-btn" onClick={() => setEditingTaskId(null)}>
        Cancel
      </button>
    </div>
  );
};

export default EditTaskForm;
