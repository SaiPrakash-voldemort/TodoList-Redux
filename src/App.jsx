import React, { useState } from "react";
import Form from "./components/Form";
import Todos from "./components/Todos";
import { useSelector } from "react-redux";

const App = () => {
  const todos = useSelector((state) => state.todos);
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="flex flex-col items-center justify-center w-screen h-screen gap-2 bg-[#a0d2eb] dark:bg-gray-900">
        <div className="flex w-[70%] justify-end ">
          <button
            className="inline-flex items-center justify-center h-10 px-10 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle transition-all duration-300 ease-in-out bg-gray-900 border-2 border-gray-600 border-solid rounded-full cursor-pointer select-none dark:bg-transparent hover:text-white hover:border-white focus:shadow-xs focus:no-underline "
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <img className="h-[20px] w-[20px]" src="/sun.png"></img>
            ) : (
              <img
                className="h-[20px] w-[20px]"
                height="50"
                width="50"
                src="/moon.png"
              ></img>
            )}
          </button>
        </div>
        <div className=" h-[80%] w-[70%] bg-white dark:bg-slate-800 shadow:[ rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;] rounded-2xl overflow-auto">
          <h1 className="flex flex-col justify-center p-2 mt-2 text-3xl font-bold text-center dark:text-white">
            ToDoList App
          </h1>
          <h1 className="flex flex-col justify-center p-2 mt-2 text-xl font-bold text-center dark:text-white">
            Tasks To Completed : {todos.length}
          </h1>
          <div className="flex flex-col justify-center overflow-hidden">
            <Form />
            {todos.length === 0 ? (
              <h3 className="flex flex-col justify-center p-2 mt-2 text-xl font-bold text-center dark:text-white">
                Have a Good day😃
              </h3>
            ) : null}
            <Todos />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
