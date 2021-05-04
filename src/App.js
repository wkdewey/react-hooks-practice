import logo from "./logo.svg";
import "./App.css";
import Example from "./Example";
import ExampleWithManyStates from "./ExampleWithManyStates";
import FriendStatusWithCounter from "./FriendStatus";
import FriendListItem from "./FriendListItem";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Example />
      <ExampleWithManyStates />
      <FriendStatusWithCounter friend={{ id: 123 }} />
      <FriendListItem friend={{ id: 500 }} />
    </div>
  );
}

export default App;
