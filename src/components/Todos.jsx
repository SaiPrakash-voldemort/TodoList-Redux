import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeTodo } from "../features/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div className="overflow-auto">
      {todos.map((todo) => (
        <div key={todo.id} className="flex justify-center gap-2 p-3 ">
          <h1 className="h-[2.5rem] rounded-2xl font-semibold w-[80%]  p-2 border-[#a0d2eb] dark:border-white border-[2px] bg-inherit dark:text-white overflow-hidden  ">
            {todo.text}
          </h1>
          <button onClick={() => dispatch(removeTodo(todo.id))}>
            <img className="h-[30px] w-[30px]" src="/del.png"></img>
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todos;
