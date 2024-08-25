import React, { useState } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../model.ts";

const SingleTodo: React.FC<{
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <form
      className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-4 my-2 rounded-md w-full md:w-full"
      onSubmit={(e) => handleEdit(e, todo.id)}
    >
      {edit ? (
        <input
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="flex-grow border-b-2 border-blue-500 focus:outline-none mb-2 md:mb-0 md:mr-2 px-2 py-1"
        />
      ) : todo.isDone ? (
        <s className="flex-grow text-gray-500 mb-2 md:mb-0">{todo.todo}</s>
      ) : (
        <span className="flex-grow mb-2 md:mb-0">{todo.todo}</span>
      )}
      <div className="flex space-x-2">
        <span
          className="text-blue-500 cursor-pointer"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span
          className="text-red-500 cursor-pointer"
          onClick={() => handleDelete(todo.id)}
        >
          <AiFillDelete />
        </span>
        <span
          className="text-green-500 cursor-pointer"
          onClick={() => handleDone(todo.id)}
        >
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
