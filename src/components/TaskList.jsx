import { useState } from "react";
import React from "react";
import Task from "./Task";
import TaskForm from "./TaskForm";

export default function TaskList() {
  const [allTask, setAllTask] = useState([
    {
      id: 1,
      title: "Title",
      description: "contente description",
      finish: false,
    },
    {
      id: 2,
      title: "Title2",
      description: "contente description 2",
      finish: true,
    },
  ]);

  return (
    <>
      <div className="d-flex flex-rows gap-5">
        <div className="w-25">
          <TaskForm />
        </div>
        <div className="w-75">
          <h2>TaskList</h2>
          <ul>
            {allTask.map((t) => (
              <div>
                <Task key={t.id} task={t} />
                <button className="btn btn-secondary btn-sm">Edit</button>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
