import React from 'react';
import { Grid, Typography, Box, Paper, Button } from '@material-ui/core';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
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
      <Grid item container>
        TOP
      </Grid>
      <Bottom />
    </Grid>
  );
}
