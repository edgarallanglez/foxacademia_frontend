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
import PropTypes from 'prop-types';
import Gmaps from 'react-gmaps';
import s from './Location.css';


class Location extends React.Component {


  render() {
    return (
       <section>
       	<div className={s.info}>
       	info
       	</div>
       	<div className={s.map}>
       		map
       	</div>
       </section>
    );
  }
}

export default withStyles(s)(Location);
