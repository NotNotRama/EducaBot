import React from 'react';
import { Grid, Typography, Box, Paper, Button } from '@material-ui/core';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  borderContainer: {
    border: '1px solid grey',
  },
  borderTop: {
    borderTop: '1px solid grey',
  },
  roundedButton: {
    borderRadius: 50,
    border: '1px solid grey',
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Grid container className={classes.borderContainer}>
      <Grid item container>
        TOP
      </Grid>
      <Grid
        item
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        className={classes.borderTop}
      >
        <Grid
          item
          direction="row"
          className={classes.roundedButton}
          xs={2}
          container
        >
          <Grid item>
            <Brightness1Icon fontSize="small" />
          </Grid>
          <Grid item>
            <Typography>Lengua</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
