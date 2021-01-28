import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Ordering.module.scss';

const Ordering = () => (

  <div className={styles.component}>
    <div>
      <Link to={`${process.env.PUBLIC_URL}/ordering/new`} className={styles.link}>Order new</Link>
      <Link to={`${process.env.PUBLIC_URL}/ordering/order/123abc`} className={styles.link}>Order 123abc</Link>
    </div>
    <h2>Ordering view</h2>
  </div>

);

export default Ordering;
