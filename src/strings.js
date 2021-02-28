import LocalizedStrings from 'react-localization';
import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';
import clsx from 'clsx';
import { LOCAL_STORAGE_KEY_LANGUAGE } from './util/helpers';

const languages = ['en', 'sl'];


const strings = new LocalizedStrings({
  en: {
    // app name
    companyName: 'zerodays',
    companySubtitle: 'software development team',

    // tags
    web: 'web',
    android: 'android',
    ios: 'ios',
    backend: 'backend',
    sysAdmin: 'sys admin',
    robotics: 'robotics',

    // zeroday description
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
      includes mobile app for <a target='_blank' rel='noopener noreferrer'
                                 href="https://apps.apple.com/si/app/grem/id1276023527">iOS</a> and <a
      href="https://play.google.com/store/apps/details?id=com.partyconapp.partycon">Android</a>, <a
      href="https://grem.app/">website</a>, backend platform maintenance and server hosting.
    </Fragment>,

    // spectre
    spectreTitle: '3D printer for pharmaceuticals',
    spectreDescription: <Fragment>
      A pharmaceutical 3D printer controller software and user interface was built from the scratch in association
      with <a target='_blank' rel='noopener noreferrer' href="https://spectrelabs.si/">Spectre Laboratories</a>. It
      allows for rapid prototyping of medical
      tablets for drug production and
      development.
    </Fragment>,

    // sistem 404
    sistem404Title: 'Company management web app',
    sistem404Description: <Fragment>
      To enable flawless project oversight, booking of space, machines and management of other resources, we have
      collaborated with <a target='_blank' rel='noopener noreferrer' href='https://404.si'>Zavod 404</a> and built a
      fully integrated web app. In 2020 a
      separate platform for activity sign-up and payment of publicly available educational programmes. We
      continue to provide maintenance as well as regular upgrades based on user feedback to meet the fast pace of
      new feature requests.
    </Fragment>,

    // oto
    otoTitle: 'OTO mobile app',
    otoDescription: <Fragment>
      We have developed a mobile app shipped together with the <a target='_blank' rel='noopener noreferrer'
                                                                  href='https://massageshagger.com/'>OTO Massage
      Shagger</a> as a video guide medium. It is
      configurable through a custom backend to enable immediate distribution of the latest video content.
    </Fragment>,

    // skoz
    skozTitle: 'Educational platform SKOZ',
    skozDescription: <Fragment>
      Web platform SKOZ was designed for planning and oversight of extra-curricular activities and competitions
      for high
      schools. It was developed under a national project in collaboration with <a target='_blank'
                                                                                  rel='noopener noreferrer'
                                                                                  href='https://404.si'>Zavod
      404</a> and <a target='_blank' rel='noopener noreferrer' href='https://gimvic.org'>Gimnazija Vič</a>.
    </Fragment>,

    // skoz
    make3dTitle: 'Make3D',
    make3dDescription: <Fragment>
      Make3D was developed for <a target='_blank' rel='noopener noreferrer' href="https://404.si">Zavod 404</a> in order
      to connect 3D printing specialists with customers in a flawless and cost efficient
      manner. It allows for seamless testing and production of ideas and prototypes for various creators, innovators and
      tinkerers.
    </Fragment>,

    otherProjects: 'Other recent projects:',
    olloDescription: <Fragment>
      Integration of <a target='_blank' rel='noopener noreferrer' href="https://www.minimax.si/">Minimax</a> and <a
      target='_blank' rel='noopener noreferrer' href="https://www.posta.si/">Post of
      Slovenia</a> APIs into the retail and distribution workflow of the <a target='_blank' rel='noopener noreferrer'
                                                                            href="https://olloaudio.com/">Ollo
      Audio</a> company. <span>Developed under <a target='_blank' rel='noopener noreferrer' href='https://404.si'>Zavod 404</a>.</span>
    </Fragment>,

    tampontrackDescription: <Fragment>
      <a target='_blank' rel='noopener noreferrer' href="https://www.tampontrack.com/">TamponTrack</a> mobile app for
      automated tracking of tampon usage in
      order
      to to ensure women's health and well-being.
    </Fragment>,
    wool2loopDescription: <Fragment>
      <a target='_blank' rel='noopener noreferrer' href="https://www.wool2loop.eu/en/">Wool2loop</a> web platform for
      submission and oversight of objects, 3D printed using recycled mineral wool waste. <span>Developed under <a
      target='_blank' rel='noopener noreferrer' href='https://404.si'>Zavod 404</a>.</span>
    </Fragment>,
    zascitimoSiDescription: <Fragment>
      <a target='_blank' rel='noopener noreferrer' href="https://zascitimo.si/">Zascitimo.si</a> is a coordination
      platform for aid in distribution of
      critical resources during the COVID-19 pandemic.
    </Fragment>,
    thisWebsite: <Fragment>
      <a target='_blank' rel='noopener noreferrer' href='https://zerodays.dev'>zerodays.dev</a> website (obviously).
    </Fragment>,

    dilaDescription: <Fragment>
      <a target='_blank' rel='noopener noreferrer' href='https://dilaboards.com/'>Dillaboards</a> - an online store for
      affordable electric skateboards.
    </Fragment>,

    sievaDescription: <Fragment>
      <a target='_blank' rel='noopener noreferrer' href="http://3dlab.sieva.si/">Sieva 3D lab</a> coordinates 3D
      printing on an industrial metal 3D printer. Users
      can submit their orders, receive quotes and follow production progress. <span>Developed under <a target='_blank'
                                                                                                       rel='noopener noreferrer'
                                                                                                       href='https://404.si'>Zavod 404</a>.</span>
    </Fragment>,

    otherTitle: 'Our story',
    otherDescription: <Fragment>
      Zerodays team dates back to our high school years when we qualified for the <a target='_blank'
                                                                                     rel='noopener noreferrer'
                                                                                     href='https://www.acsl.org/'>American
      Computer Science League</a> finals and scored <a target='_blank' rel='noopener noreferrer'
                                                       href='https://www.acsl.org/acsl/results/2015-2016.htm'>second
      place</a> in the Intermediate 3 Division. Since then we have worked on numerous projects and participated in
      countless competitions and hackathons.

      To name a few:
      <ul>
        <li>Best Earth Observation Hack in <a target='_blank' rel='noopener noreferrer'
                                              href='https://dragonhack.si/'>Dragonhack
          2019</a> and
        </li>
        <li>Best Mobile Hack in <a target='_blank' rel='noopener noreferrer' href='https://dragonhack.si/'>Dragonhack
          2018</a>.
        </li>
      </ul>

      <br/>
      <br/>

      We have also worked on several open source projects and maintain a non profit website <a
      href='https://vicstock.si/'>vicstock.si</a>.

      <br/>
      <br/>

      Our driving goal has always been to work on challenging projects on the forefront of the industry.
    </Fragment>,

    matejDescription: <Fragment>
      <ul>
        <li>mobile developer</li>
        <li>web developer</li>
      </ul>
    </Fragment>,

    vidDescription: <Fragment>
      <ul>
        <li>backend developer</li>
        <li>system administrator</li>
      </ul>
    </Fragment>,

    zigaDescription: <Fragment>
      <ul>
        <li>mobile developer</li>
        <li>web developer</li>
      </ul>
    </Fragment>,

    contact: <Fragment>If you have a great idea (or a bad one indeed) we'd love to hear from you.</Fragment>,

  },
});

// read language preference from local storage
const languagePref = window.localStorage.getItem(LOCAL_STORAGE_KEY_LANGUAGE);
strings.setLanguage(languagePref ? languagePref : 'en');

export { languages };
export default strings;
