// import { ITodo } from "../types/todo.types";

// type Props = ITodo & {
//   updateTodo: (todo: ITodo) => void;
//   deleteTodo: (_id: string) => void;
// };

// function Todo(todos: Props, index: string) {
//   return (
//     <div className="mb-5 flex items-center">
//       <button className="w-12 h-12 mr-3" onClick={() => updateTodo(todos)}>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M4.5 12.75l6 6 9-13.5"
//           />
//         </svg>
//       </button>
//       <div className="flex-1">
//         <ul className="flex gap-3 text-center justify-center">
//           <li key={index} className="flex flex-col">
//             <span>Title {todos.title}</span>
//             <span>Description {todos.description}</span>
//           </li>
//         </ul>
//       </div>
//       <button className="w-12 h-12 ml-3">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M6 18L18 6M6 6l12 12"
//           />
//         </svg>
//       </button>
//     </div>
//   );
// }

// export default Todo;

import React from "react";
import { ITodo } from "../types/todo.types";

interface ITodoProps {
  index: number;
  todo: ITodo;
  updateTodo: (todo: ITodo) => void;
}

function Todo({ todo, index, updateTodo }: ITodoProps) {
  return (
    <div>
      <ul className="flex mb-4 items-center">
        <li key={index}>
          <span>Title: {todo.title}</span>
          <span>Description: {todo.description}</span>
          <span>
            Completed: {todo.completed === true ? `Finished` : `Not finished`}
          </span>
        </li>
        <button
          className={`flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white ${
            todo.completed === true
              ? `text-green-500 border-green-500 hover:bg-green-700`
              : `text-gray-500 border-gray-500 hover:bg-gray-700`
          }`}
          onClick={() => updateTodo(todo)}>
          Done
        </button>
        <button className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-700">
          Remove
        </button>
      </ul>
    </div>
  );
}

export default Todo;
