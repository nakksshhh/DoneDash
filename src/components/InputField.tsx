import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <div className="flex justify-center items-center mt-5 px-4">
      <form 
        className="flex bg-white shadow-md rounded-lg overflow-hidden border border-gray-300 w-full max-w-lg md:max-w-xl lg:max-w-2xl" 
        onSubmit={(e) => handleAdd(e)}
      >
        <input 
          type="text" 
          placeholder="Enter a new task" 
          className="flex-grow px-4 py-2 text-gray-700 border-none focus:outline-none"
          value={todo} 
          onChange={(e) => setTodo(e.target.value)}
        />
        
        <button 
          type="submit" 
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 font-semibold transition-colors duration-300"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default InputField;
