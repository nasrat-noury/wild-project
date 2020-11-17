import React from "react";
import { Switch, Route } from "react-router-dom";
import Games from "./components/Games";
import GameDetails from "./components/GameDetails";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/games" exact component={Games} />
        <Route path="/games/:id" component={GameDetails} />
      </Switch>
    </div>
  );
}

export default App;
