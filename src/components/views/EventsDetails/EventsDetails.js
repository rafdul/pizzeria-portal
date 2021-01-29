import React from 'react';
import styles from './EventsDetails.module.scss';
import PropTypes from 'prop-types';


const EventsDetails = (props) => (

  <div className={styles.component}>
    <h2>Events Details</h2>
    <p>{props.match.params.id}</p>
  </div>

);

EventsDetails.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.string,
};

export default EventsDetails;
