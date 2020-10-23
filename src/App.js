import React from "react";
import { Switch, Route } from "react-router-dom";
import { map } from "lodash";

// routes
import routes from "./client/routes";

function App() {
  return (
    <Switch>
      {map(routes, (route, idx) => {
        return <Route {...route} key={idx} />;
      })}
    </Switch>
  );
}

export default App;
