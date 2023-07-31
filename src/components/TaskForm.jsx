import React from "react";
import { useForm } from "react-hook-form";

export default function TaskForm({ tasks, setTasks }) {
  const { handleSubmit, register } = useForm();
  function onSubmit(newTask) {
    setTasks([...tasks, newTask]);
  }

  return (
    <>
      <h2>Add new task : </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" hidden={true} {...register("id")} value={Date.now()} />
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="form-control m-2"
          {...register("title")}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="form-control m-2"
          {...register("description")}
        />
        <input type="text" hidden={true} {...register("isFinish")} value={false} />
        <button type="submit" className="btn btn-success w-100 m-2">
          Add
        </button>
      </form>
    </>
  );
}
