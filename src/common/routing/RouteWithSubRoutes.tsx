import React  from 'react';
import { Route } from "react-router-dom";
import IRoute from "./IRoute";

function RouteWithSubRoutes(route:IRoute) {
    return (
      <Route
        exact={route.exact}
        path={route.path}
        render={props => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        )}
      />
    );
  }

  export default RouteWithSubRoutes;