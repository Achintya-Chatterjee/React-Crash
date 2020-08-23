import React from "react";
import logo from "./lg.png";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <img src={logo} width="100" height="100" />
        <h1 className="app-title">ToDoo App</h1>
        <div className="container">
          Add an Item....
          <br />
          <input type="text" className="input-text" placeholder="Write ToDoo" />
          <button className="add-btn">Add ToDoo</button>
          <div className="list">
            <ul>
              <li>
                <input type="checkbox" name="" id=" " />
                Record Youtube
                <button>Delete</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
