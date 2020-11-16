import { Grid, Typography, Box } from '@material-ui/core';
import Homework from './Homework';

export default function Lecturas() {
  return (
    <Grid item container xs={12} sm={10} spacing={5}>
      <Grid item xs={12} sm={6} lg={4}>
        <Homework />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Homework />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Homework />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <Homework />
      </Grid>
    </Grid>
  );
}
