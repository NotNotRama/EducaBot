/* eslint-disable react-hooks/rules-of-hooks */

import { Grid, Typography, Box, Paper } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Homework from './Homework';
import Lecutras from './Lecturas';
import Preguntas from './Preguntas';

const useStyles = makeStyles({
  mg: {
    marginTop: 50,
  },
});

export default function container() {
  const classes = useStyles();
  return (
    <Grid container justify="center" alignItems="center" spacing={5}>
      <Grid item xs={12}>
        <Box pl={7} pt={2}>
          <Typography variant="h5" component="h5">
            Listones Tareas (Perfil Alumno)
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sm={3}>
        <Box className={classes.mg} pl={7} pt={2}>
          <Typography variant="h8" component="h5">
            LECTURAS
          </Typography>
        </Box>
      </Grid>
      <Lecutras />
      <Grid item xs={12} sm={3}>
        <Box className={classes.mg} pl={7} pt={2}>
          <Typography variant="h8" component="h5">
            LECTURAS
          </Typography>
        </Box>
      </Grid>
      <Preguntas />
    </Grid>
  );
}
