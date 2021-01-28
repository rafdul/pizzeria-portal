import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Tables.module.scss';

const Tables = () => (

  <div className={styles.component}>
    <div>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`} className={styles.link}>Booking new</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/booking/23de`} className={styles.link}>Booking ID: 23de</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/new`} className={styles.link}>Event new</Link>
      <Link to={`${process.env.PUBLIC_URL}/tables/events/89zz`} className={styles.link}>Event ID: 89zz</Link>
    </div>
    <h2>Tables view</h2>
  </div>

);

export default Tables;
