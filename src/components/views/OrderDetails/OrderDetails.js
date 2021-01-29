import React from 'react';
import styles from './OrderDetails.module.scss';
import PropTypes from 'prop-types';


const OrderDetails = (props) => (

  <div className={styles.component}>
    <h2>Order Details</h2>
    <p>{props.match.params.id}</p>
  </div>

);

OrderDetails.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.string,
};

export default OrderDetails;
