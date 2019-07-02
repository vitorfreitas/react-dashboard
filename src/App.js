import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import routes from './routes';

function App() {
  return (
    <HashRouter>
      <CssBaseline />
      <Switch>
        {routes.map(route => (
          <Route {...route} />
        ))}
      </Switch>
    </HashRouter>
  );
}

export default App;
