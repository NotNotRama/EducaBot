/* eslint-disable react-hooks/rules-of-hooks */

import { Grid } from '@material-ui/core'
import MainTitle from '../Container/MainTitle'
import Title from '../Container/Title'
import Lecutras from '../Homework/Lecturas'
import Preguntas from '../Homework/Preguntas'

export default function container () {
  return (
    // Body container
    <Grid container justify='center' alignItems='center' spacing={5}>
      <MainTitle />
      <Title title='LECTURAS' />
      <Lecutras />
      <Title title='PREGUNTAS' />
      <Preguntas />
    </Grid>
  )
}
