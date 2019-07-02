import React from 'react';
import NewOrderForm from './NewOrderForm';
import useStyles from '../../../components/Sidebar/styles';
import { Paper } from '@material-ui/core';

const Form = () => (
  <Paper className={useStyles().paper}>
    <NewOrderForm />
  </Paper>
);

export default Form;
