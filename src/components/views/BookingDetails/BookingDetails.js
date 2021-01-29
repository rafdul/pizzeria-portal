import React from 'react';
import styles from './BookingDetails.module.scss';
import PropTypes from 'prop-types';


const BookingDetails = (props) => (

  <div className={styles.component}>
    <h2>Booking Details</h2>
    <p>{props.match.params.id}</p>
  </div>

);

BookingDetails.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.string,
};

export default BookingDetails;
