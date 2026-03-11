import { ArrowDownWideNarrow } from "lucide-react";
import "../styles/Controls.css";

const TaskControls = ({
  showOnlyIncomplete,
  setShowOnlyIncomplete,
  sortTasks,
}) => {
  return (
    <div className="controls">
      <label className="filter">
        <input
          type="checkbox"
          checked={showOnlyIncomplete}
          onChange={() => setShowOnlyIncomplete(!showOnlyIncomplete)}
        />
        Show only incomplete
      </label>

      <button className="sort-btn" onClick={sortTasks}>
        <ArrowDownWideNarrow size={18} />
      </button>
    </div>
  );
};

export default TaskControls;
