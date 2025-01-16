import React from "react";

import tick from "../assets/tick.png";
import not_tick from "../assets/not_tick.png";
import felete from "../assets/felete.png";

const TodoItems = ({ text, id, isComplete, toggleComplete, deleteTask }) => {
  // Use the appropriate tick image based on the task's completion state
  const tickImage = isComplete ? tick : not_tick;

  return (
    <div className="flex items-center my-3 gap-2 justify-between">
      <div
        className="flex flex-1 items-center cursor-pointer"
        onClick={() => toggleComplete(id)}
      >
        <img src={tickImage} alt="Tick" className="w-10 mr-2" />
        <p className={isComplete ? "line-through text-gray-500" : ""}>
          {text}
        </p>{" "}
        {/* Strike-through if complete */}
      </div>
      <img
        src={felete}
        alt="Del"
        className="w-3.5 cursor-pointer ml-auto"
        onClick={() => deleteTask(id)}
      />
    </div>
  );
};

export default TodoItems;
