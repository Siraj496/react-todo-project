import { useState } from "react";
import { Plus } from "lucide-react";
import "../styles/TaskForm.css";

const TaskForm = ({ addTask }) => {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState(1);

  const handleSubmit = () => {
    if (!text.trim()) return;

    addTask({
      id: Date.now(),
      text,
      priority,
      done: false,
    });

    setText("");
    setPriority(1);
  };

  return (
    <div className="task-form">
      <input
        type="text"
        placeholder="Enter task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        type="number"
        min="1"
        value={priority}
        onChange={(e) => setPriority(Number(e.target.value))}
      />

      <button onClick={handleSubmit}>
        <Plus size={20} />
      </button>
    </div>
  );
};

export default TaskForm;
