import React from 'react';
import { Grid } from '@material-ui/core';
import { homeworkCardStyles } from '../../../Styles';
import Bottom from './CardBottom';
import Top from './CardTop';

export default function HomeworkCard() {
  const { borderCard } = homeworkCardStyles();

  return (
    <Grid container className={borderCard}>
      <Top />
      <Bottom />
    </Grid>
  );
}
