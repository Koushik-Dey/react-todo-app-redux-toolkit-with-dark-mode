import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import TodoForm from "./components/TodoForm";
import TodoCard from "./components/TodoCard";

const App = () => {
  const allTodos = useSelector((state) => state.todo.todos);
  const defaultTheme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(defaultTheme);
  }, [defaultTheme]);

  return (
    <>
      <div className="min-h-[93vh] dark:bg-gray-800">
        <div className="pt-10 container mx-auto">
          <div className="grid grid-flow-col grid-cols-2 gap-5">
            <div className="w-[100%]">
              <TodoForm />
            </div>
            <div className="w-[100%]">
              {allTodos.map((todo) => (
                <TodoCard key={todo.id} {...todo} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
