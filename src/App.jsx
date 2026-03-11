import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskControls from "./components/TaskControls";
import TaskList from "./components/TaskList";
import { getStoredTasks, updateLocalStorage } from "./utils/localStorageUtils";
import "./styles/App.css";

const App = () => {
  const [tasks, setTasks] = useState(getStoredTasks());
  const [showOnlyIncomplete, setShowOnlyIncomplete] = useState(false);

  const addTask = (task) => {
    const updated = [...tasks, task];
    setTasks(updated);
    updateLocalStorage(updated);
  };

  const removeTask = (id) => {
    const updated = tasks.filter((t) => t.id !== id);
    setTasks(updated);
    updateLocalStorage(updated);
  };

  const toggleTaskDone = (id) => {
    const updated = tasks.map((t) =>
      t.id === id ? { ...t, done: !t.done } : t,
    );
    setTasks(updated);
    updateLocalStorage(updated);
  };

  const sortTasks = () => {
    const sorted = [...tasks].sort((a, b) => a.priority - b.priority);
    setTasks(sorted);
    updateLocalStorage(sorted);
  };
  const updateTask = ({ taskId, editText, editPriority }) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId
        ? { ...task, text: editText, priority: editPriority }
        : task,
    );

    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  };
  return (
    <div className="container">
      <h1>To-Do App</h1>

      <TaskForm addTask={addTask} />

      <TaskControls
        showOnlyIncomplete={showOnlyIncomplete}
        setShowOnlyIncomplete={setShowOnlyIncomplete}
        sortTasks={sortTasks}
      />

      <TaskList
        tasks={tasks}
        showOnlyIncomplete={showOnlyIncomplete}
        toggleTaskDone={toggleTaskDone}
        removeTask={removeTask}
        updateTask={updateTask}
      />

      <p className="task-counter">Total Tasks: {tasks.length}</p>
    </div>
  );
};

export default App;
