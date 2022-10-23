import "./App.css";

function Content() {
  return (
    <div>
      <img src='./react-logo.png' alt='React logo' width='40px' />
      <h1>Fun facts about React</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
  )
}

function App() {
  return (
    <Content />
  );
}

export default App;
