import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Table from '@material-ui/core/Table';
// import TableContainer from '@material-ui/core/TableContainer';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import styles from './Ordering.module.scss';

// const demoContent = [
//   {id: '1', status: 'free', order: null},
//   {id: '2', status: 'thinking', order: null},
//   {id: '3', status: 'ordered', order: 123},
//   {id: '4', status: 'prepared', order: 234},
//   {id: '5', status: 'delivered', order: 345},
//   {id: '6', status: 'paid', order: 456},
// ];


class Ordering extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
    }),
    // tables: PropTypes.array,
    tables: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
    ]),
    fetchChangeStatus: PropTypes.func,
  }

  componentDidMount(){
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(id, status){

    const { fetchChangeStatus } = this.props;

    switch (status) {
      case 'free':
        return (
          <>
            <Button onClick={() => fetchChangeStatus(id, 'thinking')} component={Link} to={`${process.env.PUBLIC_URL}/ordering/new`}>thinking</Button>
            <Button onClick={() => fetchChangeStatus(id, 'ordered')} component={Link} to={`${process.env.PUBLIC_URL}/ordering/new`} variant='outlined' color='secondary'>new order</Button>
          </>
        );
      case 'thinking':
        return (
          <Button onClick={() => fetchChangeStatus(id, 'ordered')} component={Link} to={`${process.env.PUBLIC_URL}/ordering/new`} variant='outlined' color='secondary'>new order</Button>
        );
      case 'ordered':
        return (
          <Button onClick={() => fetchChangeStatus(id, 'prepared')} component={Link} to={`${process.env.PUBLIC_URL}/ordering/order/999`}>prepared</Button>
        );
      case 'prepared':
        return (
          <Button onClick={() => fetchChangeStatus(id, 'delivered')} component={Link} to={`${process.env.PUBLIC_URL}/ordering/order/999`}>delivered</Button>
        );
      case 'delivered':
        return (
          <Button onClick={() => fetchChangeStatus(id, 'paid')} component={Link} to={`${process.env.PUBLIC_URL}/ordering/order/999`}>paid</Button>
        );
      case 'paid':
        return (
          <Button onClick={() => fetchChangeStatus(id, 'free')} component={Link} to={`${process.env.PUBLIC_URL}/ordering/order/999`}>free</Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;

    if(active || !tables.length) {
      return (
        <Grid container component='div' className={styles.component}>
          <CssBaseline />
          <Grid item xs={12} className={styles.box}>
            <Paper className={styles.paper} elevation={6}>
              <p>Loading</p>
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
      return (
        <Grid container component='div' className={styles.component}>
          <CssBaseline />
          <Grid item xs={12} className={styles.box}>
            <Paper className={styles.paper} elevation={6}>
              <p className={styles.title}>Orders - view for waiter</p>

              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell>Table</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Order</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tables.map(row => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell>
                        {row.status}
                      </TableCell>
                      <TableCell>
                        {row.order && (
                          <Button component={Link} to={`${process.env.PUBLIC_URL}/ordering/order/${row.order}`}>
                            {row.order}
                          </Button>
                        )}
                      </TableCell>
                      <TableCell>
                        {this.renderActions(row.id, row.status)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      );
    }



  }
}

export default Ordering;
