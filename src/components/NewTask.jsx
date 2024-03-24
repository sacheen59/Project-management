import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTitle, setEnteredTitle] = useState("");

  function handleChange(event) {
    setEnteredTitle(event.target.value);
  }

  function handleClick() {
    onAdd(enteredTitle);
    setEnteredTitle("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        value={enteredTitle}
        type="text"
        className="w-64 px-2 py-1 rounded-sm text-stone-700 bg-stone-200 focus:outline-none"
        onChange={handleChange}
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}
