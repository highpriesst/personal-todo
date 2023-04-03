import { ITodoProps } from "../types/todo.types";

const colorVariants = {
  notFinished:
    "flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-grey-500 border-grey-500",
  finished:
    "flex-no-shrink p-2 ml-4 mr-2 border-2 rounded text-green-500 border-green-500",
  remove:
    "flex-no-shrink p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:bg-red",
};

function Todo({ title, description, index, completed }: ITodoProps) {
  return (
    <div className="p-1">
      <ul className="flex mb-4 items-center text-black p-3">
        <li key={index}>
          <span>Title {title}</span>
          <span className={completed ? `line-through text-green-500` : ""}>
            Description {description}
          </span>
          <span>
            Completed {completed === true ? `Finished` : `Not finished`}
          </span>
        </li>
        <button
          disabled={!completed}
          className={
            completed ? colorVariants.finished : colorVariants.notFinished
          }>
          Done
        </button>
        <button className={colorVariants.remove}>Remove</button>
      </ul>
    </div>
  );
}

export default Todo;
