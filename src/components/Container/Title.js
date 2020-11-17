import { Grid, Typography, Box, Paper } from '@material-ui/core';

import { titlesStyles } from '../../Styles';

export default function Title({ title }) {
  const { titles } = titlesStyles();
  return (
    <Grid item xs={12} sm={3}>
      <Box className={titles} pl={[7, 5, 14, 18]} pt={2}>
        <Typography variant="h8" component="h5">
          {title}
        </Typography>
      </Box>
    </Grid>
  );
}
