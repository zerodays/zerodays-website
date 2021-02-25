import React, {Component, Fragment} from 'react';
import {
    withStyles,
    Typography,
    Grid,
    Box,
    Container,
    Card,
    Dialog, DialogContent, Hidden,
} from '@material-ui/core';
import {defaultStyles} from '../util/styles';
import clsx from 'clsx';
import {bgColor} from '../util/theme';
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
import {grey} from '@material-ui/core/colors';
import strings from '../strings';
import Circuit from './Circuit';
import Make3d from "./Make3d";
import Spectre from "./Spectre";
import SmallProject from "./SmallProject";

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

    getProject = (title, text, image, url, dark) => {
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
        </Grid> : null
    }

    getProjectsList = () => {
        return <Fragment>
            {this.getProject(strings.spectreTitle, strings.spectreDescription,
                <Spectre/>, 'http://spectrelabs.si/', true)}
            {this.getProject(strings.gremTitle, strings.gremDescription, this.getImageComponent(ImgGrem), 'https://grem.app')}

            {this.getProject(strings.sistem404Title, strings.sistem404Description, this.getImageComponent(Img404), 'https://404.si/')}
            {/* TODO: double link opens on click on href element */}
            {this.getProject(null, strings.make3dDescription, <Make3d/>, 'https://make3d.io', true)}

            <Hidden lgDown>
                <Grid item xs={12}/>
            </Hidden>


            <Hidden lgDown>
                <Grid item xs={1}/>
            </Hidden>

            <SmallProject backgroundImage={olloBcgImage} logoImage={olloLogo} dark
                          description={strings.olloDescription}/>
            {/*<SmallProject logoImage={tampontrackImage} description={strings.tampontrackDescription} logoGridWidth={7}/>*/}
            <SmallProject logoImage={skozBcgImage} logoGridWidth={6} description={strings.skozDescription} bcgOpacity={0}/>
            <SmallProject backgroundImage={dilaBcgImage} dark description={strings.dilaDescription} bcgOpacity={0.1}/>

            <Hidden lgDown>
                <Grid item xs={1}/>
            </Hidden>

            <SmallProject logoImage={sievaLogo} logoGridWidth={6} description={strings.sievaDescription}/>
            <SmallProject backgroundImage={wool2loopImage} dark description={strings.wool2loopDescription}/>
            <SmallProject backgroundImage={zascitimoImage} description={strings.zascitimoSiDescription} bcgOpacity={0}/>


            <SmallProject backgroundImage={otoBcgImage} description={strings.otoDescription} bcgOpacity={0} backgroundSize='auto 96%'/>


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
            {/*<Grid item xs={12}>*/}
            {/*  <div style={{height: 500}}>*/}
            {/*  <Circuit/>*/}
            {/*  </div>*/}
            {/*</Grid>*/}
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