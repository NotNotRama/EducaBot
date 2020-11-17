import { Grid, Typography, Box } from '@material-ui/core';
import { mainTitleStyles } from '../../Styles';

export default function MainTitle() {
  const { title } = mainTitleStyles();
  return (
    <Grid item xs={12}>
      <Box pl={7} pt={5}>
        <Typography variant="h5" component="h5" className={title}>
          Listones Tareas (Perfil Alumno)
        </Typography>
      </Box>
    </Grid>
  );
}
