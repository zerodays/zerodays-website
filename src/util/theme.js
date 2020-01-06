import { createMuiTheme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';

const primary = blue[500];
const bgColor = '#141414';

const DarkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: primary,
    },
    secondary: {
      main: primary,
    },
    background: {
      default: bgColor,
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'Roboto Mono',
      'monospace',
    ].join(','),
  },
});

export {
  DarkTheme,
  bgColor,
  primary,
};
