import React, { Component, Fragment } from 'react';
import {
  withStyles,
  Typography,
  Grid,
  Box,
  Container,
  Card,
  Dialog, DialogContent,
} from '@material-ui/core';
import { defaultStyles } from '../util/styles';
import clsx from 'clsx';
import { bgColor } from '../util/theme';
import ImgGrem from '../res/img/projects/grem.png';
import ImgSkoz from '../res/img/projects/skoz.svg';
import ImgOto from '../res/img/projects/oto.png';
import ImgMake3d from '../res/img/projects/make3d.svg';
import ImgSpectre from '../res/img/projects/spectre.png';
import Img404 from '../res/img/projects/404.png';
import { grey } from '@material-ui/core/colors';
import strings from '../strings';
import Circuit from './Circuit';

const styles = theme => ({
  ...defaultStyles(theme),
  title: {
    fontSize: 76,
    cursor: 'pointer',
  },
  subTitle: {
    fontSize: 20,
  },
  companySubtitle: {
    fontSize: 26,
  },
  liSpacing: {
    margin: '0 0 22px 0',
  },
  topBorder: {
    display: 'block',
    width: '100%',
    height: '110px',
    marginTop: -2,
    filter: 'drop-shadow( 0px 5px 5px rgba(20, 20, 20, .7))',
    clipPath: 'inset(0px -5px -15px -5px)',
  },
  bottomBorder: {
    display: 'block',
    width: '100%',
    height: '80px',
    marginBottom: -2,
    filter: 'drop-shadow( 0px -3px 6px rgba(0, 0, 0, .4))',
    clipPath: 'inset(-15px -5px 0px -5px)',
  },
  projects: {
    background: 'white',
  },
  project: {
    background: 'white',
    height: '100%',
    borderRadius: 0,
    color: 'black',
  },
  projectDescription: {
    color: grey[600],
    '& > ul': {
      textAlign: 'center',
      listStylePosition: 'inside',
    },
  },
  profileDescription: {
    color: grey[300],
  },
  projectImage: {
    width: '100%',
    height: 300,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  profileImage: {
    width: 96,
    height: 96,
    borderRadius: 4,
  },
  description: {
    fontSize: 18,
  },
});

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogOpen: false,
    };
  }

  getDialog = () => {
    const {classes} = this.props;
    return <Dialog open={this.state.dialogOpen} onClose={this.closeDialog} PaperProps={{
      style: {
        backgroundColor: 'white',
      },
    }} fullWidth maxWidth='sm'>
      <DialogContent>
        <Box p={3}>
          {strings.zerodayDescription(classes)}
        </Box>
      </DialogContent>
    </Dialog>;
  };

  openDialog = () => this.setState({dialogOpen: true});
  closeDialog = () => this.setState({dialogOpen: false});

  getMember = (name, email, ghUsername, description) => {
    const {classes} = this.props;
    return <Grid item xs={12} md={6} lg={4}>
      <Grid container direction='row' justify='center'>
        <Grid item>
          <img src={`https://github.com/${ghUsername}.png`} alt='profile' className={classes.profileImage}/>
        </Grid>

        <Grid item xs={12}>
          <Box py={2}>
            <Typography className={clsx(classes.subTitle, classes.textCenter)}>
              {name}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Box pb={1}>
            <div className={clsx(classes.profileDescription)}>
              {description}
            </div>
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Typography className={classes.textCenter}>
            <a href={`https://github.com/${ghUsername}`} target='_blank' className={classes.linkWhite}
               rel='noopener noreferrer'>github.com/{ghUsername}</a>
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography className={classes.textCenter}>
            <a href={`mailto:${email}`} className={classes.linkWhite}>{email}</a>
          </Typography>
        </Grid>
      </Grid>
    </Grid>;
  };

  getMembers = () => {
    return <Container maxWidth='lg'>
      <Box py={5} mt={4} mb={4}>
        <Grid container direction='row' justify='center' spacing={3}>
          {this.getMember('Matej Marinko', 'matej.marinko@404.si', 'matejm', strings.matejDescription)}
          {this.getMember('Vid Drobnič', 'vid.drobnic@404.si', 'dzinvision', strings.vidDescription)}
          {this.getMember('Žiga Patačko Koderman', 'ziga.patacko@404.si', 'zigapk', strings.zigaDescription)}
        </Grid>
      </Box>
    </Container>;
  };

  getTopShadow = () => {
    const {classes} = this.props;
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"
                fill='transparent'
                className={classes.topBorder}>
      <polygon points="0,0 100,0 100,25 0,100" fill={bgColor}/>
    </svg>;
  };

  getBottomShadow = () => {
    const {classes} = this.props;
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"
                fill='transparent'
                className={classes.bottomBorder}>
      <polygon points="0,100 100,100 100,0 0,75" fill={bgColor}/>
    </svg>;
  };

  openExternalUrl = url => {
    if (url != null) window.open(url, '_blank');
  };

  getProject = (title, text, image, url) => {
    const {classes} = this.props;

    return <Grid item xs={12} lg={6} xl={5} className={classes.textBlack}>
      <Card className={classes.project} style={{cursor: url != null ? 'pointer' : 'auto'}}
            onClick={() => this.openExternalUrl(url)} elevation={15}>

        <Box p={3}>
          <Grid container direction='row' justify='center'>
            {
              image != null ? <Grid item xs={12}>
                <Box pb={2}>
                  <div className={classes.projectImage} style={{backgroundImage: `url(${image})`}}/>
                </Box>
              </Grid> : null
            }

            <Grid item xs={12}>
              <Box pt={1} pb={3}>
                <Typography className={clsx(classes.subTitle, classes.textCenter)}>
                  {title}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Typography className={clsx(classes.projectDescription, classes.textCenter)}>
                {text}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Grid>;
  };

  getOtherProjectsCard = () => {
    const {classes} = this.props;

    return <Grid item xs={12} lg={10} xl={8} className={classes.textBlack}>
      <Card className={classes.project} elevation={15}>
        <Box p={3}>
          <Grid container direction='row' justify='center'>

            <Grid item xs={12}>
              <Box pt={1} pb={3}>
                <Typography className={clsx(classes.subTitle, classes.textCenter)}>
                  {strings.otherProjects}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <ul className={clsx(classes.projectDescription, classes.textCenter)}>
                <li className={classes.liSpacing}>{strings.olloDescription}</li>
                <li className={classes.liSpacing}>{strings.tampontrackDescription}</li>
                <li className={classes.liSpacing}>{strings.wool2loopDescription}</li>
                <li className={classes.liSpacing}>{strings.zascitimoSiDescription}</li>
                <li className={classes.liSpacing}>{strings.thisWebsite}</li>
              </ul>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </Grid>;
  };

  getProjectsList = () => {
    return <Fragment>
      <Grid item xs={0} xl={1}/> {/* move horizontally */}

      {this.getProject(strings.gremTitle, strings.gremDescription, ImgGrem, 'https://grem.app')}
      <Grid item xs={0}/>
      {this.getProject(strings.spectreTitle, strings.spectreDescription, ImgSpectre, 'http://spectrelabs.si/')}
      <Grid item xs={12}/>

      <Grid item xs={0}/>
      {this.getProject(strings.sistem404Title, strings.sistem404Description, Img404, 'https://404.si/')}
      <Grid item xs={0}/>
      {this.getProject(strings.otoTitle, strings.otoDescription, ImgOto, 'https://www.otobody.com/')}

      <Grid item xs={12}/>
      <Grid item xs={0} xl={1}/> {/* move horizontally */}
      {/* TODO: double link opens on click on href element */}
      {this.getProject(strings.skozTitle, strings.skozDescription, ImgSkoz, 'https://skoz.si/')}
      <Grid item xs={0}/>
      {this.getProject(strings.make3dTitle, strings.make3dDescription, ImgMake3d, 'https://make3d.io')}

      <Grid item xs={12}/>
      {this.getOtherProjectsCard()}

    </Fragment>;
  };

  getProjects = () => {
    const {classes} = this.props;
    return <div className={classes.projects}>
      <Grid container direction='row' justify='center'>
        <Grid item xs={12}>
          {this.getTopShadow()}
        </Grid>

        <Grid item xs={12}>
          <Container maxWidth='xl'>
            <Box pt={2} pb={5}>
              <Grid container direction='row' justify='center' spacing={2}>

                <Grid item xs={12}>
                  <Box pb={3} pt={3}>
                    <Typography
                      className={clsx(classes.textBlack, classes.textCenter, classes.subTitle)}>
                      {strings.ourProjectsInclude}:
                    </Typography>
                  </Box>
                </Grid>

                {this.getProjectsList()}
              </Grid>
            </Box>
          </Container>
        </Grid>

        <Grid item xs={12}>
          <Box pt={4}/>
        </Grid>

        <Grid item xs={12}>
          {this.getBottomShadow()}
        </Grid>
      </Grid>
    </div>;
  };

  getContact = () => {
    const {classes} = this.props;
    return <Container maxWidth='lg'>
      <Box py={5} my={5}>
        <div className={clsx(classes.subTitle, classes.textCenter)}>
          {strings.contact}
        </div>
      </Box>
    </Container>;
  };


  render() {
    const {classes} = this.props;
    return <Grid container direction='row' justify='center'>
      <Grid item>
        <Container maxWidth='lg'>
          <Box pt={5} mt={5} pb={5}>
            <Typography variant='h1' className={clsx(classes.title, classes.textCenter)}
                        onClick={this.openDialog}>{strings.companyName}</Typography>
          </Box>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth='lg'>
          <Box pt={3} pb={5} mb={2}>
            <Typography className={clsx(classes.textCenter, classes.companySubtitle)}>
              {strings.companySubtitle}
            </Typography>
          </Box>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <div style={{height: 500}}>
        <Circuit/>
        </div>
      </Grid>
      <Grid item xs={12}>
        {this.getProjects()}
      </Grid>
      <Grid item xs={12}>
        {this.getMembers()}
      </Grid>
      <Grid item xs={12}>
        {this.getContact()}
      </Grid>
      <Grid item xs={12}>
        <Box pb={5} mb={5}/>
      </Grid>
      {this.getDialog()}
    </Grid>;
  }
}

export default withStyles(styles)(LandingPage);