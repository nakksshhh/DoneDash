import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

const App: React.FC = () => {  
  const [todo, setTodo] = useState<string>("");
  //console.log(todo);
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
   //console.log(todos);
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-50 min-h-screen">
      <span className="text-4xl font-extrabold text-blue-600 mb-6">DoneDash</span>
      <InputField 
        todo={todo} 
        setTodo={setTodo} 
        handleAdd={handleAdd}
      />
      <TodoList 
        todos={todos} 
        setTodos={setTodos} 
      />
    </div>
  );
};

export default App;
