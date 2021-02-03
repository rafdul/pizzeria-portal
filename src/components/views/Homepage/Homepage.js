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
import { DataGrid } from '@material-ui/data-grid';

import styles from './Homepage.module.scss';

const dateCurrent = new Date().toLocaleDateString('pl-Pl');
const timeCurrent = `${new Date().getUTCHours()}:${new Date().getMinutes()}`;

/* do tabeli z zamówieniami */
function createDataOrders(name, takeAway, local){
  return {name, takeAway, local};
}

const rowsOrders = [
  createDataOrders('open', 6, 4),
  createDataOrders('done', 44, 59),
  createDataOrders('cancelled', 7, 0),
];

/* do tabeli z eventami */
function createDataEvents(number, time, tables){
  return {number, time, tables};
}

const rowsEvents = [
  createDataEvents(1, '12.00-12.29', 'table1'),
  createDataEvents(2, '12.30-12.59', ''),
  createDataEvents(3, '13.00-13.29', ''),
  createDataEvents(4, '13.30-13.59', 'table2'),
  createDataEvents(5, '14.00-14.29', 'table2'),
  createDataEvents(6, '14.30-14.59', 'table2'),
  createDataEvents(7, '15.00-15.29', ''),
  createDataEvents(8, '15.30-15.59', ''),
  createDataEvents(9, '16.00-16.29', ''),
  createDataEvents(10, '16.30-16.59', 'table3'),
  createDataEvents(11, '17.00-17.29', 'table3'),
  createDataEvents(12, '17.30-17.59', 'table3, table1'),
  createDataEvents(13, '18.00-18.29', 'table1'),
  createDataEvents(14, '18.30-18.59', ''),
  createDataEvents(15, '19.00-19.29', ''),
  createDataEvents(16, '19.30-19.59', ''),
  createDataEvents(17, '20.00-20.29', ''),
  createDataEvents(18, '20.30-20.59', 'table2'),
  createDataEvents(19, '21.00-21.29', 'table1, table2, table3'),
  createDataEvents(20, '21.30-21.59', 'table2, table3'),
  createDataEvents(21, '22.00-22.29', 'table3'),
  createDataEvents(22, '22.30-22.59', ''),
  createDataEvents(23, '23.00-23.29', ''),
  createDataEvents(24, '23.30-23.59', ''),
];

/* do tabeli z rezerwacjami */
const columnsBookings = [
  {field: 'id', headerName: 'Number', width: 120},
  {field: 'time', headerName: 'Time', type: 'string', width: 200},
  {field: 'table1', headerName: 'Table_1', width: 120},
  {field: 'table2', headerName: 'Table_2', width: 120},
  {field: 'table3', headerName: 'Table_3', width: 120},
];

const rowsBookings = [
  {id: 1, time: '12.00-12.29', table1: '-', table2: '-', table3: '+' },
  {id: 2, time: '12.30-12.59', table1: '+', table2: '-', table3: '+' },
  {id: 3, time: '13.00-13.29', table1: '+', table2: '+', table3: '+' },
  {id: 4, time: '13.30-13.59', table1: '+', table2: '-', table3: '+' },
  {id: 5, time: '14.00-14.29', table1: '-', table2: '-', table3: '-' },
  {id: 6, time: '14.30-14.59', table1: '-', table2: '-', table3: '-' },
  {id: 7, time: '15.00-15.29', table1: '-', table2: '+', table3: '-' },
  {id: 8, time: '15.30-15.59', table1: '+', table2: '+', table3: '-' },
  {id: 9, time: '16.00-16.29', table1: '-', table2: '-', table3: '-' },
  {id: 10, time: '16.30-16.59', table1: '+', table2: '+', table3: '+' },
  {id: 11, time: '17.00-17.29', table1: '-', table2: '+', table3: '-' },
  {id: 12, time: '17.30-17.59', table1: '+', table2: '-', table3: '-' },
  {id: 13, time: '18.00-18.29', table1: '+', table2: '+', table3: '-' },
  {id: 14, time: '18.30-18.59', table1: '-', table2: '-', table3: '-' },
  {id: 15, time: '19.00-19.29', table1: '+', table2: '+', table3: '+' },
  {id: 16, time: '19.30-19.59', table1: '+', table2: '-', table3: '+' },
  {id: 17, time: '20.00-20.29', table1: '+', table2: '+', table3: '+' },
  {id: 18, time: '20.30-20.59', table1: '+', table2: '+', table3: '+' },
  {id: 19, time: '21.00-21.29', table1: '-', table2: '+', table3: '+' },
  {id: 20, time: '21.30-21.59', table1: '-', table2: '-', table3: '+' },
  {id: 21, time: '22.00-22.29', table1: '+', table2: '-', table3: '-' },
  {id: 22, time: '22.30-22.59', table1: '+', table2: '-', table3: '+' },
  {id: 23, time: '23.00-23.29', table1: '-', table2: '-', table3: '-' },
  {id: 24, time: '23.30-23.59', table1: '-', table2: '+', table3: '-' },
];

const Homepage = () => (

  <Grid container component='div' className={styles.component} justify='center'>
    <CssBaseline />
    <Grid item >
      <Typography component='h3' variant='h4' align='center'>
        Pizzeria Dashboard
      </Typography>
      <Typography component='h5' variant='h5' align='center' color='textSecondary'>
        <span>{dateCurrent}</span><span className={styles.time} >{timeCurrent}</span>
      </Typography>
    </Grid>
    <Grid container component='div' justify='space-between' spacing={2}>
      <Grid item xs={12} sm={6}  className={styles.box}>
        <Paper className={styles.paper}>
          <p className={styles.title}>All orders</p>
          <TableContainer className={styles.container}>
            <Table stickyHeader>
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
                    <TableCell component='td' scope='row'>{row.takeAway}</TableCell>
                    <TableCell component='td' scope='row'>{row.local}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}  className={styles.box}>
        <Paper className={styles.paper}>
          <p className={styles.title}>All events</p>
          <TableContainer className={styles.container}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Number</TableCell>
                  <TableCell>time</TableCell>
                  <TableCell>tables</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rowsEvents.map( row => (
                  <TableRow key={row.number}>
                    <TableCell component='th' scope='row'>{row.number}</TableCell>
                    <TableCell component='td' scope='row'>{row.time}</TableCell>
                    <TableCell component='td' scope='row'>{row.tables}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
      <Grid item xs={12}  className={styles.box}>
        <Paper className={styles.paper} align='center'>
          <p className={styles.title}>All bookings</p>
          <div className={styles.booking}>
            <DataGrid
              rows={rowsBookings}
              columns={columnsBookings}
              pageSize={10}
              rowsPerPageOptions={[5, 10, 20, 24]}
              disableColumnMenu
            />
          </div>
        </Paper>
      </Grid>
    </Grid>


  </Grid>

  // <div className={styles.component}>
  //   <h2>Dashboard view</h2>
  // </div>

);

export default Homepage;
