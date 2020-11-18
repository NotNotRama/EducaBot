import { Grid, Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HourglassFullIcon from '@material-ui/icons/HourglassFull';
import { cardTopStyles } from '../../../Styles';

export default function Progreso({ data }) {
  const { lightText, darkText } = cardTopStyles();
  return (
    <Grid item container spacing={1} xs={12}>
      <Grid item>
        {data.esperandoCorreccion && <HourglassFullIcon fontSize="medium" />}
        {data.progreso === 100 && !data.esperandoCorreccion && (
          <CheckCircleIcon
            variant="static"
            style={{ color: '#50D174' }}
            size={20}
          />
        )}

        {data.progreso !== 100 && !data.esperandoCorreccion && (
          <CircularProgress
            variant="static"
            value={data.progreso}
            style={{ color: '#50D174' }}
            size={20}
          />
        )}
      </Grid>
      <Grid item>
        {data.progreso === 100 && !data.esperandoCorreccion && (
          <Typography className={darkText}>Actividad Completada!</Typography>
        )}

        {data.progreso !== 100 && !data.esperandoCorreccion && (
          <Typography className={lightText}>Progreso</Typography>
        )}

        {data.esperandoCorreccion && data.progreso === 100 && (
          <Typography className={darkText}>Esperando corrección</Typography>
        )}
      </Grid>
      <Grid item>
        {data.progreso === 0 && !data.esperandoCorreccion && (
          <Typography className={lightText}>-</Typography>
        )}
        {data.progreso > 0 &&
          data.progreso < 100 &&
          !data.esperandoCorreccion && (
            <Typography className={darkText}>{`${data.progreso}%`}</Typography>
          )}
      </Grid>
    </Grid>
  );
}
