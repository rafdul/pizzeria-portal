import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Grid from '@material-ui/core/Grid';

import styles from './BookingDetails.module.scss';
import PropTypes from 'prop-types';


const BookingDetails = (props) => (

  <Container component='main' maxWidth='xs' className={styles.component}>
    <CssBaseline />
    <Paper className={styles.paper}>
      <Typography variant='h5' className={styles.title}>
        Booking Details id:
        <Typography variant='h4' component='span' color='secondary' className={styles.bookingID}>
          { props.match.params.id}
        </Typography>
      </Typography>
      <Divider light />
      <ListItem>
        <ListItemText
          primary={
            <Grid container>
              <Grid item xs={9} className={styles.listText}>
                <Typography variant='body1' component='span'>Date:</Typography>
                <Typography variant='body2' component='span' color='secondary'> 10.02.2021, 16.30</Typography>
              </Grid>
              <Grid item xs={3}>
                <IconButton edge='end' aria-label='delete'><EditIcon fontSize='small' /></IconButton>
                <IconButton edge='end' aria-label='delete'><DeleteIcon fontSize='small' /></IconButton>
              </Grid>
            </Grid>
          }
        />
      </ListItem>
      <ListItem>
        <ListItemText
          primary={
            <Grid container>
              <Grid item xs={9} className={styles.listText}>
                <Typography variant='body1' component='span'>Booked table:</Typography>
                <Typography variant='body2' component='span' color='secondary'> Table1</Typography>
              </Grid>
              <Grid item xs={3}>
                <IconButton edge='end' aria-label='delete'><EditIcon fontSize='small' /></IconButton>
                <IconButton edge='end' aria-label='delete'><DeleteIcon fontSize='small' /></IconButton>
              </Grid>
            </Grid>
          }
        />
      </ListItem>
      <Divider light />
      <ListItem>
        <ListItemText
          primary={
            <div>
              <Grid container>
                <Grid item xs={9} className={styles.listText}>
                  <Typography variant='body1' component='span'>First Name:</Typography>
                  <Typography variant='body2' component='span' color='secondary'> Joe</Typography>
                </Grid>
                <Grid item xs={3}>
                  <IconButton edge='end' aria-label='delete'><EditIcon fontSize='small' /></IconButton>
                  <IconButton edge='end' aria-label='delete'><DeleteIcon fontSize='small' /></IconButton>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={9} className={styles.listText}>
                  <Typography variant='body1' component='span'>Last Name:</Typography>
                  <Typography variant='body2' component='span' color='secondary'> Biden</Typography>
                </Grid>
                <Grid item xs={3}>
                  <IconButton edge='end' aria-label='delete'><EditIcon fontSize='small' /></IconButton>
                  <IconButton edge='end' aria-label='delete'><DeleteIcon fontSize='small' /></IconButton>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={9} className={styles.listText}>
                  <Typography variant='body1' component='span'>Tel:</Typography>
                  <Typography variant='body2' component='span' color='secondary'> 987 654 321</Typography>
                </Grid>
                <Grid item xs={3}>
                  <IconButton edge='end' aria-label='delete'><EditIcon fontSize='small' /></IconButton>
                  <IconButton edge='end' aria-label='delete'><DeleteIcon fontSize='small' /></IconButton>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={9} className={styles.listText}>
                  <Typography variant='body1' component='span'>Email:</Typography>
                  <Typography variant='body2' component='span' color='secondary'> joe@biden.us</Typography>
                </Grid>
                <Grid item xs={3}>
                  <IconButton edge='end' aria-label='delete'><EditIcon fontSize='small' /></IconButton>
                  <IconButton edge='end' aria-label='delete'><DeleteIcon fontSize='small' /></IconButton>
                </Grid>
              </Grid>
            </div>
          }
        />
      </ListItem>
    </Paper>
  </Container>

);

BookingDetails.propTypes = {
  match: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.string,
};

export default BookingDetails;
