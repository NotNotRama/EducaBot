import { Grid, Typography, Box, Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { cardTopStyles } from '../../../Styles';

export default function Progreso({ data }) {
  const { lightText, darkText } = cardTopStyles();
  return (
    <Grid item container spacing={1} xs={12}>
      <Grid item>
        {data.progreso === 100 ? (
          <CheckCircleIcon
            variant="static"
            style={{ color: '#50D174' }}
            size={20}
          />
        ) : (
          <CircularProgress
            variant="static"
            value={data.progreso}
            style={{ color: '#50D174' }}
            size={20}
          />
        )}
      </Grid>
      <Grid item>
        {data.progreso === 100 ? (
          <Typography className={darkText}>Actividad Completada!</Typography>
        ) : (
          <Typography className={lightText}>Progreso</Typography>
        )}
      </Grid>
      <Grid item>
        {data.progreso === 0 && (
          <Typography className={lightText}>-</Typography>
        )}
        {data.progreso > 0 && data.progreso < 100 && (
          <Typography className={darkText}>{`${data.progreso}%`}</Typography>
        )}
      </Grid>
    </Grid>
  );
}
