import LocalizedStrings from 'react-localization';
import React, { Fragment } from 'react';
import { LOCAL_STORAGE_KEY_LANGUAGE } from './util/helpers';

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

    // spectre
    spectreDescription: () => <Fragment>
      Pharmaceutical 3D printer controller software and user interface were built from the scratch by Zerodays team in
      association with <a target='_blank' rel='noopener noreferrer' href="https://spectrelabs.si/">Spectre
      Laboratories</a>. Running on the PICOJET D220 they allow for rapid prototyping of medical
      pills for drug development and production.
    </Fragment>,

    // grem
    gremDescription: () => <Fragment>
      <a href='https://grem.app' target='_blank' rel='noopener noreferrer'>Grem!</a> online ticket and event management
      platform was established in 2017 through a productive collaboration of
      Zerodays and Grem! teams and has been continuously evolved since then. Joint development includes <a
      target='_blank' rel='noopener noreferrer' href="https://apps.apple.com/si/app/grem/id1276023527">iOS</a>, <a
      href="https://play.google.com/store/apps/details?id=com.partyconapp.partycon" target='_blank'
      rel='noopener noreferrer'>Android</a> and <a href='https://grem.app' target='_blank'
                                                   rel='noopener noreferrer'>web</a> apps as well as backend platform
      maintenance and server hosting.
    </Fragment>,

    // sistem 404
    sistem404Description: () => <Fragment>
      <a href='https://sistem.404.si/auth/login' target='_blank' rel='noopener noreferrer'>Sistem 404</a> is a fully
      integrated web app custom-made for <a target='_blank' rel='noopener noreferrer' href='https://404.si'>Zavod
      404</a> to simplify in-house project oversight and resource management. A separate module added in 2020 serves as
      a registration and payment platform. Zerodays team continues to provide maintenance as well as regular upgrades
      based on user feedback to meet the fast pace of new feature requests.
    </Fragment>,

    // make3d
    make3dDescription: () => <Fragment>
      Make3D was developed by Zerodays team under <a target='_blank' rel='noopener noreferrer' href="https://404.si">Zavod
      404</a> aiming to bring 3D printing specialists into contact with creators, innovators, and tinkerers. The
      platform allows for rapid testing of ideas and production of prototypes in a quick and cost-efficient manner.
    </Fragment>,

    // ollo
    olloDescription: () => <Fragment>
      <a target='_blank' rel='noopener noreferrer' href="https://www.minimax.si/">Minimax</a> and <a target='_blank'
                                                                                                     rel='noopener noreferrer'
                                                                                                     href="https://www.posta.si/">Post
      of Slovenia</a> APIs were
      integrated into the retail and distribution workflow of the <a target='_blank' rel='noopener noreferrer'
                                                                     href='https://olloaudio.com/'>Ollo
      Audio</a> company. <span>The project was led by <a
      target='_blank' rel='noopener noreferrer' href='https://404.si'>Zavod 404</a>.</span>
    </Fragment>,

    // oto
    otoDescription: () => <Fragment>
      This cross-platform mobile app was developed to be shipped together with the <a target='_blank'
                                                                                      rel='noopener noreferrer'
                                                                                      href='https://massageshagger.com/'>OTO
      Massage Shagger</a> as a video guide medium.
    </Fragment>,

    // dila
    dilaDescription: () => <Fragment>
      <a target='_blank' rel='noopener noreferrer' href='https://dilaboards.com/'>Dillaboards</a> is an online store for
      affordable electric skateboards that was developed and remains to be hosted by Zerodays team.
    </Fragment>,

    // sieva
    sievaDescription: () => <Fragment>
      The <a target='_blank' rel='noopener noreferrer' href="http://3dlab.sieva.si/">Sieva 3D LAB</a> was built for the
      purpose of coordinating the 3D printing order sequence for an industrial metal 3D printer: clients submit their
      orders, receive quotes, and monitor production progress. <span>The project was developed under <a target='_blank'
                                                                                                        rel='noopener noreferrer'
                                                                                                        href='https://404.si'>Zavod 404</a>.</span>
    </Fragment>,

    // wool2loop
    wool2loopDescription: () => <Fragment>
      <a target='_blank' rel='noopener noreferrer' href="https://www.wool2loop.eu/en/">Wool2loop</a> is a web platform
      designed for submission and oversight of 3D models made from recycled mineral wool waste. <span>Developed under <a
      target='_blank' rel='noopener noreferrer' href='https://404.si'>Zavod 404</a>.</span>
    </Fragment>,

    // zascitimo.si
    zascitimoSiDescription: () => <Fragment>
      This coordination website was developed in 2020 to help with distribution of critical resources during the
      COVID-19 pandemic. It was a volunteering project of Zerodays and <a target='_blank'
                                                                          rel='noopener noreferrer'
                                                                          href="https://zascitimo.si/">Zascitimo.si</a> teams.
    </Fragment>,

    // skoz
    skozDescription: () => <Fragment>
      Web platform <a target='_blank' rel='noopener noreferrer' href='https://skoz.si/'>SKOZ</a> is designed for
      planning and oversight of extra-curricular activities and competitions for high
      schools. It was developed as a national project in collaboration with <a target='_blank'
                                                                               rel='noopener noreferrer'
                                                                               href='https://404.si'>Zavod
      404</a> and <a target='_blank' rel='noopener noreferrer' href='https://gimvic.org'>Gimnazija Vič</a>.
    </Fragment>,

    // zerodays.dev
    thisWebsite: () => <Fragment>
      <a target='_blank' rel='noopener noreferrer' href='https://zerodays.dev'>zerodays.dev</a> website (obviously)
    </Fragment>,

    matejDescription: () => <Fragment>
      <ul>
        <li>mobile developer</li>
        <li>web developer</li>
      </ul>
    </Fragment>,

    vidDescription: () => <Fragment>
      <ul>
        <li>backend developer</li>
        <li>system administrator</li>
      </ul>
    </Fragment>,

    zigaDescription: () => <Fragment>
      <ul>
        <li>mobile developer</li>
        <li>web developer</li>
      </ul>
    </Fragment>,
  },
  sl: {
    // app name
    companyName: 'zerodays',
    companySubtitle: 'razvojna ekipa',

    // tags
    web: 'splet',
    android: 'android',
    ios: 'ios',
    backend: 'zaledje',
    sysAdmin: 'sistemska administracija',
    robotics: 'robotika',

    // spectre
    spectreDescription: () => <Fragment>
      Ekipa Zerodays je v sodelovanju s <a target='_blank' rel='noopener noreferrer' href="https://spectrelabs.si/">Spectre
      Laboratories</a> razvila krmilnik in uporabniški vmesnik za tiskanje tablet s 3D tiskalnikom PICOJET D220. To
      omogoča hiter razvoj prototipov in proizvodnjo majhnih količin zdravil.
    </Fragment>,

    // grem
    gremDescription: () => <Fragment>
      Spletna platforma za prodajo vstopnic <a href='https://grem.app' target='_blank'
                                               rel='noopener noreferrer'>Grem!</a> deluje že od leta 2017. Ekipa
      Zerodays je v okviru projekta Grem! razvila aplikaciji za operacijska sistema <a
      target='_blank' rel='noopener noreferrer' href="https://apps.apple.com/si/app/grem/id1276023527">iOS</a> in <a
      href="https://play.google.com/store/apps/details?id=com.partyconapp.partycon" target='_blank'
      rel='noopener noreferrer'>Android</a> ter <a href='https://grem.app' target='_blank'
                                                   rel='noopener noreferrer'>spletno stran</a>. Skrbi tudi za zaledno
      programsko opremo in strežniško gostovanje.
    </Fragment>,

    // sistem 404
    sistem404Description: () => <Fragment>
      <a target='_blank' rel='noopener noreferrer' href='https://sistem.404.si'>Sistem 404</a> je spletna aplikacija,
      razvita posebej za <a target='_blank' rel='noopener noreferrer' href='https://404.si'>Zavod 404</a>. Omogoča
      preprosto vodenje internih projektov in upravljanje z različnimi viri. Leta 2020 je bil dodan še ločen modul, ki
      zunanjim uporabnikom omogoča prijavo in plačila za izobraževalne programe. Ekipa Zerodays še naprej skrbi za
      vzdrževanje in nadgradnjo aplikacije v skladu z odzivi uporabnikov.
    </Fragment>,

    // make3d
    make3dDescription: () => <Fragment>
      Spletna platforma <a target='_blank' rel='noopener noreferrer' href='https://make3d.io'>Make3D</a> je bila razvita
      pod okriljem <a target='_blank' rel='noopener noreferrer' href='https://404.si'>Zavoda 404</a>. Omogoča preprosto
      in učinkovito povezovanje strokovnjakov za 3D tisk z ustvarjalci, izumitelji in domačimi mojstri. Z njo lahko
      vsakdo hitro in učinkovito preizkuša nove ideje in prototipe.
    </Fragment>,

    // ollo
    olloDescription: () => <Fragment>
      Podjetju <a target='_blank' rel='noopener noreferrer' href='https://olloaudio.com/'>Ollo Audio</a> smo pomagali
      poenostaviti njihov sistem prodaje in distribucije izdelkov z integracijo API-jev
      podjetij <a target='_blank' rel='noopener noreferrer' href="https://www.minimax.si/">Minimax</a> in <a
      target='_blank' rel='noopener noreferrer' href="https://www.posta.si/">Pošta
      Slovenije</a>. <span>Projekt je vodil <a
      target='_blank' rel='noopener noreferrer' href='https://404.si'>Zavod 404</a>.</span>
    </Fragment>,

    // oto
    otoDescription: () => <Fragment>
      Razvili smo mobilno aplikacijo za Android in iOS, prek katere si uporabniki lahko ogledajo video vodiče za uporabo
      masažnega pripomočka <a target='_blank'
                              rel='noopener noreferrer'
                              href='https://massageshagger.com/'>OTO
      Massage Shagger</a>.
    </Fragment>,

    // dila
    dilaDescription: () => <Fragment>
      Ekipa Zerodays je razvila in vzdržuje spletno trgovino <a target='_blank' rel='noopener noreferrer'
                                                                href='https://dilaboards.com/'>Dillaboards</a> za
      prodajo električnih rolk po dostopnih cenah.
    </Fragment>,

    // sieva
    sievaDescription: () => <Fragment>
      Spletna aplikacija <a target='_blank' rel='noopener noreferrer' href="http://3dlab.sieva.si/">Sieva 3D
      LAB</a> omogoča usklajevanje naročil za industrijski 3D tiskalnik kovin. Ko stranka odda naročilo, prejme
      predračun, nato pa lahko spremlja potek izdelave. <span>Projekt je vodil <a
      target='_blank' rel='noopener noreferrer' href='https://404.si'>Zavod 404</a>.</span>
    </Fragment>,

    // wool2loop
    wool2loopDescription: () => <Fragment>
      <a target='_blank' rel='noopener noreferrer' href="https://www.wool2loop.eu/en/">Wool2loop</a> je spletna
      platforma za naročanje in spremljanje izdelave 3D modelov, natisnjenih iz recikliranih ostankov steklene
      volne. <span>Projekt razvit pod okriljem <a
      target='_blank' rel='noopener noreferrer' href='https://404.si'>Zavoda 404</a></span>
    </Fragment>,

    // zascitimo.si
    zascitimoSiDescription: () => <Fragment>
      Usklajevalna platforma <a target='_blank'
                                rel='noopener noreferrer'
                                href="https://zascitimo.si/">Zascitimo.si</a> je bila razvita v okviru prostovoljskega
      projekta za organizacijo razdeljevanja nujne opreme med krizo zaradi covida-19.
    </Fragment>,

    // skoz
    skozDescription: () => <Fragment>
      Spletno aplikacijo <a target='_blank' rel='noopener noreferrer' href='https://skoz.si/'>SKOZ</a> smo v okviru
      državnega razpisa razvili v sodelovanju z <a target='_blank'
                                                   rel='noopener noreferrer'
                                                   href='https://404.si'>Zavodom 404</a> in <a target='_blank'
                                                                                               rel='noopener noreferrer'
                                                                                               href='https://gimvic.org'>Gimnazijo
      Vič</a>. Srednjim
      šolam omogoča kakovostno karierno
      usmerjanje nadarjenih dijakov.
    </Fragment>,

    // zerodays.dev
    thisWebsite: () => <Fragment>
      spletna stran <a target='_blank' rel='noopener noreferrer' href='https://zerodays.dev'>zerodays.dev</a><br/>(seveda smo jo naredili sami)
    </Fragment>,

    matejDescription: () => <Fragment>
      <ul>
        <li>razvijalec mobilnih aplikacij</li>
        <li>spletni razvijalec</li>
      </ul>
    </Fragment>,

    vidDescription: () => <Fragment>
      <ul>
        <li>zaledni razvijalec</li>
        <li>sistemski administrator</li>
      </ul>
    </Fragment>,

    zigaDescription: () => <Fragment>
      <ul>
        <li>razvijalec mobilnih aplikacij</li>
        <li>spletni razvijalec</li>
      </ul>
    </Fragment>,
  },
});

// read language preference from local storage
const languagePref = window.localStorage.getItem(LOCAL_STORAGE_KEY_LANGUAGE);
strings.setLanguage(languagePref ? languagePref : 'en');

export default strings;
