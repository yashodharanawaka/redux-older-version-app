import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import HomePage from "./Pages/HomePage";
import DramaListPage from "./Pages/DramaListPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/dramas" component={DramaListPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
