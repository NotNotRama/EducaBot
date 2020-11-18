import React from 'react';
import { Grid } from '@material-ui/core';
import { homeworkCardStyles } from '../../../Styles';
import CardBottom from './CardBottom';
import CardTop from './CardTop';

export default function HomeworkCard({ data }) {
  const { borderCard } = homeworkCardStyles();

  return (
    <Grid container className={borderCard}>
      <CardTop data={data} />
      <CardBottom data={data} />
    </Grid>
  );
}
