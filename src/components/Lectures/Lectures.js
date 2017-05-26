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
import s from './Lectures.css';

class Lectures extends React.Component {
  render() {
    return (
      <section className={s.root}>
        <div className={s.container}>
          <h1>Cursos</h1>
          <div className={s.lectures_container}>
            <div className={s.lecture}>
              <h3>iOS</h3>
              <figure>
                <img />
              </figure>
              <a href="#" className={s.view_more}> VER MÁS </a>
              <a href="#" className={s.enroll_button}> $$ / INSCRIBEME </a>
            </div>

             <div className={s.lecture}>
              <h3>iOS</h3>
              <figure>
                <img />
              </figure>
              <a href="#" className={s.view_more}> VER MÁS </a>
              <a href="#" className={s.enroll_button}> $$ / INSCRIBEME </a>
            </div>

             <div className={s.lecture}>
              <h3>iOS</h3>
              <figure>
                <img />
              </figure>
              <a href="#" className={s.view_more}> VER MÁS </a>
              <a href="#" className={s.enroll_button}> $$ / INSCRIBEME </a>
            </div>
            
          </div>
        </div>


      </section>
    );
  }
}

export default withStyles(s)(Lectures);
