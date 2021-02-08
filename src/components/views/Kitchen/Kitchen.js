import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './Kitchen.module.scss';


// const columnsOrders = [
//   {field: 'id', headerName: 'ID', width: 80},
//   {field: 'table', headerName: 'Table / Take-a-way', width: 160},
//   {field: 'products', headerName: 'Products', width: 320},
// ];

// const rowsOrders = [
//   {id: 1, table: 'table2', orderID: 123, products: 'pizza, coffee, cake'},
//   {id: 2, table: 'table1', orderID: 127, products: '2 x pizza, 2 x coffee, water'},
//   {id: 3, table: 'table1', orderID: 143, products: 'pizza, cola'},
//   {id: 4, table: 'table3', orderID: 132, products: 'pizza, water, cake'},
//   {id: 5, table: 'table1', orderID: 137, products: '3 x pizza, 3 x tee, 2 x ice-cream'},
//   {id: 6, table: 'table2', orderID: 141, products: 'coffee, cake'},
//   {id: 7, table: 'table3', orderID: 145, products: 'pizza, coffee, ice-cream'},
//   {id: 8, table: 'take-a-way', orderID: 156, products: 'pizza, coffee, cake'},
//   {id: 9, table: 'take-a-way', orderID: 159, products: 'pizza, coffee, cake'},
//   {id: 10, table: 'table2', orderID: 161, products: 'coffee, cake'},
//   {id: 11, table: 'take-a-way', orderID: 166, products: 'pizza, coffee, cake'},
// ];

class Kitchen extends React.Component {

  static propTypes = {
    fetchOrder: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
    }),
    // order: PropTypes.array,
    order: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
  }

  componentDidMount(){
    const { fetchOrder } = this.props;
    fetchOrder();
  }

  render() {
    const { loading:{ active, error}, order } = this.props;

    if(active || !order.length) {
      return (
        <Grid container component='div' className={styles.component}>
          <CssBaseline />
          <Grid item xs={12} className={styles.box}>
            <Paper className={styles.paper} elevation={6}>
              <div className={styles.progress}>
                <CircularProgress color="secondary" />
              </div>
              {/* <p>Loading...</p> */}
            </Paper>
          </Grid>
        </Grid>
      );
    } else if(error) {
      return (
        <Grid container component='div' className={styles.component}>
          <CssBaseline />
          <Grid item xs={12} className={styles.box}>
            <Paper className={styles.paper} elevation={6}>
              <p>Error! Details:</p>
              <pre>{error}</pre>
            </Paper>
          </Grid>
        </Grid>
      );
    } else {
      return(
        <Grid container component='div' className={styles.component}>
          <CssBaseline />
          <Grid item xs={12}>
            <Paper className={styles.paper} align='center'>
              <p className={styles.title}>Orders</p>

              <TableContainer className={styles.orders}>
                <Table stickyHeader >
                  <TableHead>
                    <TableRow>
                      <TableCell>Id</TableCell>
                      <TableCell>Table / Take-a-way</TableCell>
                      <TableCell>OrderID</TableCell>
                      <TableCell>Products</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {order.map(row => (
                      <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                          {row.id}
                        </TableCell>
                        <TableCell>
                          {row.table}
                        </TableCell>
                        <TableCell>
                          {row.orderID && (
                            <Button component={Link} to={`${process.env.PUBLIC_URL}/ordering/order/${row.orderID}`}>
                              {row.orderID}
                            </Button>
                          )}
                        </TableCell>
                        <TableCell>
                          {row.products}
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
    }

  }
}

export default Kitchen;
