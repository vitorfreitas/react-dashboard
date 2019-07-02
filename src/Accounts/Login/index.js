import React, { useState } from 'react';
import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Typography,
  Container
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './styles';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles();

  const loginToAccount = e => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Entrar
        </Typography>

        <form className={classes.form} onSubmit={loginToAccount} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            onChange={ev => setEmail(ev.target.value)}
            label="Endereço de email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={ev => setPassword(ev.target.value)}
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Permanecer logado"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Entrar
          </Button>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Esqueceu a senha?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Login;
