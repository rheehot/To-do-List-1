//App.js
import React, {useState} from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id:1,
      text:"일정 1",
      checked: true,
    },
    {
      id:2,
      text:"일정 2",
      checked:true,
    },
    {
      id:3,
      text:"일정 3",
      checked:false,
    },
  ]);

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
};

export default App;