import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <div className='container'>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Content darkMode={darkMode} />
    </div>
  );
}

export default App;
