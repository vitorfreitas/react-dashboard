import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { connect } from 'react-redux';
import routes from './routes';
import 'moment/locale/pt-br';
import { setUserToken } from './redux/actions/user';

function App({ setUserToken }) {
  const [reduxTokenUpdated, setUpdateState] = React.useState(false);
  const token = localStorage.getItem('token');

  // Update token on redux preventing the view to update
  // multiple times, which causes a maximum call stack error.
  if (!reduxTokenUpdated && token) {
    setUserToken(token);
    setUpdateState(true);
  }

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <HashRouter>
        <CssBaseline />
        <Switch>
          {routes.map(route => (
            <Route key={route.path} {...route} />
          ))}

          <Redirect from="/" to={token ? '/dashboard' : '/login'} />
        </Switch>
      </HashRouter>
    </MuiPickersUtilsProvider>
  );
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = {
  setUserToken
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
