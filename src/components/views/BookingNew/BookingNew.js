import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import styles from './BookingNew.module.scss';

const BookingNew = () => (

  <Container component='main' maxWidth='xs'>
    <CssBaseline />
    <Paper className={styles.paper}>
      <p className={styles.title}>Add new booking</p>
      <form className={styles.datepicker} noValidate>
        <TextField
          id='datetime-local'
          label='Choose date'
          type='datetime-local'
          defaultValue= '2021-01-29T14:30'
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
      <div className={styles.checkbox}>
        <p className={styles.subtitle}>Choose table:</p>
        <FormControlLabel control={<Checkbox color='primary' name='table1' />} label='Table 1' />
        <FormControlLabel control={<Checkbox color='primary' name='table2' />} label='Table 2' />
        <FormControlLabel control={<Checkbox color='primary' name='table3' />} label='Table 3' />
      </div>
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        id='firstName'
        label='First Name'
        name='firstName'
        type='text'
      />
      <TextField
        variant='outlined'
        margin='normal'
        fullWidth
        id='lastName'
        label='Last Name'
        name='lastName'
        type='text'
      />
      <TextField
        variant='outlined'
        margin='normal'
        required
        fullWidth
        id='tel'
        label='Tel'
        name='tel'
        type='tel'
      />
      <TextField
        variant='outlined'
        margin='normal'
        fullWidth
        id='email'
        label='Email'
        name='email'
        type='email'
      />
      <div className={styles.button}>
        <Button
          variant='contained'
          color='primary'
          size='large'
        >
          Save new booking
        </Button>
      </div>

    </Paper>
  </Container>


  // <div className={styles.component}>
  //   <h2>New booking of table view</h2>
  // </div>

);

export default BookingNew;
