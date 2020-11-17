import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  title: {
    fontFamily: 'DM Sans',
    padding: '35px',
    fontWeight: 500,
    fontSize: 28,
  },
  header: {
    background: '#4F36D6',
  },
});

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar className={classes.header} position="static">
      <Toolbar>
        <Typography className={classes.title}>
          UI Styles - Aula en casa
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
