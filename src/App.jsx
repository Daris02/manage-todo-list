import { useState } from "react";
import TaskList from "./components/TaskList";

function App() {
  return (
    <>
      <div className="container">
        <h1>Managed to do list</h1>
        <TaskList />
      </div>
    </>
  );
}

export default App;
