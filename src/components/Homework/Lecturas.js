import { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import HomeworkCard from './HomeworkCard/HomeworkCard';
import { LecturasArr } from '../../Data';

export default function Lecturas() {
  const [LecturasState, setLecturasState] = useState();

  useEffect(() => {
    //simulate fetch data from an api
    setLecturasState(LecturasArr);
  }, []);

  return (
    <Grid item container xs={12} sm={10} spacing={5}>
      {LecturasState &&
        LecturasState.map((data) => (
          <Grid item xs={12} lg={6}>
            <HomeworkCard data={data} />
          </Grid>
        ))}
    </Grid>
  );
}
