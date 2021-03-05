import React from 'react';
import Header from './common/menu/Header';
import './App.css';
import { Switch } from 'react-router-dom';
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