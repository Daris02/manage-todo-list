import React from "react";
import { useForm } from "react-hook-form";

export default function EditForm({ handleEdit }) {
  const { handleSubmit, register } = useForm();

  function onSubmit(newTask) {
    console.log(newTask);
    // handleEdit(newTask);
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
              <form onSubmit={handleSubmit(onSubmit)}>
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
              </form>
            </div>
            <div className="modal-footer d-flex justify-content-around">
              <button type="submit" className="btn btn-warning">
                Edit
              </button>
              {/* <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Cancel
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
