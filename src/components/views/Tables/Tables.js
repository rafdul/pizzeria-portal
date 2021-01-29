import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Tables.module.scss';

const Tables = ({bookingId = 'BOK45er', eventId ='EV89zz'}) => (

  <div className={styles.component}>
    <h2>Tables view</h2>
    <div>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`} className={styles.link}>Booking New</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/${bookingId}`} className={styles.link}>Booking: {bookingId}</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/new`} className={styles.link}>Event new</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/${eventId}`} className={styles.link}>Event: {eventId}</Link>
    </div>
  </div>

);

Tables.propTypes = {
  bookingId: PropTypes.string,
  eventId: PropTypes.string,
};

export default Tables;
