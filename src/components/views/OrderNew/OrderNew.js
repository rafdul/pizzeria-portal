import React from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Select from '@material-ui/core/Select';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import styles from './OrderNew.module.scss';

const OrderNew = () => (

  <Grid container component='div' className={styles.component}>
    <CssBaseline />
    <Grid item xs={12} className={styles.box}>
      <Paper className={styles.paper} elevation={6} align='center'>
        <p className={styles.title}>Add new order</p>
        <Grid container >
          <Grid item xs={12} md={4} className={styles.gridBox}>
            <FormControl className={styles.formBox}>
              <InputLabel id='choose-waiter'>Who are you?</InputLabel>
              <Select
                labelId='waiters'
                id='waiters'
                // value={age}
                // onChange={handleChange}
              >
                <MenuItem value={1}>Joe</MenuItem>
                <MenuItem value={2}>Angela</MenuItem>
                <MenuItem value={3}>Ann</MenuItem>
                <MenuItem value={3}>Emmanuel</MenuItem>
                <MenuItem value={3}>Kamala</MenuItem>
              </Select>
              <FormHelperText>Name of waiter</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4} className={styles.gridBox}>
            <TextField
              className={styles.textField}
              variant='outlined'
              fullWidth
              margin='normal'
              id='id'
              label='Order id'
              name='id'
              autoComplete='id'
              autoFocus
              size='small'
            />
          </Grid>
          <Grid item xs={12} md={4} className={styles.gridBox}>
            <FormControl className={styles.formBox}>
              <InputLabel id='choose-table'>Choose table</InputLabel>
              <Select
                labelId='tables'
                id='table'
                // value={age}
                // onChange={handleChange}
              >
                <MenuItem value={1}>Table1</MenuItem>
                <MenuItem value={2}>Table2</MenuItem>
                <MenuItem value={3}>Table3</MenuItem>
              </Select>
              <FormHelperText>This field is necessary</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12} className={styles.border}>
            <FormControlLabel
              control={<Checkbox color='primary' name='cake' />}
              label='Doughnut'
              className={styles.gridBox}
            />
            <TextField
              className={styles.textField}
              variant='outlined'
              fullWidth
              margin='normal'
              id='amountCake'
              label='Amount of cake'
              name='amountCake'
              autoFocus
              size='small'
              type='number'
              inputProps={{min:0, max:9}}
            />
          </Grid>
          <Grid item xs={12} className={styles.border}>
            <FormControl className={styles.formBox}>
              <InputLabel id='choose-caffee'>Choose caffee type</InputLabel>
              <Select
                labelId='caffee'
                id='caffee'
                // value={age}
                // onChange={handleChange}
              >
                <MenuItem value={1}>Latte</MenuItem>
                <MenuItem value={2}>Cappucino</MenuItem>
                <MenuItem value={3}>Espresso</MenuItem>
                <MenuItem value={4}>Macchiato</MenuItem>
              </Select>
              <FormHelperText>This field is necessary</FormHelperText>
            </FormControl>
            <TextField
              className={styles.textField}
              variant='outlined'
              fullWidth
              margin='normal'
              id='amountCaffee'
              label='Amount of caffee'
              name='amountCaffee'
              autoFocus
              size='small'
              type='number'
              inputProps={{min:0, max:9}}
            />
          </Grid>
          <Grid item xs={12} className={styles.border}>
            <Grid container>
              <Grid item xs={12} sm={7}>
                <div>
                  <FormLabel>Pizza toppings</FormLabel>
                </div>
                <FormControl>
                  <FormControlLabel
                    control={<Checkbox color='primary' name='olives' />}
                    label='Olives'
                    className={styles.checkbox}
                  />
                  <FormControlLabel
                    control={<Checkbox color='primary' name='redPeppers' />}
                    label='Red peppers'
                    className={styles.checkbox}
                  />
                  <FormControlLabel
                    control={<Checkbox color='primary' name='greenPeppers' />}
                    label='Green peppers'
                    className={styles.checkbox}
                  />
                </FormControl>
                <FormControl>
                  <FormControlLabel
                    control={<Checkbox color='primary' name='mushromms' />}
                    label='Mushrooms'
                    className={styles.checkbox}
                  />
                  <FormControlLabel
                    control={<Checkbox color='primary' name='basil' />}
                    label='Fresh basil'
                    className={styles.checkbox}
                  />
                  <FormControlLabel
                    control={<Checkbox color='primary' name='salami' />}
                    label='Salami'
                    className={styles.checkbox}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={5}>
                <div className={styles.gridBox}>
                  <FormControl className={styles.formBox}>
                    <InputLabel id='choose-pizza-souce'>Choose pizza souce</InputLabel>
                    <Select
                      labelId='pizzaSouce'
                      id='pizzaSouce'
                      // value={age}
                      // onChange={handleChange}
                    >
                      <MenuItem value={1}>Tomato</MenuItem>
                      <MenuItem value={2}>Sour creme</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className={styles.gridBox}>
                  <FormControl className={styles.formBox}>
                    <InputLabel id='choose-pizza-crust'>Choose pizza crust</InputLabel>
                    <Select
                      labelId='pizzaCrust'
                      id='pizzaCrust'
                      // value={age}
                      // onChange={handleChange}
                    >
                      <MenuItem value={1}>Standard</MenuItem>
                      <MenuItem value={2}>Thin</MenuItem>
                      <MenuItem value={3}>Thick</MenuItem>
                      <MenuItem value={4}>Cheese</MenuItem>
                      <MenuItem value={5}>Wholewheat</MenuItem>
                      <MenuItem value={6}>With extra gluten</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <div className={styles.gridBox}>
                  <TextField
                    className={styles.textField}
                    variant='outlined'
                    fullWidth
                    margin='normal'
                    id='amountPizza'
                    label='Amount of pizza'
                    name='amountPizza'
                    autoFocus
                    size='small'
                    type='number'
                    inputProps={{min:0, max:9}}
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className={styles.border}>
            <Grid container>
              <Grid item xs={12} sm={7}>
                <div>
                  <FormLabel>Salad ingredients</FormLabel>
                </div>
                <FormControl>
                  <FormControlLabel
                    control={<Checkbox color='primary' name='cucumber' />}
                    label='Cucumber'
                    className={styles.checkbox}
                  />
                  <FormControlLabel
                    control={<Checkbox color='primary' name='tomatos' />}
                    label='Tomatos'
                    className={styles.checkbox}
                  />
                  <FormControlLabel
                    control={<Checkbox color='primary' name='olives' />}
                    label='Olives'
                    className={styles.checkbox}
                  />
                </FormControl>
                <FormControl>
                  <FormControlLabel
                    control={<Checkbox color='primary' name='feta' />}
                    label='Feta'
                    className={styles.checkbox}
                  />
                  <FormControlLabel
                    control={<Checkbox color='primary' name='cheese' />}
                    label='Cheese'
                    className={styles.checkbox}
                  />
                  <FormControlLabel
                    control={<Checkbox color='primary' name='herbs' />}
                    label='Herbs'
                    className={styles.checkbox}
                  />
                  <FormControlLabel
                    control={<Checkbox color='primary' name='pepper' />}
                    label='Pepper'
                    className={styles.checkbox}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={5}>
                <div className={styles.gridBox}>
                  <TextField
                    className={styles.textField}
                    variant='outlined'
                    fullWidth
                    margin='normal'
                    id='amountSalad'
                    label='Amount of salad'
                    name='amountSalad'
                    autoFocus
                    size='small'
                    type='number'
                    inputProps={{min:0, max:9}}
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
          <div className={styles.button}>
            <Button
              variant='contained'
              color='primary'
              size='large'
            >
              Send new order
            </Button>
          </div>
        </Grid>
      </Paper>
    </Grid>
  </Grid>


);

export default OrderNew;
