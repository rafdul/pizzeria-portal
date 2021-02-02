import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';


import styles from './Tables.module.scss';

const Tables = ({bookingId = 'BOK45er', eventId ='EV89zz'}) => (

  <Grid container component='div' className={styles.component} justify='space-between' spacing={2}>
    <CssBaseline />
    <Grid item xs={12} className={styles.box}>
      <Paper>
        <Grid container component='div' className={styles.component} >
          <Grid item xs={12} sm={7} className={styles.box}>
            <form className={styles.datepicker} noValidate>
              <TextField
                id='datetime-local'
                label='Choose date'
                type='datetime-local'
                defaultValue= '2021-01-29T14:30'
                className={styles.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </Grid>
          <Grid item xs={12} sm={5} className={styles.box}>
            nowe pozycje
          </Grid>
        </Grid>
      </Paper>
    </Grid>



    <Grid item xs={12} className={styles.box}>
      <Paper className={styles.paper}>
        tabela
      </Paper>
    </Grid>




    <div className={styles.component}>
      <h2>Tables view</h2>
      <div>
        <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`} className={styles.link}>Booking New</Link>
        <Link to={`${process.env.PUBLIC_URL}/tables/booking/${bookingId}`} className={styles.link}>Booking: {bookingId}</Link>
        <Link to={`${process.env.PUBLIC_URL}/tables/events/new`} className={styles.link}>Event new</Link>
        <Link to={`${process.env.PUBLIC_URL}/tables/events/${eventId}`} className={styles.link}>Event: {eventId}</Link>
      </div>
    </div>

  </Grid>
);

Tables.propTypes = {
  bookingId: PropTypes.string,
  eventId: PropTypes.string,
};

export default Tables;
