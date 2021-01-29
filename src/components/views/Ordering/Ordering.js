import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Ordering.module.scss';

const Ordering = ({orderId = '123abc'}) => (

  <div className={styles.component}>
    <h2>Ordering view</h2>
    <div>
      <Link to={`${process.env.PUBLIC_URL}/ordering/new`} className={styles.link}>Order new</Link>
      <Link to={`${process.env.PUBLIC_URL}/ordering/order/${orderId}`} className={styles.link}>Order {orderId}</Link>
    </div>
  </div>

);

Ordering.propTypes = {
  orderId: PropTypes.string,
};

export default Ordering;
