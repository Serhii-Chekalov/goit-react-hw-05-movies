import React from "react";
import { Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <Switch>
        <Navigation />
        <Route path="/" exact></Route>
        <Route path="/movies"></Route>
      </Switch>
    </div>
  );
}

export default App;
