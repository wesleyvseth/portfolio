import "./App.css";
import Landing from "./components/landing/landing";
import Projects from "./components/projects/projects";
import Experience from "./components/experience/experience";

function App() {
  return (
    <div className="App">
      <Landing />
      <Projects />
      <Experience />
    </div>
  );
}

export default App;
