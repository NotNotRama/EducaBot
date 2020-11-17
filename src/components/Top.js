import React from 'react';
import { Grid, Typography, Box, Paper, Button } from '@material-ui/core';
import Brightness1Icon from '@material-ui/icons/Brightness1';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import AssignmentIcon from '@material-ui/icons/Assignment';
import CircularProgress from '@material-ui/core/CircularProgress';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { makeStyles } from '@material-ui/core/styles';
import Bottom from './Bottom';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles({
  borderContainer: {
    border: '1px solid grey',
  },
  bottom: {
    borderTop: '1px solid grey',
    padding: 15,
  },
  top: {
    padding: 15,
  },
  icon: {
    background: '#01CEAA',
    borderRadius: 6,
    padding: 6,
  },
  roundedButton: {
    borderRadius: 50,
    border: '1px solid grey',
    padding: 3,
  },
  firstTitle: {
    fontFamily: 'DM Sans',
    fontWeight: '700',
    fontSize: 12,
    color: '#1A1A1A',
  },
  secondTitle: {
    fontFamily: 'DM Sans',
    fontWeight: '700',
    fontSize: 16,
    color: '#1A1A1A',
  },
  thirdTitle: {
    color: 'white',
  },
  boxStyle: {
    backgroundColor: '#27A8FF',
    padding: 4,
    borderRadius: 3,
  },
  lightText: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    color: grey,
  },
  darkText: {
    fontFamily: 'DM Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
  },
});

export default function Top() {
  const classes = useStyles();
  return (
    <Grid
      item
      container
      direction="row"
      justify="space-evenly"
      alignItems="center"
    >
      <Grid item container className={classes.top}>
        <Grid item xs={2}>
          <Box>
            <AssignmentIcon className={classes.icon} />
          </Box>
        </Grid>
        <Grid item container spacing={1} xs={7}>
          <Grid item xs={12}>
            <Typography className={classes.firstTitle}>LECTURA</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.secondTitle}>
              Cuentos para aprender ortografía
            </Typography>
          </Grid>
          <Grid item container xs={12}>
            <Box className={classes.boxStyle}>
              <Typography className={classes.thirdTitle}>¡NUEVA!</Typography>
            </Box>
          </Grid>
          <Grid item container spacing={1} xs={12}>
            <Grid item>
              <CalendarTodayIcon fontSize="small" />
            </Grid>
            <Grid item>
              <Box>
                <Typography className={classes.lightText}>
                  Fecha de Entrega
                </Typography>
              </Box>
            </Grid>
            <Grid item>
              <Typography className={classes.darkText}>15 de Abril</Typography>
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
              <Typography className={classes.lightText}>Progreso</Typography>
            </Grid>
            <Grid item>
              <Typography className={classes.darkText}>75%</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container xs={12} lg={3}>
          <Grid item style={{ marginLeft: 'auto' }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: '#4F36D6',
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
