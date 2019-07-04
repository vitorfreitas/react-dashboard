import React from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from '@material-ui/core';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import TableIcon from '@material-ui/icons/TableChart';
import AboutIcon from '@material-ui/icons/Help';
import LogoutIcon from '@material-ui/icons/ExitToApp';
import { signOut } from '../../redux/actions/user';

const linkStyles = {
  textDecoration: 'none',
  color: '#242424'
};

export const MainListItems = () => (
  <div>
    <Link to="/dashboard" style={linkStyles}>
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>

    <Link to="/dashboard/list" style={linkStyles}>
      <ListItem button>
        <ListItemIcon>
          <TableIcon />
        </ListItemIcon>
        <ListItemText primary="Table List" />
      </ListItem>
    </Link>

    <Link to="/dashboard/form" style={linkStyles}>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Form" />
      </ListItem>
    </Link>
  </div>
);

const SecondaryListItems = ({ signOut, history }) => {
  const signOutAndLeaveDashboard = () => {
    signOut();
    history.replace('/');
    localStorage.removeItem('token');
  };

  return (
    <div>
      <ListSubheader inset>Options</ListSubheader>

      <Link to="/dashboard/feedbacks" style={linkStyles}>
        <ListItem button>
          <ListItemIcon>
            <AboutIcon />
          </ListItemIcon>
          <ListItemText primary="Feedbacks" />
        </ListItem>
      </Link>

      <ListItem button onClick={signOutAndLeaveDashboard}>
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </div>
  );
};

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = {
  signOut
};

const SecondaryListItemsRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SecondaryListItems));

const MainListItemsRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainListItems);

export { MainListItemsRedux, SecondaryListItemsRedux };
