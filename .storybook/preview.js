import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

const theme = createMuiTheme({
  typography: {
    fontFamily: ['serif'].join(','),
  },
});

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
