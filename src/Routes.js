import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Counter from "./Main/Counter";

function Routes() {
  return(
    <Router>
      <Switch>
        <Route exact="/" component={Counter} />
      </Switch>
    </Router>
  )
}

export default Routes;