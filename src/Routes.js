import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import side1 from "./Main/side1";
import Info from "./Main/Info";

function Routes() {
  return(
    <Router>
      <Switch>
        <Route exact="/" path="/" component={side1} />
        <Route exact="/info" path="/info" component={Info} />
      </Switch>
    </Router>
  )
}

export default Routes;