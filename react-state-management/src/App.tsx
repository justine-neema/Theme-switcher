import Navbar from "./components/Navbar";
import TaskManager from "./components/TaskManager";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";

const App = () => {
  return (
    <ThemeProvider>
      <div className="app-shell">
        <Navbar />
        <TaskManager />
      </div>
    </ThemeProvider>
  );
};

export default App;
