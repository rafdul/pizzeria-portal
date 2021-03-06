import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './PageNav.module.scss';
import Button from '@material-ui/core/Button';


const PageNav = () => (
  <nav className={styles.component}>
    <Button component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active' className={styles.link}>Home</Button>
    <Button component={NavLink} to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active' className={styles.link}>Tables</Button>
    <Button component={NavLink} to={`${process.env.PUBLIC_URL}/ordering`} activeClassName='active' className={styles.link}>Ordering</Button>
    <Button component={NavLink} to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active' className={styles.link}>Kitchen</Button>
    <Button component={NavLink} to={`${process.env.PUBLIC_URL}/login`} activeClassName='active' className={styles.link}>Login</Button>
  </nav>
);

export default PageNav;
