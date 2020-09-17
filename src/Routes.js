import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./Main/Nav";

function Routes() {
  return(
    <Router>
      <Switch>
        <Route exact="/" component={Nav} />
      </Switch>
    </Router>
  )
}

export default Routes;