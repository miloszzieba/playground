import React from 'react';
import { Switch } from "react-router-dom";
import './App.css';
import Header from './common/menu/Header';
import RouteWithSubRoutes from './common/routing/RouteWithSubRoutes';

import routes from "./routeConfig";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
      {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
      </Switch>
    </div>
  );
}

export default App;
