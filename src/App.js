import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import routes from './routes';
import 'moment/locale/pt-br';

function App() {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <HashRouter>
        <CssBaseline />
        <Switch>
          {routes.map(route => (
            <Route key={route.path} {...route} />
          ))}
        </Switch>
      </HashRouter>
    </MuiPickersUtilsProvider>
  );
}

export default App;
