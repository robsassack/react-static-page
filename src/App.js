import "./App.css";

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src='./react-logo.png' alt='React logo' className="react-logo" />
        <p>ReactFacts</p>
      </div>
      <p className="header-text">React Course - Project 1</p>
    </header>
  );
}

function Content() {
  return (
    <div className="content">
      <h1>Fun facts about React</h1>
      <ul className="content-list">
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <Content />
    </>
  );
}

export default App;
