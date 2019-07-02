import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import useStyles from './styles';

export default function NewOrderForm() {
  const classes = useStyles();

  const submitNewOrder = e => {
    e.preventDefault();
    console.log('submitted');
  };

  return (
    <React.Fragment>
      <Typography component="h2" variant="h6">
        New Order
      </Typography>

      <Typography color="textSecondary" variant="caption" gutterBottom>
        Create new orders by filling the form bellow
      </Typography>

      <form onSubmit={submitNewOrder}>
        <Grid container spacing={3}>
          <Grid style={{ position: 'relative' }} item xs={12} sm={6}>
            <KeyboardDatePicker
              format="DD/MM/YYYY"
              required
              name="date"
              label="Date"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField required name="fullName" label="Full name" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField required name="shipTp" label="Ship To" fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              name="paymentMethod"
              label="Payment method"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField name="amount" label="Sale amount" fullWidth />
          </Grid>
        </Grid>

        <Grid item xs={12} lg={2}>
          <Button
            className={classes.formSubmitButton}
            color="primary"
            variant="contained"
            fullWidth
          >
            Submit new order
          </Button>
        </Grid>
      </form>
    </React.Fragment>
  );
}
