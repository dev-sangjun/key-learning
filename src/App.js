import "./styles/App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home as HomeSimple } from "./pages/Simple";
import { Home as HomeComplex } from "./pages/Complex";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/key-learning/complex">
            <HomeComplex />
          </Route>
          <Route path="/">
            <HomeSimple />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
