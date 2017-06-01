/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import s from './Layout.css';
import Header from '../Header';
import Philosophy from '../Philosophy';
import Lectures from '../Lectures';
import Team from '../Team';
import Location from '../Location'
import Footer from '../Footer';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <Philosophy />
          <Lectures />
          <Team />
          <Location />
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(s)(Layout);
