import { Grid } from '@material-ui/core';
import Header from './components/Header';
import Container from './components/Container';

function App() {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Container />
      </Grid>
    </Grid>
  );
}

export default App;
