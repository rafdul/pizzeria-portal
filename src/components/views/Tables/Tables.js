import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import AddIcon from '@material-ui/icons/Add';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

import styles from './Tables.module.scss';

function createDataTables(number, time, table1, table2, table3, event){
  return {number, time, table1, table2, table3, event};
}

const rowsTables = [
  createDataTables(1, '12.00-12.29', 'b1aa', null, null, null),
  createDataTables(2, '12.30-12.59', null, 'b2aa', null, null),
  createDataTables(3, '13.00-13.29', null, 'b2bb', 'b3cc', 'e11'),
  createDataTables(4, '13.30-13.59', 'b1a2', null, null, 'e11'),
  createDataTables(5, '14.00-14.29', 'b1b2', null, null, 'e11'),
  createDataTables(6, '14.30-14.59', 'b133', null, null,null),
  createDataTables(7, '15.00-15.29', null, 'b2ac', null,null),
  createDataTables(8, '15.30-15.59', null, 'b2ad', 'b3cd',null),
  createDataTables(9, '16.00-16.29', null, null, 'b3ce',null),
  createDataTables(10, '16.30-16.59', 'b13a', null, null,null),
  createDataTables(11, '17.00-17.29', 'b1d3', null, null,null),
  createDataTables(12, '17.30-17.59', 'b13e', 'b2ae', null,null),
  createDataTables(13, '18.00-18.29', 'b1a4', null, null,null),
  createDataTables(14, '18.30-18.59', null, null, 'b3cf',null),
  createDataTables(15, '19.00-19.29', null, 'b2af', null, 'e12'),
  createDataTables(16, '19.30-19.59', 'b1b4', 'b2bc', 'b3dd', 'e12'),
  createDataTables(17, '20.00-20.29', null, null, null, 'e12'),
  createDataTables(18, '20.30-20.59', 'b1c4', null, null, 'e12'),
  createDataTables(19, '21.00-21.29', 'b1d4', 'b2cc', 'b3de',null),
  createDataTables(20, '21.30-21.59', 'b1e4', 'b2dc', 'b3df',null),
  createDataTables(21, '22.00-22.29', 'b1f4', null, null,null),
  createDataTables(22, '22.30-22.59', null, null, 'b3dg',null),
  createDataTables(23, '23.00-23.29', null, null, 'b3dh',null),
  createDataTables(24, '23.30-23.59', null, 'b2ec', null,null),
];

const addBooking = (table) => {
  if(table != null) {
    return (
      <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${table}`}>
        {table}
      </Button>
    );
  } else {
    return (
      <IconButton color='primary' component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`}>
        <AddCircleRoundedIcon />
      </IconButton>
    );
  }
};

const addEvent = (event) => {
  if(event != null) {
    return (
      <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/${event}`}>
        {event}
      </Button>
    );
  } else {
    return (
      <IconButton color='secondary' component={Link} to={`${process.env.PUBLIC_URL}/tables/events/new`}>
        <AddCircleOutlineIcon />
      </IconButton>
    );
  }
};


const Tables = () => (

  <Grid container component='div' className={styles.component} justify='space-between' spacing={2}>
    <CssBaseline />
    <Grid item xs={12} className={styles.box}>
      <Paper className={styles.paper} elevation={6}>
        <Grid container component='div' className={styles.component} >
          <Grid item xs={12} sm={7} className={styles.tableBox}>
            <form className={styles.datepicker} noValidate>
              <TextField
                id='datetime-local'
                label='Choose date'
                type='datetime-local'
                defaultValue= '2021-01-29T14:30'
                className={styles.textField}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </form>
          </Grid>
          <Grid item xs={12} sm={5} className={styles.tableBox}>
            <div className={styles.button}>
              <Button
                component={Link}
                to={`${process.env.PUBLIC_URL}/tables/booking/new`}
                variant="contained"
                color="primary"
                size="large"
                startIcon={<AddOutlinedIcon />}
                className={styles.buttonTable}
              >
                  Add new booking
              </Button>
            </div>
            <div className={styles.button}>
              <Button
                component={Link}
                to={`${process.env.PUBLIC_URL}/tables/events/new`}
                variant="outlined"
                color="secondary"
                size="large"
                startIcon={<AddIcon />}
                className={styles.buttonTable}
              >
                Add new event
              </Button>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Grid>

    <Grid item xs={12} className={styles.box}>
      <Paper className={styles.paper} elevation={6}>
        <p className={styles.title}>All orders</p>
        <TableContainer className={styles.containerBig}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Nr</TableCell>
                <TableCell>Time</TableCell>
                <TableCell>Table1</TableCell>
                <TableCell>Table2</TableCell>
                <TableCell>Table3</TableCell>
                <TableCell>Event</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsTables.map( row => (
                <TableRow key={row.number}>
                  <TableCell component='th' scope='row'>{row.number}</TableCell>
                  <TableCell component='td' scope='row'>{row.time}</TableCell>
                  <TableCell component='td' scope='row'>
                    {addBooking(row.table1)}
                    {/* {row.table1 && (
                      <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${row.table1}`}>
                        {row.table1}
                      </Button>
                    )} */}
                  </TableCell>
                  <TableCell component='td' scope='row'>
                    {addBooking(row.table2)}
                  </TableCell>
                  <TableCell component='td' scope='row'>
                    {addBooking(row.table3)}
                  </TableCell>
                  <TableCell component='td' scope='row'>
                    {addEvent(row.event)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Grid>
  </Grid>
);

// Tables.propTypes = {
//   bookingId: PropTypes.string,
//   eventId: PropTypes.string,
// };

export default Tables;
