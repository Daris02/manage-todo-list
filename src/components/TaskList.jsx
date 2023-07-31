import { useState } from "react";
import React from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

export default function TaskList({ tasks, setTasks }) {
  const handleDelete = (id) => {
    const newTasks = tasks.filter(t => t.id != id);
    setTasks(newTasks);
  }

  return (
    <>
      <div className="d-flex flex-rows gap-5">
        <div className="w-25">
          <TaskForm tasks={tasks} setTasks={setTasks} />
        </div>
        <div className="w-50">
          <h2>TaskList</h2>
          <ul>
            {tasks.map((t) => (
              <Task key={t.id} task={t} handleDelete={handleDelete} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
