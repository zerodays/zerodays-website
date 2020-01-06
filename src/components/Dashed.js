import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';
import { defaultStyles } from '../util/styles';
import clsx from 'clsx';

const styles = theme => ({
  ...defaultStyles(theme),
  root: {
    overflow: 'hidden',
  },
  text: {
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },
});

class Dashed extends Component {

  getHorizontal = () => {
    const {classes} = this.props;
    const str = '--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------';
    return <div className={clsx(classes.w100, classes.root)}>
      <Typography className={classes.text}>
        {str}
      </Typography>
    </div>;
  };

  render() {
    return this.getHorizontal();
  }
}

export default withStyles(styles)(Dashed);