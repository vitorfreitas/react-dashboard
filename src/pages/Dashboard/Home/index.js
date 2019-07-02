import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import clsx from 'clsx';
import Sidebar from '../../../components/Sidebar';
import useStyles from '../../../components/Sidebar/styles';
import Chart from './Chart';
import Table from './Table';

const tableRows = [
  {
    id: 0,
    date: '21 abr, 2019',
    name: 'Vitor Lima',
    shipTo: 'London',
    paymentMethod: 'VISA',
    amount: 312.32
  }
];

function createData(time, amount) {
  return { time, amount };
}

const chartsData = [
  createData('00:00', 0),
  createData('03:00', 300),
  createData('06:00', 600),
  createData('09:00', 800),
  createData('12:00', 1500),
  createData('15:00', 2000),
  createData('18:00', 2400),
  createData('21:00', 2400),
  createData('24:00', undefined)
];

const Home = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <>
      <Grid item xs={12} md={8} lg={6}>
        <Paper className={fixedHeightPaper}>
          <Chart data={chartsData} />
        </Paper>
      </Grid>

      <Grid item xs={12} md={8} lg={6}>
        <Paper className={fixedHeightPaper}>
          <Chart data={chartsData} />
        </Paper>
      </Grid>

      <Grid item xs>
        <Paper className={classes.paper}>
          <Table rows={tableRows} />
        </Paper>
      </Grid>
    </>
  );
};

export default Home;
