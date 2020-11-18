import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { headerStyles } from '../../Styles'

export default function Header () {
  const { header, title } = headerStyles()
  return (
    <AppBar className={header} position='static'>
      <Toolbar>
        <Typography className={title}>UI Styles - Aula en casa</Typography>
      </Toolbar>
    </AppBar>
  )
}
