import React, {Component} from "react";
import {defaultStyles} from "../util/styles";
import {
    withStyles,
    Grid,
} from "@material-ui/core";
import bcgImage from '../res/img/projects/powder.jpg';
import spectreLogoImage from '../res/img/projects/spectre_logo.svg';
import {bgColor} from "../util/theme";

const styles = theme => ({
    ...defaultStyles(),
    root: {
        width: '100%',
        height: 360,
        position: 'relative',
    },
    abs: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    },
    shadow: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    },

    bottomBorder: {
        display: 'block',
        width: '100%',
        height: '64px',
        marginBottom: -2,
        filter: 'drop-shadow( 0px -3px 6px rgba(0, 0, 0, .4))',
        clipPath: 'inset(-15px -5px 0px -5px)',
    },
})

class Spectre extends Component {

    getBottomShadow = () => {
        const {classes} = this.props;
        return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none"
                    fill='transparent'
                    className={classes.bottomBorder}>
            <polygon points="0,100 100,100 100,0 0,75" fill={bgColor}/>
        </svg>;
    };

    render() {
        const {classes} = this.props;
        return <div className={classes.root}>
            <div className={classes.abs} style={{
                background: `linear-gradient(rgba(20, 20, 20, 0.8), rgba(20, 20, 20, 0.8)) center center / cover, url("${bcgImage}")`,
                backgroundSize: 'cover',
            }}/>
            <Grid container direction='column' justify='center' className={classes.abs}>
                <Grid item>
                    <Grid container direction='row' justify='center'>
                        <Grid item xs={6}>
                            <img src={spectreLogoImage} alt='spectre laboratories logo' className={classes.w100}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <div className={classes.shadow}>
                {this.getBottomShadow()}
            </div>
        </div>
    }
}

export default withStyles(styles)(Spectre);