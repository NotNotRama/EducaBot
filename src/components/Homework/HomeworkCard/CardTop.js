import React from 'react';
import { Grid, Typography, Box, Button } from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CircularProgress from '@material-ui/core/CircularProgress';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { cardTopStyles } from '../../../Styles';

export default function Top({ lectura }) {
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
            {lectura ? (
              <BorderColorIcon className={pencil} />
            ) : (
              <AssignmentIcon className={calendar} />
            )}
          </Box>
        </Grid>
        <Grid item container spacing={1} xs={7}>
          <Grid item xs={12}>
            <Typography className={firstTitle}>LECTURA</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={secondTitle}>
              Cuentos para aprender ortografía
            </Typography>
          </Grid>
          <Grid item container xs={12}>
            <Box className={boxStyle}>
              <Typography className={thirdTitle}>¡NUEVA!</Typography>
            </Box>
          </Grid>
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
          <Grid item container spacing={1} xs={12}>
            <Grid item>
              <CircularProgress
                variant="static"
                value={75}
                style={{ color: '#50D174' }}
                size={20}
              />
            </Grid>
            <Grid item>
              <Typography className={lightText}>Progreso</Typography>
            </Grid>
            <Grid item>
              <Typography className={darkText}>75%</Typography>
            </Grid>
          </Grid>
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
