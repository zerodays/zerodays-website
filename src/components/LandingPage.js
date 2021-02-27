import React, { Component, Fragment } from 'react';
import {
  withStyles,
  Typography,
  Grid,
  Box,
  Container,
  Card,
  Dialog, DialogContent, Hidden,
} from '@material-ui/core';
import { defaultStyles } from '../util/styles';
import clsx from 'clsx';
import { bgColor } from '../util/theme';
import ImgGrem from '../res/img/projects/grem.png';
import olloBcgImage from '../res/img/projects/ollo.jpg';
import olloLogo from '../res/img/projects/ollo_logo.png';
import Img404 from '../res/img/projects/404.png';
import dilaBcgImage from '../res/img/projects/dilaboards.jpg';
import skozBcgImage from '../res/img/projects/skoz.svg';
import wool2loopImage from '../res/img/projects/wool2loop.jpeg';
import otoBcgImage from '../res/img/projects/oto.png';
import zascitimoImage from '../res/img/projects/zascitimo.png';
import sievaLogo from '../res/img/projects/sieva_logo.png';
import { grey } from '@material-ui/core/colors';
import strings from '../strings';
import Make3d from './Make3d';
import Spectre from './Spectre';
import SmallProject from './SmallProject';
import Tags from './Tags';
import { TagsEnum } from '../util/helpers';
import Circuit from './circuit/Circuit';

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
  darkCard: {
    backgroundColor: bgColor,
    textColor: 'white',
  },
  lightCard: {
    background: 'white',
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
    height: '100%',
    borderRadius: 0,
  },
  projectDescription: {
    '& > ul': {
      textAlign: 'center',
      listStylePosition: 'inside',
    },
  },
  projectDescriptionDark: {
    textColor: 'white',
  },
  projectDescriptionLight: {
    color: grey[600],
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
  headerShadowContainer: {
    filter: 'drop-shadow( 0px 5px 5px rgba(20, 20, 20, .7))',
  },
  header: {
    display: 'flex',
    flexFlow: 'row nowrap',
    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 0.04*100vw), 0% 100%)',

  },
  circuit: {
    boxSizing: 'border-box',
    width: '100%',
    flex: 'none',
    zIndex: 0,
  },
  headerContent: {
    boxSizing: 'border-box',
    width: '100%',
    flex: 'none',
    marginLeft: '-100%',
    zIndex: 1,
  },
  bgWhite: {
    backgroundColor: 'white',
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
                fill='white'
                className={classes.topBorder}>
      <polygon points="0,0 100,0 100,25 0,100" fill='green'/>
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

  getProject = (title, text, image, url, tags, frameworkTags, dark) => {
    const {classes} = this.props;

    return <Grid item xs={12} lg={6} xl={5} className={dark ? classes.textWhite : classes.textBlack}>
      <Card className={clsx(classes.project, dark ? classes.darkCard : classes.lightCard)}
            style={{cursor: url != null ? 'pointer' : 'auto'}}
            onClick={() => this.openExternalUrl(url)} elevation={15}>
        <Grid container direction='row' justify='center' className={classes.h100}>
          {
            image
          }

          {title == null ? <Grid item xs={12}>
              <Box pt={3}/>
            </Grid>
            : <Grid item xs={12}>
              <Box px={4} pt={1} pb={3}>
                <Typography className={clsx(classes.subTitle, classes.textCenter)}>
                  {title}
                </Typography>
              </Box>
            </Grid>
          }

          <Grid item xs={12}>
            <Box px={4} pb={5}>
              <Typography
                className={clsx(classes.projectDescription, classes.textCenter, dark ? classes.projectDescriptionDark : classes.projectDescriptionLight)}>
                {text}
              </Typography>
            </Box>
          </Grid>

          {/* TODO: padding */}


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
  };

  getImageComponent = url => {
    const {classes} = this.props;
    return url != null ? <Grid item xs={12}>
      <Box pb={2} pt={4}>
        <div className={classes.projectImage} style={{backgroundImage: `url(${url})`}}/>
      </Box>
    </Grid> : null;
  };

  getProjectsList = () => {
    return <Fragment>
      {this.getProject(strings.spectreTitle, strings.spectreDescription,
        <Spectre/>, 'http://spectrelabs.si/', [TagsEnum.robotics, TagsEnum.sys_admin], ['python', 'react'], true)}
      {this.getProject(strings.gremTitle, strings.gremDescription, this.getImageComponent(ImgGrem), 'https://grem.app', [TagsEnum.web, TagsEnum.android, TagsEnum.ios, TagsEnum.backend, TagsEnum.sys_admin], ['django', 'flutter', 'react', 'bootstrap', 'safecharge', 'google login', 'facebook login', 'firebase'])}

      {this.getProject(strings.sistem404Title, strings.sistem404Description, this.getImageComponent(Img404), 'https://404.si/', [TagsEnum.web, TagsEnum.backend, TagsEnum.sys_admin], ['go', 'react', 'stripe', 'minimax', 'google login', 'google calendar'])}
      {/* TODO: double link opens on click on href element */}
      {this.getProject(null, strings.make3dDescription,
        <Make3d/>, 'https://make3d.io', [TagsEnum.web, TagsEnum.backend, TagsEnum.sys_admin], ['go', 'react', 'stripe', 'firebase', 'here maps'], true)}

      <Hidden lgDown>
        <Grid item xs={12}/>
      </Hidden>


      <Hidden lgDown>
        <Grid item xs={0}/>
        <Grid item xs={1}/>
      </Hidden>
      <SmallProject backgroundImage={olloBcgImage} logoImage={olloLogo} dark
                    description={strings.olloDescription} tags={[TagsEnum.backend]}
                    bcgOpacity={0.2}
                    frameworkTags={['go', 'shopify', 'minimax']}

      />
      <SmallProject backgroundImage={otoBcgImage} description={strings.otoDescription} bcgOpacity={0}
                    tags={[TagsEnum.web, TagsEnum.android, TagsEnum.ios, TagsEnum.backend]}
                    frameworkTags={['django', 'flutter']}
                    backgroundSize='auto 96%'/>
      <SmallProject backgroundImage={dilaBcgImage} dark description={strings.dilaDescription} bcgOpacity={0.1}
                    frameworkTags={['django', 'bootstrap', 'paypal']}
                    tags={[TagsEnum.web, TagsEnum.backend]}/>
      <Hidden lgDown>
        <Grid item xs={1}/>
        <Grid item xs={0}/>
        <Grid item xs={1}/>
      </Hidden>

      <SmallProject logoImage={sievaLogo} logoGridWidth={6} description={strings.sievaDescription}
                    tags={[TagsEnum.backend]} frameworkTags={['django', 'stripe']}/>
      <SmallProject backgroundImage={wool2loopImage} dark description={strings.wool2loopDescription}
                    tags={[TagsEnum.web, TagsEnum.backend]} frameworkTags={['go', 'react']} bcgOpacity={0.35}/>
      <SmallProject backgroundImage={zascitimoImage} description={strings.zascitimoSiDescription} bcgOpacity={0}
                    tags={[TagsEnum.web, TagsEnum.backend]} frameworkTags={['django', 'bootstrap']}
                    backgroundSize='auto 90%'/>
      <Hidden lgDown>
        <Grid item xs={1}/>
      </Hidden>

      <SmallProject logoImage={skozBcgImage} logoGridWidth={6} description={strings.skozDescription}
                    frameworkTags={['django', 'bootstrap']}
                    bcgOpacity={0} tags={[TagsEnum.web, TagsEnum.backend]}/>

      {/* TODO: this website */}
      {/* TODO: links in new tab */}
    </Fragment>;
  };

  getProjects = () => {
    const {classes} = this.props;
    return <div className={classes.projects}>
      <Grid container direction='row' justify='center'>
        <Grid item xs={12}>
          <Container maxWidth='xl'>
            <Box pt={2} pb={5}>
              <Grid container direction='row' justify='center' spacing={4}>

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

  getHeader = () => {
    const {classes} = this.props;
    return <div className={classes.headerShadowContainer}>
      <div className={classes.header}>
        <div className={classes.circuit}>
          <Circuit height={340}/>
        </div>
        <div className={classes.headerContent}>
          <Box>
            <Grid container direction='row' justify='center'>
              <Grid item>
                <Container maxWidth='lg'>
                  <Box mt={5} pb={3}>
                    <Typography variant='h1' className={clsx(classes.title, classes.textCenter)}
                                onClick={this.openDialog}>{strings.companyName}</Typography>
                  </Box>
                </Container>
              </Grid>
              <Grid item xs={12}>
                <Container maxWidth='lg'>
                  <Box pt={3}>
                    <Typography className={clsx(classes.textCenter, classes.companySubtitle)}>
                      {strings.companySubtitle}
                    </Typography>
                  </Box>
                </Container>
              </Grid>
              {/*<Grid item xs={12} style={{backgroundColor: 'white'}}>*/}
              {/*{this.getTopShadow()}*/}
              {/*</Grid>*/}
            </Grid>
          </Box>
        </div>
      </div>
    </div>;
  };


  render() {
    const {classes} = this.props;
    return <Grid container direction='row' justify='center' className={classes.bgWhite}>
      <Grid item xs={12}>
        {this.getHeader()}
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