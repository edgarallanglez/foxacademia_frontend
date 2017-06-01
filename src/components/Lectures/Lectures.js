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
import Lecture from '../Lecture';
import s from './Lectures.css';
//import asset1 from '../Lecture/testbadge.png';


//const lectureImage1 = { image: `url(${asset1})` };

const lecture_one = {
  title: 'iOS'
};

class Lectures extends React.Component {
  render() {
    return (
      <section className={s.root}>
        <div className={s.container}>
          <h1>Cursos</h1>
          <div className={s.lectures_container}>
            <div className={s.scroll}>
              <Lecture title={lecture_one.title} />
            </div>
          </div>
        </div>


      </section>
    );
  }
}

export default withStyles(s)(Lectures);
