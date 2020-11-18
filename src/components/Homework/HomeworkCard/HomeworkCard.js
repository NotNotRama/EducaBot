import React from 'react';
import { Grid } from '@material-ui/core';
import { homeworkCardStyles } from '../../../Styles';
import CardBottom from './CardBottom';
import CardTop from './CardTop';

export default function HomeworkCard({ data }) {
  const { borderCard } = homeworkCardStyles();

  return (
    //This component represents each individual card
    //It also works with dynamic data
    //so you can use it for "Lecturas" and "Actividades" alike
    <Grid container className={borderCard}>
      <CardTop data={data} />
      <CardBottom data={data} />
    </Grid>
  );
}
