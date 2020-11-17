import { Grid, Typography, Box, Button } from '@material-ui/core';
import { cardTopStyles } from '../../../Styles';

export default function StatusTitle({ data }) {
  const {
    nuevoStyle,
    demoradoStyle,
    demoradoTitleStyle,
    nuevoTitleStyle,
  } = cardTopStyles();
  return data.nuevo ? (
    <Grid item container xs={12}>
      <Box className={nuevoStyle}>
        <Typography className={nuevoTitleStyle}>
          {data.nuevo && '¡NUEVO!'}
        </Typography>
      </Box>
    </Grid>
  ) : (
    <Grid item container xs={12}>
      <Box className={demoradoStyle}>
        <Typography className={demoradoTitleStyle}>
          {!data.nuevo && '¡Estás demorad@!'}
        </Typography>
      </Box>
    </Grid>
  );
}
