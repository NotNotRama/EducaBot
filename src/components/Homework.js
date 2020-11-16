import React from 'react';
import { Grid, Typography, Box, Paper, Button } from '@material-ui/core';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { makeStyles } from '@material-ui/core/styles';
import Bottom from './Bottom';

const useStyles = makeStyles({
  borderContainer: {
    border: '1px solid grey',
  },
  bottom: {
    borderTop: '1px solid grey',
    padding: 15,
  },
  top: {
    padding: 15,
  },
  icon: {
    background: '#01CEAA',
    borderRadius: 6,
    padding: 6,
  },
  roundedButton: {
    borderRadius: 50,
    border: '1px solid grey',
    padding: 3,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Grid container className={classes.borderContainer}>
      <Grid
        item
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item container className={classes.top}>
          <Grid item xs={2}>
            <Box>
              <AssignmentIcon className={classes.icon} />
            </Box>
          </Grid>
          <Grid item container xs={7}>
            <Grid item xs={12}>
              <Typography>This is our header</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>This is our header</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>This is our header</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>This is our header</Typography>
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              style={{ backgroundColor: '#4F36D6', textTransform: 'none' }}
            >
              <Typography variant="body2" style={{ color: '#FFFFFF' }}>
                Continuar
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Bottom />
    </Grid>
  );
}
