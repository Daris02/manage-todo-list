import React from "react";
import { useForm } from "react-hook-form";

export default function EditForm({ task, handleEdit }) {
  const { handleSubmit, register } = useForm();

  function onSubmit(newTask) {
    task.title = newTask.title;
    task.description = newTask.description;
    handleEdit(task);
  }

  return (
    <>
      <div className="modal fade" id="editModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title mx-auto">Edit task</h1>
            </div>
            <div className="modal-body">
              <form action="submit" onSubmit={handleSubmit(onSubmit)}>
                <input
                  type="text"
                  name="title"
                  placeholder="New title"
                  className="form-control m-2"
                  {...register("title")}
                />
                <input
                  type="text"
                  name="description"
                  placeholder="New description"
                  className="form-control m-2"
                  {...register("description")}
                />
                <input type="checkbox" {...register("isFinish")} />
                <div className="modal-footer d-flex justify-content-around">
                  <button type="submit" className="btn btn-warning">
                    Edit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
