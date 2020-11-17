import React from 'react';
import { Grid, Typography, Box, Paper, Button } from '@material-ui/core';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { makeStyles } from '@material-ui/core/styles';
import Bottom from './Bottom';
import Top from './Top';

const useStyles = makeStyles({
  borderContainer: {
    border: '1px solid #DFDFDA',
    borderRadius: 8,
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
      <Top />
      <Bottom />
    </Grid>
  );
}
