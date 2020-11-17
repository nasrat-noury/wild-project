import React from "react";
import { Switch, Route } from "react-router-dom";
import Games from "./components/Games";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/games" exact component={Games} />
      </Switch>
    </div>
  );
}

export default App;
