import React, { Component } from 'react';
import { defaultStyles } from '../util/styles';
import {
  withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { LOCAL_STORAGE_KEY_LANGUAGE } from '../util/helpers';
import { grey } from '@material-ui/core/colors';
import { bgColor } from '../util/theme';

const styles = theme => ({
  ...defaultStyles(theme),
  root: {
    borderRadius: 0,
    opacity: 0.8,
  },
  toggleButtonActive: {
    borderRadius: 0,
    backgroundColor: `white !important`,
    opacity: 0.9,
    color: `${bgColor} !important`,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
  },
  toggleButtonInactive: {
    borderRadius: 0,
    backgroundColor: `${bgColor} !important`,
    color: `${grey[100]} !important`,
    opacity: 0.8,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

class LanguageSwitch extends Component {
  render() {
    const {classes, onLanguageChanged} = this.props;
    let language = window.localStorage.getItem(LOCAL_STORAGE_KEY_LANGUAGE);
    language = language == null ? 'en': language;

    return <ToggleButtonGroup
      className={classes.root}
      size='small'
      value={language}
      exclusive
      onChange={(e, newValue) => onLanguageChanged(newValue)}
    >
      <ToggleButton value='en' className={language === 'en' ? classes.toggleButtonActive : classes.toggleButtonInactive}>
        english
      </ToggleButton>
      <ToggleButton value='sl' className={language === 'sl' ? classes.toggleButtonActive : classes.toggleButtonInactive}>
        slovenščina
      </ToggleButton>
    </ToggleButtonGroup>;
  }
}

LanguageSwitch.propTypes = {
  onLanguageChanged: PropTypes.func.isRequired,
};

export default withStyles(styles)(LanguageSwitch);