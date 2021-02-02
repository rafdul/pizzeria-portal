import React from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { DataGrid } from '@material-ui/data-grid';

import styles from './Kitchen.module.scss';


const columnsOrders = [
  {field: 'id', headerName: 'ID', width: 80},
  {field: 'table', headerName: 'Table / Take-a-way', width: 160},
  {field: 'products', headerName: 'Products', width: 320},
];

const rowsOrders = [
  {id: 1, table: 'table2', products: 'pizza, coffee, cake'},
  {id: 2, table: 'table1', products: '2 x pizza, 2 x coffee, water'},
  {id: 3, table: 'table1', products: 'pizza, cola'},
  {id: 4, table: 'table3', products: 'pizza, water, cake'},
  {id: 5, table: 'table1', products: '3 x pizza, 3 x tee, 2 x ice-cream'},
  {id: 6, table: 'table2', products: 'coffee, cake'},
  {id: 7, table: 'table3', products: 'pizza, coffee, ice-cream'},
  {id: 8, table: 'take-a-way', products: 'pizza, coffee, cake'},
  {id: 9, table: 'take-a-way', products: 'pizza, coffee, cake'},
  {id: 10, table: 'table2', products: 'coffee, cake'},
  {id: 11, table: 'take-a-way', products: 'pizza, coffee, cake'},
];

const Kitchen = () => (


  <Grid container component='div' className={styles.component}>
    <CssBaseline />
    <Grid item xs={12}>
      <Paper className={styles.paper} align='center'>
        <p className={styles.title}>Orders</p>
        <div className={styles.orders}>
          <DataGrid rows={rowsOrders} columns={columnsOrders} pageSize={10} checkboxSelection disableColumnMenu/>
        </div>
      </Paper>
    </Grid>
  </Grid>


);

export default Kitchen;
