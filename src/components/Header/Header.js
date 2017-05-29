/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';
import backgroundPhoto from './fondo.jpg';

const backgroundStyle = {
  width: '100% !important',
  height: '100vh',
  zIndex: '-1',
  position: 'absolute',
  backgroundImage: `url(${backgroundPhoto})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

class Header extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div style={backgroundStyle} alt="background" />
        <div className={s.gradient} />
        <div className={s.container}>
          <Navigation />
          <div className={s.brand} to="/">
            <img src={logoUrl} srcSet={`${logoUrl2x} 2x`} width="80" height="80" alt="Fox" />
            <span className={s.brandTxt} />
          </div>
          <div className={s.banner}>
            <h1 className={s.bannerTitle}>FOX Academia</h1>
            <p className={s.bannerDesc}>Aprende a materializar tus ideas</p>
            <div className={s.subscribe}> ¡INSCRIBEME! </div>
          </div>
        </div>


      </div>
    );
  }
}

export default withStyles(s)(Header);
