import LocalizedStrings from 'react-localization';
import React, {Fragment} from "react";
import {Typography} from "@material-ui/core";
import clsx from "clsx";

const languages = ['en', 'sl'];


const strings = new LocalizedStrings({
    en: {
        // app name
        companyName: 'zerodays',
        companySubtitle: 'Customized software and electronics development, computer security testing and consulting.',
        ourProjectsInclude: 'Our projects include',

        // zeroday description
        prefix: 'A',
        zerodayDescription: (classes) => (
            <Fragment>
                <Typography className={clsx(classes.description, classes.textCenter, classes.textBlack)}>
                    A <a href='https://en.wikipedia.org/wiki/Zero-day_(computing)' target='_blank'
                         rel='noopener noreferrer'>zero-day</a> (also known as 0-day) vulnerability is a
                    computer-software vulnerability that is unknown to, or unaddressed by, those who should be
                    interested in mitigating the vulnerability.
                </Typography>
                <br/>
                <Typography className={clsx(classes.description, classes.textCenter, classes.textBlack)}>
                    As opposed to that, Zerodays team aims to develop secure products as well as help companies to
                    diminish any existing security issues.
                </Typography>
            </Fragment>
        ),

        // grem
        gremTitle: 'Full-stack ticket management system',
        gremDescription: <Fragment>
            Since 2017, we have established a full online ticket and event management platform through a productive
            collaboration with the Grem! team. We remain to be their go-to development team. Our joint development
            includes <b>mobile app</b> for iOS and Android, <b>website</b>, <b>backend platform maintenance</b> and <b>server
            hosting</b>.
        </Fragment>,

        // spectre
        spectreTitle: '3D printer for pharmaceuticals',
        spectreDescription: <Fragment>
            A pharmaceutical 3D printer controller software and user interface was built from the scratch in association
            with Spectre Laboratories. It allows for rapid prototyping of different types and contents of medical
            tablets for small to medium drug production and development.
        </Fragment>,

        // sistem 404
        sistem404Title: 'Company management web app',
        sistem404Description: <Fragment>
            To enable flawless project oversight, booking of space, machines and management of other resources we have
            collaborated with Youth Technology and Learning Center 404 and built a fully integrated web app. We continue
            to provide maintenance as well as regular upgrades based on user feedback to meet the fast pace of new
            feature requests.
        </Fragment>,

        // oto
        otoTitle: 'OTO mobile app',
        otoDescription: <Fragment>
            We have developed a mobile app shipped together with the OTO Massage Shagger as a video guide medium. It is
            configurable through a custom backend to enable immediate publication of the latest video content.
        </Fragment>,

        otherDescription: <Fragment>
            Zerodays team dates back to our high school years when we qualified for the <a target='_blank'
                                                                                           rel='noopener noreferrer'
                                                                                           href='https://www.acsl.org/'>American
            Computer Science League</a> finals and scored <a target='_blank' rel='noopener noreferrer'
                                                             href='https://www.acsl.org/acsl/results/2015-2016.htm'>second
            place</a> in the Intermediate 3 Division. Since then we have worked on numerous projects and participated in
            countless competitions and hackathons. To name a few:
            <ul>
                <li>Best Earth Observation Hack in <a target='_blank' rel='noopener noreferrer'
                                                      href='https://dragonhack.si/'>Dragonhack
                    2019</a>,
                </li>
                <li>Best Mobile Hack in <a target='_blank' rel='noopener noreferrer' href='https://dragonhack.si/'>Dragonhack
                    2018</a> and
                </li>
                <li>1. place in <a target='_blank' rel='noopener noreferrer'
                                   href='https://tekmovanja.acm.si/?q=upm/rezultati#rezultati_3kolo'>the 3.
                    round</a> of <a
                    href='https://tekmovanja.acm.si/?q=upm/predstavitev-tekmovanja'>UPM 2019</a> and combined <a
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://tekmovanja.acm.si/?q=upm/rezultati'>9.
                    place</a>.
                </li>
            </ul>

            <br/>
            <br/>

            Our driving goal has always been to work on challenging projects on the forefront of the industry.
        </Fragment>,

        matejDescription: <Fragment>
            <ul>
                <li>mobile Flutter developer</li>
                <li>web developer</li>
                <li>machine learning and data analysis</li>
            </ul>
        </Fragment>,

        vidDescription: <Fragment>
            <ul>
                <li>backend developer</li>
                <li>system administrator</li>
                <li>penetration tester</li>
            </ul>
        </Fragment>,

        zigaDescription: <Fragment>
            <ul>
                <li>mobile Flutter developer</li>
                <li>web developer</li>
                <li>embedded systems engineer</li>
            </ul>
        </Fragment>,

        contact: <Fragment>If you have a great idea (or a bad one indeed) we'd love to hear from you at <a
            href='mailto:contact@zerodays.dev'>contact@zerodays.dev</a>.</Fragment>

    },
});

strings.setLanguage('en');

export {languages};
export default strings;