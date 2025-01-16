import React, { useState, useRef } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";

const TODO = () => {
  const inputRef = useRef();
  const [todolist, setTodolist] = useState([]);

  const Add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodolist((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  // Toggle completion state
  const toggleComplete = (id) => {
    setTodolist((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isComplete: !item.isComplete } : item
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTodolist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md min-h-[512px] flex flex-col rounded-xl px-4">
      <div className="flex items-center space-x-2 py-4 px-4">
        <img className="w-20" src={todo_icon} alt="No img" />
        <h1 className="text-2xl font-semibold underline-offset-auto text-sky-600">
          TO-DO LIST
        </h1>
      </div>
      <div className="px-4 space-x-2 flex items-center rounded-full bg-gray-300 my-4">
        <input
          ref={inputRef}
          type="text"
          placeholder="Add your task"
          className="bg-transparent rounded-full border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-500"
        />
        <button
          onClick={Add}
          className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          ADD+
        </button>
      </div>
      <div className="space-y-3">
        {todolist.map((item) => {
          return (
            <TodoItems
              key={item.id}
              id={item.id}
              text={item.text}
              isComplete={item.isComplete}
              toggleComplete={toggleComplete}
              deleteTask={deleteTask}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TODO;
