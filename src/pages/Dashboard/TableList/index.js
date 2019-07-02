import React from 'react';
import { Paper, Grid, Typography, Input, Fab } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import Table from './Table';
import useStyles from './styles';

const tableRows = [
  {
    id: 0,
    date: '21 abr, 2019',
    name: 'Vitor Lima',
    shipTo: 'London',
    paymentMethod: 'VISA',
    amount: 312.32
  },
  {
    id: 1,
    date: '12 jun, 2019',
    name: 'Isaac Lima',
    shipTo: 'Amazonas',
    paymentMethod: 'MASTER CARD',
    amount: 40.1
  },
  {
    id: 2,
    date: '24 mar, 2019',
    name: 'Maria Lima',
    shipTo: 'Paris',
    paymentMethod: 'VISA',
    amount: 132.99
  },
  {
    id: 3,
    date: '30 jul, 2019',
    name: 'Vitor Lima',
    shipTo: 'London',
    paymentMethod: 'VISA',
    amount: 10.23
  }
];

const TableList = () => {
  const classes = useStyles();

  return (
    <>
      <Grid xs={12}>
        <Paper className={classes.paper}>
          <div className={classes.paperTop}>
            <Typography
              component="h2"
              variant="h6"
              color="primary"
              gutterBottom
            >
              All Orders
            </Typography>

            <Input placeholder="Search input..." />
            <SearchIcon className={classes.searchIcon} />
          </div>

          <Table data={tableRows} />
        </Paper>
      </Grid>

      <Link to="/dashboard/form">
        <Fab
          className={classes.addNewItemFab}
          variant="extended"
          color="primary"
        >
          <AddIcon />
          Create
        </Fab>
      </Link>
    </>
  );
};

export default TableList;
