import LocalizedStrings from 'react-localization';
import React, { Fragment } from 'react';
import { Typography } from '@material-ui/core';
import clsx from 'clsx';

const languages = ['en', 'sl'];


const strings = new LocalizedStrings({
  en: {
    // app name
    companyName: 'zerodays',
    companySubtitle: 'Customized software development.',
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
      collaborated with <a href='https://404.si'>Zavod 404</a> and built a fully integrated web app. We continue
      to provide maintenance as well as regular upgrades based on user feedback to meet the fast pace of new
      feature requests.
    </Fragment>,

    // oto
    otoTitle: 'OTO mobile app',
    otoDescription: <Fragment>
      We have developed a mobile app shipped together with the OTO Massage Shagger as a video guide medium. It is
      configurable through a custom backend to enable immediate publication of the latest video content.
    </Fragment>,

    // skoz
    skozTitle: 'Educational platform SKOZ',
    skozDescription: <Fragment>
      Web platform SKOZ aims to enable easier planning and oversight of extra-curricular educational activities for high
      schools. It was developed under a national project in collaboration with <a href='https://404.si'>Zavod
      404</a> and <a href='https://gimvic.org'>Gimnazija Vič</a>.
    </Fragment>,

    // skoz
    make3dTitle: 'Make3D',
    make3dDescription: <Fragment>
      Make3D was developed to connect 3D printing specialists with customers in a flawless and cost efficient manner. It
      allows for seamless testing and production of ideas and prototypes for various creators, innovators and tinkerers.
    </Fragment>,

    otherProjects: 'Other recent projects:',
    olloDescription: <Fragment>
      Integration of <a href="https://www.minimax.si/">Minimax</a> and <a href="https://www.posta.si/">Post of
      Slovenia</a> APIs into the retail and distribution workflow of the <a href="https://olloaudio.com/">Ollo
      Audio</a> company.
    </Fragment>,
    tampontrackDescription: <Fragment>
      <a href="https://www.tampontrack.com/">TamponTrack</a> mobile app for automated tracking of tampon usage in order
      to to ensure women's health and well-being.
    </Fragment>,
    wool2loopDescription: <Fragment>
      <a href="https://www.wool2loop.eu/en/">Wool2loop</a> web platform for submission and oversight of objects, 3D
      printed using recycled mineral wool waste.
    </Fragment>,
    zascitimoSiDescription: <Fragment>
      <a href="https://akcija.zascitimo.si/">Zascitimo.si</a> coordination website for aid in distribution of resources
      during the COVID-19 pandemic.
    </Fragment>,
    thisWebsite: <Fragment>
      <a href='https://zerodays.dev'>zerodays.dev</a> website (obviously).
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

strings.setLanguage('en');

export { languages };
export default strings;
