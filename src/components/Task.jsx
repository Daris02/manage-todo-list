import React from "react";

export default function Task({ task }) {
  return (
    <>
      <div className="container-fluid">
        <h4>{task.title}</h4>
        <p>{task.description}</p>
      </div>
    </>
  );
}
