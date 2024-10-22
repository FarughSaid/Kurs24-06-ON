import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/layout/navbar/Navbar";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <div className="content">Hello from Homepage</div>
      <footer>This is my footer</footer>
    </div>
  );
}

export default App;
