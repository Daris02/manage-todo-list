import { useState } from "react";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Title",
      description: "contente description",
      isFinish: false,
    },
    {
      id: 2,
      title: "Title2",
      description: "contente description 2",
      isFinish: true,
    },
  ]);

  return (
    <>
      <div className="container">
        <h1>Managed to do list</h1>
        <TaskList tasks={tasks} setTasks={setTasks} />
      </div>
    </>
  );
}

export default App;
