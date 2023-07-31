import { useState } from "react";
import React from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

export default function TaskList({ tasks, setTasks }) {

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
              <div className="card m-2">
                <Task key={t.id} task={t} />
                <div className="card-footer d-flex justify-content-around">
                  <button className="btn btn-warning btn-sm w-25">Edit</button>
                  <button className="btn btn-danger btn-sm w-25">Delete</button>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
