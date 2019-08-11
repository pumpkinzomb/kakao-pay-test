import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Promotion from "./components/Promotion";
import JoinEvent from "./components/JoinEvent";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Promotion} />
          <Route path="/joinevent" component={JoinEvent} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
