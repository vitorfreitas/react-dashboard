import React from 'react';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import TableIcon from '@material-ui/icons/TableChart';
import AboutIcon from '@material-ui/icons/Help';

const linkStyles = {
  textDecoration: 'none',
  color: '#242424'
};

export const mainListItems = (
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

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Options</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AboutIcon />
      </ListItemIcon>
      <ListItemText primary="About" />
    </ListItem>
  </div>
);
