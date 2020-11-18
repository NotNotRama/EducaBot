/* eslint-disable import/no-anonymous-default-export */
import { Grid } from '@material-ui/core'
import HomeworkCard from './HomeworkCard'
import CardBottom from './CardBottom'
import CardTop from './CardTop'

export default {
  title: 'HomeworkCard',
  component: HomeworkCard
}

const lecturaData = {
  icono: 'lectura',
  tipo: 'LECTURA',
  titulo: 'Cuentos para aprender ortografia',
  nuevo: true,
  demorado: false,
  fechaEntrega: '15 de Abril',
  progreso: 25,
  materia: 'Lengua'
}
const preguntasData = {
  icono: 'actividad',
  tipo: 'ACTIVIDAD CON PREGUNTAS',
  titulo: '¿Qué es la potencia y la raiz cuadrada de un número?',
  nuevo: false,
  demorado: true,
  fechaEntrega: '15 de Abril',
  progreso: 100,
  esperandoCorreccion: true,
  materia: 'Fisica'
}

export const Lectura = () => {
  return (
    <Grid item container xs={5}>
      <CardTop data={lecturaData} />
      <CardBottom data={lecturaData} />
    </Grid>
  )
}
export const Preguntas = () => {
  return (
    <Grid item container xs={5}>
      <CardTop data={preguntasData} />
      <CardBottom data={preguntasData} />
    </Grid>
  )
}
