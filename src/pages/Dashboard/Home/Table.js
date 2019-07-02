import React from 'react';
import {
  Table as MUITable,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  makeStyles,
  Fab
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3),
    marginLeft: 'auto'
  },
  fabIcon: {
    marginRight: theme.spacing(1)
  }
}));

const Table = ({ rows }) => (
  <>
    <Typography component="h2" variant="h6" color="primary" gutterBottom>
      Recent Orders
    </Typography>

    <MUITable size="small">
      <TableHead>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Ship To</TableCell>
          <TableCell>Payment Method</TableCell>
          <TableCell align="right">Sale Amount</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <TableRow key={row.id}>
            <TableCell>{row.date}</TableCell>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.shipTo}</TableCell>
            <TableCell>{row.paymentMethod}</TableCell>
            <TableCell align="right">{row.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </MUITable>

    <Link className={useStyles().seeMore} to="/dashboard/form">
      <Fab size="small" color="primary" variant="extended">
        <AddIcon className={useStyles().fabIcon} />
        Add new order
      </Fab>
    </Link>
  </>
);

export default Table;
