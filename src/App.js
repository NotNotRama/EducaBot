import { Grid } from '@material-ui/core'
import Header from './components/Header/Header'
import Container from './components/Container/Container'

function App () {
  return (
    // Container for the whole page
    <Grid container direction='column'>
      <Grid item>
        <Header />
      </Grid>
      <Grid item container>
        <Container />
      </Grid>
    </Grid>
  )
}

export default App
