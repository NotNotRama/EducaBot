/* eslint-disable import/no-anonymous-default-export */
import { Grid } from '@material-ui/core';
import HomeworkCard from './HomeworkCard';
import CardBottom from './CardBottom';
import CardTop from './CardTop';
import Data from '../../../Data';
import { homeworkCardStyles } from '../../../Styles';

export default {
  title: 'HomeworkCard',
  component: HomeworkCard,
};

const dummyData = {
  icono: 'lectura',
  tipo: 'LECTURA',
  titulo: 'Cuentos para aprender ortografia',
  nuevo: true,
  demorado: false,
  fechaEntrega: '15 de Abril',
  progreso: 25,
  materia: 'Lengua',
};

export const Primary = () => {
  // const { borderCard } = homeworkCardStyles();
  return (
    <Grid container>
      <CardTop data={dummyData} />
      <CardBottom data={dummyData} />
    </Grid>
  );
};
