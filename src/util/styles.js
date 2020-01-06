import { makeStyles } from '@material-ui/core';
import { primary } from './theme';

const defaultStyles = theme => ({
  textWhite: {
    color: 'white',
  },
  textCenter: {
    textAlign: 'center',
    width: '100%',
  },
  w100: {
    width: '100%',
  },
  h100: {
    height: '100%',
  },
  flexGrow: {
    flexGrow: 1,
  },
  hideScrollBar: {
    '&::-webkit-scrollbar': {
      width: 0,
      background: 'transparent',
    },
  },
  textBlack: {
    color: 'black',
  },
  linkWhite: {
    color: 'white !important',
    '& :visited': {
      color: 'white !important',
    },
  },
  link: {
    color: primary,
    textDecoration: 'none',
  },
  backgroundTransparent: {
    backgroundColor: 'transparent',
  },
});

// hook for use in functions
const useStyles = makeStyles(defaultStyles);

export { useStyles, defaultStyles };
