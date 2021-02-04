import React from 'react';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import styles from './OrderDetails.module.scss';
import PropTypes from 'prop-types';


const OrderDetails = (props) => (

  <Grid container component='div' className={styles.component}>
    <CssBaseline />
    <Grid item xs={12} className={styles.box}>
      <Paper className={styles.paper} elevation={6}>
        <Typography variant="h5" className={styles.title}>
          Order Details id:
          <Typography variant="h4" component='span' color='secondary' className={styles.orderID}>
            { props.match.params.id}
          </Typography>
        </Typography>
        <Grid container >
          <Grid item xs={12} sm={6} className={styles.boxOrder}>
            <Typography variant="subtitle1" className={styles.title}>
              Products list
            </Typography>
            <ListItem>
              <ListItemText
                primary={
                  <div>
                    <Typography variant='body1' component='span'>Doughnut</Typography>
                    <Typography variant='body2' component='span' color='secondary'> 1 pc.</Typography>
                  </div>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <div>
                    <Typography variant='body1' component='span'>Caffee Espresso</Typography>
                    <Typography variant='body2' component='span' color='secondary'> 2 pc.</Typography>
                  </div>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <div>
                    <Typography variant='body1' component='span'>Pizza</Typography>
                    <Typography variant='body2' component='span' color='secondary'> 1 pc.</Typography>
                    <ListItem>
                      <ListItemText
                        primary={<Typography variant='body1' component='span'>Souce: </Typography>}
                        secondary={<Typography variant='body2' component='span' color='textSecondary'>tomato</Typography>}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary={<Typography variant='body1' component='span'>Crust: </Typography>}
                        secondary={<Typography variant='body2' component='span' color='textSecondary'>wholewheat</Typography>}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary={<Typography variant='body1' component='span'>Toppings: </Typography>}
                        secondary={<Typography variant='body2' component='span' color='textSecondary'>olives, green pepper, mushromms, basil, salami</Typography>}
                      />
                    </ListItem>
                  </div>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <div>
                    <Typography variant='body1' component='span'>Salad</Typography>
                    <Typography variant='body2' component='span' color='secondary'> 3 pc.</Typography>
                    <ListItem>
                      <ListItemText
                        primary={<Typography variant='body1' component='span'>Ingredients: </Typography>}
                        secondary={<Typography variant='body2' component='span' color='textSecondary'>cucumber, tomatoes, feta, cheese, herbs, black pepper</Typography>}
                      />
                    </ListItem>
                  </div>
                }
              />
            </ListItem>
          </Grid>
          <Grid item xs={12} sm={6} className={styles.boxOrder}>
            <Typography variant="subtitle1" className={styles.title}>
              Datasheet
            </Typography>
            <ListItem>
              <ListItemText
                primary={
                  <div>
                    <div>
                      <Typography variant='body1' component='span'>Local or take-a-way: </Typography>
                      <Typography variant='body2' component='span' color='secondary'>local</Typography>
                    </div>
                    <div>
                      <Typography variant='body1' component='span'>Table: </Typography>
                      <Typography variant='body2' component='span' color='secondary'>table3</Typography>
                    </div>
                  </div>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <div>
                    <div>
                      <Typography variant='body1' component='span' color='textSecondary'>Only for take-a-way </Typography>
                    </div>
                    <div>
                      <Typography variant='subtitle1' component='span' color='textSecondary'>Address: </Typography>
                      <Typography variant='body2' component='span' color='textSecondary'>ul. Lorem ipsum 3/2</Typography>
                    </div>
                    <div>
                      <Typography variant='subtitle2' component='span' color='textSecondary'>Tel: </Typography>
                      <Typography variant='body2' component='span' color='textSecondary'>123 456 789</Typography>
                    </div>
                    <div>
                      <Typography variant='subtitle2' component='span' color='textSecondary'>Name: </Typography>
                      <Typography variant='body2' component='span' color='textSecondary'>Joe Biden</Typography>
                    </div>
                  </div>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary={
                  <div>
                    <Typography variant='body1' component='span'>Summary price: </Typography>
                    <Typography variant='subtitle1' component='span' color='secondary'>$33,25</Typography>
                  </div>
                }
              />
            </ListItem>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  </Grid>

);

OrderDetails.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.string,
};

export default OrderDetails;
