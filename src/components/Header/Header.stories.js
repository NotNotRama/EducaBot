/* eslint-disable import/no-anonymous-default-export */
import Header from './Header';
import { headerStyles } from '../../Styles';

export default {
  title: 'Header',
  component: Header,
};

export const Primary = () => {
  const { header } = headerStyles();

  return <Header></Header>;
};
