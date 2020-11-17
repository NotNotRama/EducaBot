import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  header: {
    fontFamily: 'DM Sans',
    padding: '35px',
    fontWeight: 500,
    fontSize: 28,
  },
  bg: {
    background: red,
  },
});

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar style={{ background: '#2E3B55' }} position="static">
      <Toolbar>
        <Typography className={classes.header}>
          UI Styles - Aula en casa
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
