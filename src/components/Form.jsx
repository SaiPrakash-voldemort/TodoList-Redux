import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";
const Form = () => {
  const data = useRef();
  // const [todo, settodo] = useState([]);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addTodo(data.current.value));
    data.current.value = "";
  };
  // useEffect(() => {
  //   console.log(todo);

  // }, [todo]);

  return (
    <div>
      <div className="flex items-center justify-center gap-2 p-3 text-black">
        <input
          className="h-[2.5rem] rounded-2xl font-semibold w-[80%] p-2 border-[#a0d2eb] dark:border-white border-[2px] bg-inherit dark:text-white "
          placeholder="Enter your task"
          type="text"
          ref={data}
        ></input>
        <button onClick={handleClick}>
          <img className="h-[30px] w-[30px]" src="/plus.png"></img>
        </button>
      </div>
    </div>
  );
};

export default Form;
