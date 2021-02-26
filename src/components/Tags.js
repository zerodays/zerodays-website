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
import { blue, grey } from '@material-ui/core/colors';
import clsx from 'clsx';
import { bgColor, primary } from '../util/theme';


const styles = theme => ({
  ...defaultStyles(theme),
  darkWithIcon: {
    color: 'white',
    backgroundColor: grey[800],
    borderColor: grey[800],
    '& > svg': {
      color: 'white',
    },
  },
  lightWithIcon: {
    color: grey[800],
    borderColor: blue[50],
    backgroundColor: blue[50],
    '& > svg': {
      color: grey[800],
    },
  },
  darkWithoutIcon: {
    borderColor: grey[800],
  },
  lightWithoutIcon: {
    color: grey[600],
    borderColor: grey[300],
  },
  tag: {
    '& > svg': {
      marginLeft: '8px !important',
      marginRight: '-2px !important',
    },
  },
  withIcon: {
    backgroundColor: primary,
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
      {icon == null ?
        <Chip
          variant='outlined'
          size='small'
          icon={textOnly ? null : icon}
          className={clsx(classes.tag, dark ? classes.darkWithoutIcon : classes.lightWithoutIcon)}
          label={title}
        />
        :
        <Chip
          size='small'
          variant='outlined'
          icon={textOnly ? null : icon}
          className={clsx(classes.tag, dark ? classes.darkWithIcon : classes.lightWithIcon)}
          label={title}
        />
      }
    </Grid>;
  };

  render() {
    const {tags} = this.props;
    return <Grid container direction='row' justify='flex-start' alignItems='center' spacing={1}>
        {tags.map(item => this.renderTag(item))}
      </Grid>;
  }
}

Tags.propTypes = {
  textOnly: PropTypes.bool,
  dark: PropTypes.bool,
  tags: PropTypes.array.isRequired,
};

export default withStyles(styles)(Tags);