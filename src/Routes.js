import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Main/Main";

function Routes() {
  return(
    <Router>
      <Switch>
        <Route exact="/" component={Main}/>
      </Switch>
    </Router>
  )
}

export default Routes;