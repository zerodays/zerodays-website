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
import ImgOto from '../res/img/projects/oto.png';
import ImgSpectre from '../res/img/projects/spectre.png';
import Img404 from '../res/img/projects/404.svg';
import { grey } from '@material-ui/core/colors';

const styles = theme => ({
  ...defaultStyles(theme),
  title: {
    fontSize: 76,
    cursor: 'pointer',
  },
  subTitle: {
    fontSize: 20,
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
        <Typography className={clsx(classes.description, classes.textCenter, classes.textBlack)}>
          A <a href='https://en.wikipedia.org/wiki/Zero-day_(computing)' target='_blank'
               rel='noopener noreferrer'>zero-day</a> (also known as 0-day) vulnerability is a computer-software
          vulnerability that is unknown to,
          or
          unaddressed by, those who should be interested in mitigating the vulnerability (including the vendor of the
          target software).
        </Typography>
        <br/>
        <Typography className={clsx(classes.description, classes.textCenter, classes.textBlack)}>
          Until the vulnerability is mitigated, hackers can exploit it to adversely affect computer
          programs, data, additional computers or a network. An exploit directed at a zero-day is called a zero-day
          exploit, or zero-day attack.
        </Typography>
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
          <Typography className={classes.profileDescription}>
            {description}
          </Typography>
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
    </Grid>
  };

  getMatejDescription = () => {
    return <Fragment>
      <ul>
        <li>mobile Flutter developer</li>
        <li>web developer</li>
        <li>Android specialist</li>
        <li>machine learning and data analysis</li>
      </ul>
    </Fragment>;
  };

  getVidDescription = () => {
    return <Fragment>
      <ul>
        <li>backend developer</li>
        <li>database engineer</li>
        <li>system administrator</li>
        <li>security consultant</li>
      </ul>
    </Fragment>;
  };

  getZigaDescription = () => {
    return <Fragment>
      <ul>
        <li>mobile Flutter developer</li>
        <li>web developer</li>
        <li>iOS specialist</li>
        <li>embedded developer</li>
        <li>penetration tester</li>
      </ul>
    </Fragment>;
  };

  getMembers = () => {
    return <Container maxWidth='lg'>
      <Box py={5} mt={4} mb={4}>
        <Grid container direction='row' justify='center' spacing={3}>
          {this.getMember('Matej Marinko', 'matej.marinko@zerodays.dev', 'matejm', this.getMatejDescription())}
          {this.getMember('Vid Drobnič', 'vid.drobnic@zerodays.dev', 'dzinvision', this.getVidDescription())}
          {this.getMember('Žiga Patačko Koderman', 'ziga.patacko@zerodays.dev', 'zigapk', this.getZigaDescription())}
        </Grid>
      </Box>
    </Container>;
  };

  getTopShadow = () => {
    const {classes} = this.props;
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" fill='transparent'
                className={classes.topBorder}>
      <polygon points="0,0 100,0 100,25 0,100" fill={bgColor}/>
    </svg>;
  };

  getBottomShadow = () => {
    const {classes} = this.props;
    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" fill='transparent'
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

  getGremDescription = () => {
    return <Fragment>
      Through a productive collaboration with the Grem! team since 2017 we have established a full online ticket and
      event management platform. We remain their go-to development team. Our collaboration includes <b>mobile app
      development</b> for iOS and Android, <b>website</b>, <b>backend</b> platform maintenance, <b>server
      hosting</b> and <b>IT consulting</b>.
    </Fragment>
  };

  getSpectreDescription = () => {
    return <Fragment>
      In association with Spectre Laboratories a pharmaceutical <b>3D printer controller software</b> and <b>user
      interface</b> was built from the ground up. It allows for rapid prototyping with different types and constitutions
      of tablets for small to medium production and drug development.
    </Fragment>
  };

  getOtoDescription = () => {
    return <Fragment>
      We have developed a mobile app shipped together with the OTO Massage Shagger as a guide medium. It is configurable
      through a custom backend to enable seamless distribution of new content as soon as it is produced.
    </Fragment>
  };

  get404Description = () => {
    return <Fragment>
      To enable flawless project oversight, booking of space, machines and management of other resources we have
      collaborated with 404 and built a fully integrated web app. We continue to provide maintenance as well as regular
      upgrades based on user feedback to meet the fast pace of new innovations.
    </Fragment>
  };

  getOtherDescription = () => {
    return <Fragment>
      Our collaboration kicked off in our high school years when we qualified for the <a target='_blank'
                                                                                         rel='noopener noreferrer'
                                                                                         href='https://www.acsl.org/'>American
      Computer Science League</a> finals and scored <a target='_blank' rel='noopener noreferrer'
                                                       href='https://www.acsl.org/acsl/results/2015-2016.htm'>second
      place</a> in the Intermediate 3 Division. Since then we have worked on numerous projects and participated in
      countless competitions and hackathons. To name a few:
      <ul>
        <li>Best Earth Observation Hack in <a target='_blank' rel='noopener noreferrer' href='https://dragonhack.si/'>Dragonhack
          2019</a>,
        </li>
        <li>Best Mobile Hack in <a target='_blank' rel='noopener noreferrer' href='https://dragonhack.si/'>Dragonhack
          2018</a> and
        </li>
        <li>1. place in <a target='_blank' rel='noopener noreferrer'
                           href='https://tekmovanja.acm.si/?q=upm/rezultati#rezultati_3kolo'>the 3.
          round</a> of <a
          href='https://tekmovanja.acm.si/?q=upm/predstavitev-tekmovanja'>UPM 2019</a> and combined <a target='_blank'
                                                                                                    rel='noopener noreferrer'
                                                                                                    href='https://tekmovanja.acm.si/?q=upm/rezultati'>9.
          place</a>.
        </li>
      </ul>

      <br/>
      <br/>

      Past work experiences also include penetration testing and security consulting.

      <br/>
      <br/>

      Our driving goal had always been to work on challenging projects on the forefront of the industry.
    </Fragment>
  };

  getProjectsList = () => {
    return <Fragment>
      <Grid item xs={0} xl={1}/>
      {this.getProject('Full-stack ticket management system', this.getGremDescription(), ImgGrem, 'https://grem.app')}
      {this.getProject('3D printer for pharmaceuticals', this.getSpectreDescription(), ImgSpectre, 'http://spectrelabs.si/')}
      {this.getProject('Company management web app', this.get404Description(), Img404, 'https://404.si/')}
      {this.getProject('OTO mobile app', this.getOtoDescription(), ImgOto, 'https://www.otobody.com/')}
      {this.getProject('Other achievements', this.getOtherDescription(), null, null)}
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
              <Grid container direction='row' justify='center' spacing={4}>

                <Grid item xs={12}>
                  <Box pb={3} pt={3}>
                    <Typography className={clsx(classes.textBlack, classes.textCenter, classes.subTitle)}>
                      Our projects include:
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
        <Typography className={clsx(classes.subTitle, classes.textCenter)}>
          If you have a great idea (or a bad one indeed) we'd love to hear from you at <a
          href='mailto:contact@zerodays.dev'>contact@zerodays.dev</a>.
        </Typography>
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
                        onClick={this.openDialog}>zerodays</Typography>
          </Box>
        </Container>
      </Grid>
      <Grid item xs={12}>
        <Container maxWidth='lg'>
          <Box pt={3} pb={5} mb={2}>
            <Typography className={clsx(classes.textCenter, classes.subTitle)}>
              Customized software and electronics development, computer security testing and consulting.
            </Typography>
          </Box>
        </Container>
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