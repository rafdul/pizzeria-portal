import React from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

import styles from './Login.module.scss';

const Login = () => (

  <Grid container component='div' className={styles.component}>
    <CssBaseline />
    <Grid item xs={false} sm={4} md={7} className={styles.image} />
    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
      <div className={styles.paper}>
        <Avatar className={styles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form className={styles.form} noValidate>
          <TextField variant='outlined' margin='normal' required fullWidth id='email' label='Email Address' name='email' autoComplete='email' autoFocus />
          <TextField variant='outlined' margin='normal' required fullWidth id='password' label='Password' name='password' atype='password' autoComplete='current-password' />
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label='Remember me' />
          <Button type='submit' fullWidth variant='contained' color='primary' className={styles.submit}>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='#'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href='#'>
                {`Don't have an account? Sign Up`}
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Typography align='center' color='textSecondary' variant='body2'>
              {'Copyright © 2021'}
            </Typography>
          </Box>
        </form>
      </div>
    </Grid>
  </Grid>

  // <div className={styles.component}>
  //   <h2>Login view</h2>
  // </div>

);

export default Login;
