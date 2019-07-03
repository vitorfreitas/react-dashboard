import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { Provider } from 'react-redux';
import routes from './routes';
import configureStore from './redux/store';
import 'moment/locale/pt-br';

function App() {
  const token = localStorage.getItem('token');

  return (
    <Provider store={configureStore()}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <HashRouter>
          <CssBaseline />
          <Switch>
            {routes.map(route => (
              <Route key={route.path} {...route} />
            ))}

            {/* TODO: Save token on Redux */}
            <Redirect from="/" to={token ? '/dashboard' : '/login'} />
          </Switch>
        </HashRouter>
      </MuiPickersUtilsProvider>
    </Provider>
  );
}

export default App;
