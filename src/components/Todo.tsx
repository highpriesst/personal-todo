import { ITodoProps } from "../types/todo.types";

function Todo({ title, description, index, completed }: ITodoProps) {
  return (
    <div className="mb-5 flex items-center">
      <button className="w-12 h-12 mr-3">!</button>
      <div className="flex-1">
        <ul className="flex gap-3 text-center justify-center">
          <li key={index} className="flex flex-col">
            <span>Title {title}</span>
            <span>Description {description}</span>
          </li>
        </ul>
      </div>
      <button className="w-12 h-12 ml-3">X</button>
    </div>
  );
}

export default Todo;
