import { Grid } from '@material-ui/core';
import HomeworkCard from './HomeworkCard/HomeworkCard';

export default function Lecturas() {
  return (
    <Grid item container xs={12} sm={10} spacing={10}>
      <Grid item xs={12} lg={6}>
        <HomeworkCard />
      </Grid>
      <Grid item xs={12} lg={6}>
        <HomeworkCard />
      </Grid>
      <Grid item xs={12} lg={6}>
        <HomeworkCard />
      </Grid>
      <Grid item xs={12} lg={6}>
        <HomeworkCard />
      </Grid>
    </Grid>
  );
}
