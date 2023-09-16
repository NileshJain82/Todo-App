import React, { useState } from "react";
import { MdOutlineAddTask } from "react-icons/md";

export default function Input({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handle() {
    if (!title || !description) {
      setErrorMessage("/* Please add both title and description.*/");
      return;
    }

    addTask(title, description);
    setTitle("");
    setDescription("");
    setErrorMessage("");
  }

  return (
    <div className="flex bg-gradient-to-r from-blue-100 via-purple-400 to-orange-200 border-gray-400 border-2 justify-around m-14 p-5">
      <form className="flex flex-col p-2 w-1/2 space-y-4">
        <input
          type="text"
          placeholder="Enter The Task"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="border-2 border-gray-300 p-2 ml-2"
        />
        <input
          type="text"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="Enter The Description"
          value={description}
          className="border-2 border-gray-300 p-2 ml-2"
        />
      </form>

      <button
        onClick={handle}
        className="bg-orange-100 flex items-center rounded m-9  border-gray-500 border p-2 hover:bg-orange-200 hover:border-gray-500 cursor-pointer"
      >
        <MdOutlineAddTask /> <span className="ml-3">Add</span>
      </button>

      {errorMessage && (
        <div className=" font-semibold  text-l   
        text-black-600 mt-10 ml-2">{errorMessage}</div>
      )}
    </div>
  );
}
