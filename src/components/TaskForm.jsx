import React from "react";

export default function TaskForm() {
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
          className="form-control"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="form-control"
        />
        <button type="submit" className="btn btn-success">
          add
        </button>
      </form>
    </>
  );
}
