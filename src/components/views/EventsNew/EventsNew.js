import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import styles from './EventsNew.module.scss';

const EventsNew = () => (

  <Container component='main' maxWidth='xs'>
    <CssBaseline />
    <Paper className={styles.paper}>
      <p className={styles.title}>Add new event</p>
      <div className={styles.dateContainer}>
        <form className={styles.datepicker} noValidate>
          <TextField
            id='date-start-event'
            label='Date start event'
            type='date'
            defaultValue= '2021-01-29'
            InputLabelProps={{
              shrink: true,
            }}
            className={styles.date}
          />
        </form>
        <form className={styles.datepicker} noValidate>
          <TextField
            id='time-start-event'
            label='Time from'
            type='time'
            defaultValue='12:30'
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 1800, // 30 min
            }}
            className={styles.date}
          />
          <TextField
            id='time-end-event'
            label='Time to'
            type='time'
            defaultValue='14:30'
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 1800, // 30 min
            }}
            className={styles.date}
          />
        </form>
        <form className={styles.datepicker} noValidate>
          <TextField
            id='date-end-event'
            label='Date end event'
            type='date'
            defaultValue= '2021-01-29'
            InputLabelProps={{
              shrink: true,
            }}
            className={styles.date}
          />
        </form>
        <div className={styles.selectBox}>
          <FormControl className={styles.select}>
            <InputLabel id="event-period">Period</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              // value={period}
              // onChange={handleChange}
            >
              <MenuItem value={1}>Every day</MenuItem>
              <MenuItem value={2}>Every week</MenuItem>
              <MenuItem value={3}>Every month</MenuItem>
              <MenuItem value={4}>None</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className={styles.checkbox}>
        <p className={styles.subtitle}>Choose table:</p>
        <FormControlLabel control={<Checkbox color='secondary' name='table1' />} label='Table 1' />
        <FormControlLabel control={<Checkbox color='secondary' name='table2' />} label='Table 2' />
        <FormControlLabel control={<Checkbox color='secondary' name='table3' />} label='Table 3' />
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
          color='secondary'
          size='large'
        >
          Save new event
        </Button>
      </div>

    </Paper>
  </Container>

  // <div className={styles.component}>
  //   <h2>New event</h2>
  // </div>

);

export default EventsNew;
