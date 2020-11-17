/* eslint-disable react-hooks/rules-of-hooks */

import { Grid } from '@material-ui/core';
import MainTitle from '../Container/MainTitle';
import Title from '../Container/Title';
import Lecutras from '../Lecturas';
import Preguntas from '../Preguntas';

export default function container() {
  return (
    <Grid container justify="center" alignItems="center" spacing={5}>
      <MainTitle />
      <Title title={'Lecturas'} />
      <Lecutras />
      <Title title={'Preguntas'} />
      <Preguntas />
    </Grid>
  );
}
