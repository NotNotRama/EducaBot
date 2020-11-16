import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  padding: {
    padding: '35px',
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
        <Typography className={classes.padding}>This is our header</Typography>
      </Toolbar>
    </AppBar>
  );
}
