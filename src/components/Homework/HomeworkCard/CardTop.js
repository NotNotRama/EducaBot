import React from 'react';
import { Grid, Typography, Box, Button } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CircularProgress from '@material-ui/core/CircularProgress';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { cardTopStyles } from '../../../Styles';
import StatusTitle from './StatusTitle';
import Progreso from './Progreso';

export default function Top({ data }) {
  const {
    top,
    pencil,
    calendar,
    firstTitle,
    secondTitle,
    boxStyle,
    thirdTitle,
    lightText,
    darkText,
  } = cardTopStyles();

  return (
    <Grid
      item
      container
      direction="row"
      justify="space-evenly"
      alignItems="center"
    >
      <Grid item container className={top}>
        <Grid item xs={2}>
          <Box>
            {data.icono === 'actividad' ? (
              <BorderColorIcon className={pencil} />
            ) : (
              <AssignmentIcon className={calendar} />
            )}
          </Box>
        </Grid>
        <Grid item container spacing={1} xs={7}>
          <Grid item xs={12}>
            <Typography className={firstTitle}>{data.tipo}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={secondTitle}>{data.titulo}</Typography>
          </Grid>
          <StatusTitle data={data} />
          <Grid item container spacing={1} xs={12}>
            <Grid item>
              <CalendarTodayIcon fontSize="small" />
            </Grid>
            <Grid item>
              <Box>
                <Typography className={lightText}>Fecha de Entrega</Typography>
              </Box>
            </Grid>
            <Grid item>
              <Typography className={darkText}>15 de Abril</Typography>
            </Grid>
          </Grid>
          <Progreso data={data} />
        </Grid>
        <Grid item container xs={12} lg={3}>
          <Grid item style={{ marginLeft: 'auto' }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: '#260167',
                textTransform: 'none',
              }}
            >
              <Typography variant="body2" style={{ color: '#FFFFFF' }}>
                Continuar
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
