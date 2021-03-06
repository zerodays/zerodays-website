import React, { Component } from 'react';
import { defaultStyles } from '../util/styles';
import {
  Box,
  Card,
  Grid, Typography,
  withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { bgColor } from '../util/theme';
import { grey } from '@material-ui/core/colors';
import Tags from './Tags';

const styles = theme => ({
  ...defaultStyles(theme),
  bottomBorder: {
    display: 'block',
    width: '100%',
    height: '32px',
    marginBottom: -2,
    filter: 'drop-shadow( 0px -3px 6px rgba(0, 0, 0, .4))',
    clipPath: 'inset(-15px -5px 0px -5px)',
  },
  shadow: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  imageContainer: {
    height: 256,
    position: 'relative',
    width: '100%',
  },
  abs: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  smallProject: {
    height: '100%',
    borderRadius: 0,
  },
  descriptionDark: {
    color: 'white',
    textAlign: 'center',
    '& span': {
      color: grey[700],
      '& a': {
        color: grey[700],
      }
    }
  },
  descriptionLight: {
    color: grey[600],
    textAlign: 'center',
    '& span': {
      color: grey[400],
      '& a': {
        color: grey[400],
      }
    }
  },
});

class SmallProject extends Component {

  getBottomShadow = () => {
    const {classes} = this.props;
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"
                fill='transparent'
                className={classes.bottomBorder}>
      <polygon points="0,100 100,100 100,0 0,75" fill={bgColor}/>
    </svg>;
  };

  getImageComponent = () => {
    const {
      classes,
      dark,
      backgroundImage,
      logoImage,
      bcgOpacity,
      logoGridWidth,
      backgroundSize,
      bottomPadding,
    } = this.props;
    return <div className={classes.imageContainer}>
      {
        backgroundImage ?
          <div className={classes.abs} style={{
            background: `linear-gradient(rgba(20, 20, 20, ${bcgOpacity != null ? bcgOpacity : 0.4}), rgba(20, 20, 20, ${bcgOpacity != null ? bcgOpacity : 0.4})) center center / cover, url("${backgroundImage}")`,
            backgroundSize: backgroundSize == null ? 'cover' : backgroundSize,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}/> : null
      }
      {
        logoImage ? <Grid container direction='column' justify='center' className={classes.abs}>
          <Grid item>
            <Grid container direction='row' justify='center'>
              <Grid item xs={logoGridWidth ? logoGridWidth : 3}>
                <Box pb={bottomPadding ? 5 : 0}>
                  <img src={logoImage} alt='project logo' className={classes.w100}/>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid> : null
      }
      {dark ? <div className={classes.shadow}>
        {this.getBottomShadow()}
      </div> : null
      }
    </div>;
  };

  render() {
    const {classes, dark, description, tags, frameworkTags} = this.props;

    return <Grid item xs={12} md={6} lg={4} xl={3}>
      <Card style={{backgroundColor: dark ? bgColor : 'white'}}
            className={classes.smallProject} elevation={15}>
        <Grid container direction='row' justify='center' className={classes.h100}>
          {this.getImageComponent()}

          <Grid item xs={12}>
            <Box px={3} pb={3} pt={2}>
              <Typography className={dark ? classes.descriptionDark : classes.descriptionLight}>
                {description}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>

            <Grid container direction='column' justify='flex-end' className={classes.h100}>
              <Grid item>
                <Box px={3} pb={3}>
                  <Tags tags={tags} dark={dark}/>
                  <Box pt={1}/>
                  <Tags tags={frameworkTags} dark={dark} textOnly/>
                </Box>
              </Grid>
            </Grid>

          </Grid>
        </Grid>
      </Card>
    </Grid>;
  }
}

SmallProject.propTypes = {
  dark: PropTypes.bool,
  bcgOpacity: PropTypes.number,
  backgroundImage: PropTypes.string,
  logoImage: PropTypes.string,
  logoGridWidth: PropTypes.number,
  description: PropTypes.element.isRequired,
  backgroundSize: PropTypes.string,
  tags: PropTypes.array.isRequired,
  frameworkTags: PropTypes.array.isRequired,
  bottomPadding: PropTypes.bool,
};

export default withStyles(styles)(SmallProject);