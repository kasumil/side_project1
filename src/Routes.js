import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import side1 from "./side1";

function Routes() {
  return(
    <Router>
      <Switch>
        <Route exact="/" component={side1} />
      </Switch>
    </Router>
  )
}

export default Routes;