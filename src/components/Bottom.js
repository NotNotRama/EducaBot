import React from 'react';
import { Grid, Typography, Box, Paper, Button } from '@material-ui/core';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

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

export default function Bottom() {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      className={classes.bottom}
    >
      <Grid
        item
        direction="row"
        justify="space-evenly"
        alignItems="center"
        className={classes.roundedButton}
        xs={4}
        sm={6}
        md={4}
        container
      >
        <Grid item>
          <Brightness1Icon style={{ color: '#01CEAA' }} fontSize="small" />
        </Grid>
        <Grid item>
          <Typography>Lengua</Typography>
        </Grid>
      </Grid>
      <Grid item>
        <ChatBubbleIcon fontSize="medium" />
      </Grid>
    </Grid>
  );
}
