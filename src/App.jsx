import React, { useState, useEffect } from "react";
import Output from "./Components/Output";
import Input from "./Components/Input";
import Header from "./Components/Header";
import "./index.css";

function App() {
  const [task, setTask] = useState([]);
  const [des, setDes] = useState([]);

  // Load saved data from localStorage when the component mounts
  useEffect(() => {
    const savedTask = localStorage.getItem("task");
    const savedDes = localStorage.getItem("des");

    if (savedTask && savedDes) {
      setTask(JSON.parse(savedTask));
      setDes(JSON.parse(savedDes));
    }
  }, []);

  function addTask(newTask, newDesc) {
    const updatedTask = [...task, newTask];
    const updatedDes = [...des, newDesc];

    // Save the updated data to localStorage
    localStorage.setItem("task", JSON.stringify(updatedTask));
    localStorage.setItem("des", JSON.stringify(updatedDes));

    setTask(updatedTask);
    setDes(updatedDes);
  }

  function removeTask(index) {
    const updatedTask = [...task];
    const updatedDes = [...des];
    updatedTask.splice(index, 1);
    updatedDes.splice(index, 1);

    // Save the updated data to localStorage
    localStorage.setItem("task", JSON.stringify(updatedTask));
    localStorage.setItem("des", JSON.stringify(updatedDes));

    setTask(updatedTask);
    setDes(updatedDes);
  }

  return (
    <>
      <Header />
      <Input addTask={addTask} />
      <Output task={task} des={des} onRemove={removeTask} />
    </>
  );
}

export default App;
