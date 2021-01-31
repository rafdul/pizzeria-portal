import React from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import styles from './Homepage.module.scss';

const dateCurrent = new Date().toLocaleDateString('pl-Pl');
const timeCurrent = `${new Date().getUTCHours()}:${new Date().getMinutes()}`;

function createDataOrders(name, takeAway, local){
  return {name, takeAway, local};
}

const rowsOrders = [
  createDataOrders('open', 6, 4),
  createDataOrders('done', 44, 59),
  createDataOrders('cancelled', 7, 0),
];

const Homepage = () => (

  <Grid container component='div' className={styles.component} justify='center'>
    <CssBaseline />
    <Grid item >
      <Typography component='h3' variant='h4' align='center'>
        Pizzeria Dashboard
        <Typography component='h5' variant='h5' color='textSecondary'>
          <span>{dateCurrent}</span><span className={styles.time} >{timeCurrent}</span>
        </Typography>
      </Typography>
    </Grid>
    <Grid container component='div' justify='space-between' spacing={2}>
      <Grid item xs={12} sm={6}  className={styles.box}>
        <TableContainer component={Paper}>
          <Typography component='h5' variant='h5' align='center'>
            All orders
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Orders:</TableCell>
                <TableCell>take-a-way</TableCell>
                <TableCell>local</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsOrders.map( row => (
                <TableRow key={row.name}>
                  <TableCell component='th' scope='row'>{row.name}</TableCell>
                  <TableCell component='th' scope='row'>{row.takeAway}</TableCell>
                  <TableCell component='th' scope='row'>{row.local}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Grid item xs={12} sm={6}  className={styles.box}>
        <Paper>
          Events
        </Paper>
      </Grid>
      <Grid item xs={12}  className={styles.box}>
        <Paper>
          Bookings
        </Paper>
      </Grid>
    </Grid>


  </Grid>

  // <div className={styles.component}>
  //   <h2>Dashboard view</h2>
  // </div>

);

export default Homepage;
