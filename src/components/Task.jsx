import React from "react";

export default function Task({ task }) {
  return (
    <>
      <div className="container-fluid card">
        <h4>{task.title}</h4>
        <p>{task.description}</p>
      </div>
    </>
  );
}
