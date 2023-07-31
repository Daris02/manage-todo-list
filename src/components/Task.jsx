import React from "react";

export default function Task({ task, handleDelete }) {

  return (
    <>
      <div className="card m-2 p-2">
        <h4>{task.title}</h4>
        <p>{task.description}</p>
        <div className="card-footer d-flex justify-content-around">
          <button className="btn btn-warning btn-sm">Edit</button>
          <button className="btn btn-danger btn-sm" onClick={() => handleDelete(task.id)}>Delete</button>
        </div>
      </div>
    </>
  );
}
