import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/layout/navbar/Navbar";
import Content from "./components/layout/content/Content";
import Footer from "./components/layout/footer/Footer";
import StandardBtn from "./components/common/standard-btn/StandardBtn";

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Content>
        <div>Hello from Earth</div>
        <StandardBtn>IT</StandardBtn>
      </Content>
      <Footer />
    </div>
  );
}

export default App;
