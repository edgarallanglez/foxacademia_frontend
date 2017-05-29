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
import s from './Lecture.css';

class Lecture extends React.Component {
  render() {
    return (
       <div className={s.lecture}>
                <h3>iOS</h3>
                <figure>
                  <img />
                </figure>
                <a href="#" className={s.view_more}> VER MÁS </a>
                <a href="#" className={s.enroll_button}> $$ / INSCRIBEME </a>
              </div>     
              
    );
  }
}

export default withStyles(s)(Lecture);
