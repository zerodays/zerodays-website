import React, { Component } from 'react';
import { TagsEnum } from '../util/helpers';
import {
  Grid,
  Box,
  Chip,
  withStyles,
} from '@material-ui/core';
import { defaultStyles } from '../util/styles';
import PropTypes from 'prop-types';
import {
  Cloud,
  Android,
  Storage,
  Web,
  Apple,
  Memory,
} from '@material-ui/icons';
import strings from '../strings';
import { grey } from '@material-ui/core/colors';


const styles = theme => ({
  ...defaultStyles(theme),
  dark: {
    color: 'white',
  },
  light: {
    color: grey[600],
  },
});

class Tags extends Component {

  tagTypeToIcon = type => {
    switch (type) {
      case TagsEnum.web:
        return <Web/>;
      case TagsEnum.android:
        return <Android/>;
      case TagsEnum.backend:
        return <Storage/>;
      case TagsEnum.sys_admin:
        return <Cloud/>;
      case TagsEnum.ios:
        return <Apple/>;
      case TagsEnum.robotics:
        return <Memory/>;
      default:
        return null;
    }
  };

  tagTypeToString = type => {
    switch (type) {
      case TagsEnum.web:
        return strings.web;
      case TagsEnum.android:
        return strings.android;
      case TagsEnum.backend:
        return strings.backend;
      case TagsEnum.sys_admin:
        return strings.sysAdmin;
      case TagsEnum.ios:
        return strings.ios;
      case TagsEnum.robotics:
        return strings.robotics;
      default:
        return null;
    }
  };

  renderTag = data => {
    const {classes, dark, textOnly} = this.props;
    const icon = this.tagTypeToIcon(data);
    const title = textOnly ? data : this.tagTypeToString(data);

    if (title == null) return null;

    return <Grid item key={data}>
      <Chip
        variant='outlined'
        icon={textOnly ? null : icon}
        className={dark ? classes.dark : classes.light}
        label={title}
      />
    </Grid>;
  };

  render() {
    const {tags} = this.props;
    return <Box px={3} pb={3}>
      <Grid container direction='row' justify='flex-start' alignItems='center' spacing={1}>
        {tags.map(item => this.renderTag(item))}
      </Grid>
    </Box>;
  }
}

Tags.propTypes = {
  textOnly: PropTypes.bool,
  dark: PropTypes.bool,
  tags: PropTypes.array.isRequired,
};

export default withStyles(styles)(Tags);