import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import { cardBottomStyles } from '../../../Styles';

export default function Bottom({ data }) {
  const { bottom, roundedButton, lengua } = cardBottomStyles();

  return (
    <Grid
      item
      container
      direction="row"
      justify="space-between"
      alignItems="center"
      className={bottom}
    >
      <Grid
        item
        direction="row"
        justify="space-evenly"
        alignItems="center"
        className={roundedButton}
        xs={4}
        sm={3}
        md={2}
        container
      >
        <Grid item>
          <Brightness1Icon
            style={{ color: '#01CEAA', paddingTop: 5 }}
            fontSize="small"
          />
        </Grid>
        <Grid item>
          <Typography className={lengua}>{data.materia}</Typography>
        </Grid>
      </Grid>
      <Grid item>
        <ChatBubbleIcon fontSize="medium" />
      </Grid>
    </Grid>
  );
}
