import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
  let content = (
    <ul className="p-4 mt-8 rounded-md bg-stone-100">
      {tasks.map((task) => {
        return (
          <li key={task.id} className="flex justify-between my-4">
            <span>{task.text}</span>
            <button
              className="text-stone-700 hover:text-red-500"
              onClick={() => onDelete(task.id)}
            >
              Clear
            </button>
          </li>
        );
      })}
    </ul>
  );

  if (tasks.length === 0) {
    content = (
      <p className="text-stone-800 my-4">
        This project doesnot have any tasks yet
      </p>
    );
  }
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 my-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {content}
    </section>
  );
}
