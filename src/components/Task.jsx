import React from "react";
import EditForm from "./EditForm";

export default function Task({ task, handleDelete, handleEdit }) {
  const Id = task.id;
  const Title = task.title;
  const Description = task.description;

  return (
    <>
      <div className="card m-2 p-2">
        <h4>{Title}</h4>
        <p>{Description}</p>
        <div className="card-footer d-flex justify-content-around">
          <button
            className="btn btn-warning btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#editModal"
          >
            Edit
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => handleDelete(Id)}
          >
            Delete
          </button>
        </div>
      </div>

      <EditForm task={task} handleEdit={handleEdit} />
    </>
  );
}
