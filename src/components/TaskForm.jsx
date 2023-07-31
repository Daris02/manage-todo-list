import React from "react";

export default function TaskForm({ tasks, setTasks }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h2>Add new task : </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="form-control m-2"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="form-control m-2"
        />
        <button type="submit" className="btn btn-success w-100 m-2">
          Add
        </button>
      </form>
    </>
  );
}
