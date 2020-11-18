import { Grid, Typography, Box } from '@material-ui/core'
import { cardTopStyles } from '../../../Styles'

export default function StatusTitle ({ data }) {
  const {
    nuevoStyle,
    demoradoStyle,
    demoradoTitleStyle,
    nuevoTitleStyle
  } = cardTopStyles()

  if (data.nuevo) {
    return (
      <Grid item container xs={12}>
        <Box className={nuevoStyle}>
          <Typography className={nuevoTitleStyle}>
            {data.nuevo && '¡NUEVO!'}
          </Typography>
        </Box>
      </Grid>
    )
  }

  if (data.demorado) {
    return (
      <Grid item container xs={12}>
        <Box className={demoradoStyle}>
          <Typography className={demoradoTitleStyle}>
            {!data.nuevo && '¡Estás demorad@!'}
          </Typography>
        </Box>
      </Grid>
    )
  }

  if (!data.demorado && !data.nuevo) {
    return <div />
  }
}
