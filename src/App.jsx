import { useState } from "react";
import Dashboard from "./components/Dashboard";
import CreateTask from "./components/CreateTask";
import "./assets/App.css";

function App() {
  const [showCreateTask, setShowCreateTask] = useState(false);

  return (
    <div className="app-container">
      <div className="phone-container">
        {showCreateTask ? (
          <CreateTask goBack={() => setShowCreateTask(false)} />
        ) : (
          <Dashboard openCreateTask={() => setShowCreateTask(true)} />
        )}
      </div>
    </div>
  );
}

export default App;