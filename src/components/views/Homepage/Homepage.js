import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

import styles from './Homepage.module.scss';
import PropTypes from 'prop-types';

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
function createDataEvents(number, time, tables, id){
  return {number, time, tables, id};
}

const rowsEvents = [
  createDataEvents(1, '12.00-12.29', 'table1', 'e99'),
  createDataEvents(2, '13.30-14.59', 'table2', 'e88'),
  createDataEvents(3, '16.30-17.59', 'table3', 'e91'),
  createDataEvents(4, '17.30-18.29', 'table1', 'e75'),
  createDataEvents(5, '20.30-21.29', 'table2', 'e81'),
  createDataEvents(6, '21.00-21.29', 'table1', 'e66'),
  createDataEvents(7, '21.00-22.29', 'table3', 'e79'),
  createDataEvents(8, '21.30-22.29', 'table2', 'e58'),
];

/* do tabeli z rezerwacjami */
function createDataTables(number, time, table1, table2, table3){
  return {number, time, table1, table2, table3};
}

const rowsTables = [
  createDataTables(1, '12.00-12.29', 'b1aa', null, null),
  createDataTables(2, '12.30-12.59', null, 'b2aa', null),
  createDataTables(3, '13.00-13.29', null, 'b2bb', 'b3cc'),
  createDataTables(4, '13.30-13.59', 'b1a2', null, null),
  createDataTables(5, '14.00-14.29', 'b1b2', null, null),
  createDataTables(6, '14.30-14.59', 'b133', null, null),
  createDataTables(7, '15.00-15.29', null, 'b2ac', null),
  createDataTables(8, '15.30-15.59', null, 'b2ad', 'b3cd'),
  createDataTables(9, '16.00-16.29', null, null, 'b3ce'),
  createDataTables(10, '16.30-16.59', 'b13a', null, null),
  createDataTables(11, '17.00-17.29', 'b1d3', null, null),
  createDataTables(12, '17.30-17.59', 'b13e', 'b2ae', null),
  createDataTables(13, '18.00-18.29', 'b1a4', null, null),
  createDataTables(14, '18.30-18.59', null, null, 'b3cf'),
  createDataTables(15, '19.00-19.29', null, 'b2af', null),
  createDataTables(16, '19.30-19.59', 'b1b4', 'b2bc', 'b3dd'),
  createDataTables(17, '20.00-20.29', null, null, null),
  createDataTables(18, '20.30-20.59', 'b1c4', null, null),
  createDataTables(19, '21.00-21.29', 'b1d4', 'b2cc', 'b3de'),
  createDataTables(20, '21.30-21.59', 'b1e4', 'b2dc', 'b3df'),
  createDataTables(21, '22.00-22.29', 'b1f4', null, null),
  createDataTables(22, '22.30-22.59', null, null, 'b3dg'),
  createDataTables(23, '23.00-23.29', null, null, 'b3dh'),
  createDataTables(24, '23.30-23.59', null, 'b2ec', null),
];

/* niezbędno do paginacji w tabeli z rezerwacjami*/
function TablePaginationActions(props) {
  // const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={styles.flexShrink}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};


const Homepage = () => {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
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
          <Paper className={styles.paper} elevation={6}>
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
          <Paper className={styles.paper} elevation={6}>
            <p className={styles.title}>All events</p>
            <TableContainer className={styles.container}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell>Number</TableCell>
                    <TableCell>time</TableCell>
                    <TableCell>tables</TableCell>
                    <TableCell>id</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowsEvents.map( row => (
                    <TableRow key={row.number}>
                      <TableCell component='th' scope='row'>{row.number}</TableCell>
                      <TableCell component='td' scope='row'>{row.time}</TableCell>
                      <TableCell component='td' scope='row'>{row.tables}</TableCell>
                      <TableCell component='td' scope='row'>
                        {row.id && (
                          <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/${row.id}`}>
                            {row.id}
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>

        <Grid item xs={12} className={styles.box}>
          <Paper className={styles.paper} elevation={6}>
            <p className={styles.title}>All bookings</p>
            <TableContainer className={styles.booking}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell>Number</TableCell>
                    <TableCell>time</TableCell>
                    <TableCell>table1</TableCell>
                    <TableCell>table2</TableCell>
                    <TableCell>table3</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {/* {rowsTables.map( row => ( */}
                  {(rowsPerPage > 0
                    ? rowsTables.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    : rowsTables
                  ).map( (row) => (
                    <TableRow key={row.number}>
                      <TableCell component='th' scope='row'>{row.number}</TableCell>
                      <TableCell component='td' scope='row'>{row.time}</TableCell>
                      <TableCell component='td' scope='row'>
                        {row.table1 && (
                          <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${row.table1}`}>
                            {row.table1}
                          </Button>
                        )}
                      </TableCell>
                      <TableCell component='td' scope='row'>
                        {row.table2 && (
                          <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${row.table2}`}>
                            {row.table2}
                          </Button>
                        )}
                      </TableCell>
                      <TableCell component='td' scope='row'>
                        {row.table3 && (
                          <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/${row.table3}`}>
                            {row.table3}
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      rowsPerPageOptions={[5, 10, 20, 24]}
                      count={rowsTables.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      SelectProps={{
                        inputProps: { 'aria-label': 'rows per page' },
                        native: true,
                      }}
                      colSpan={5}
                      onChangePage={handleChangePage}
                      onChangeRowsPerPage={handleChangeRowsPerPage}
                      ActionsComponent={TablePaginationActions}
                      className={styles.borderFooter}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </TableContainer>
            {/* <div className={styles.pagination}> */}


            {/* <TableFooter component='div' className={styles.tableFooter}>
                <TableRow>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 20, 24]}
                    count={rowsTables.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      inputProps: { 'aria-label': 'rows per page' },
                      native: true,
                    }}
                    colSpan={3}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    className={styles.borderFooter}
                  />
                </TableRow>
              </TableFooter> */}
            {/* </div> */}
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Homepage;
