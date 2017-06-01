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
import s from './Student.css';

class Student extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    pro_field: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired,
  };

  render() {
    const { name, pro_field, about, ...props } = this.props;
    return (
      <section className={s.root}>
        <div className={s.student_container}>
          <div className={s.asset_container}>
            <div className={s.asset} style={props.background} />
          </div>
          <div className={s.about}>
            <h4>{name}</h4>
            <h6>{pro_field}</h6>
            <p className={s.student_about}>{about} </p>
          </div>
        </div>
      </section>
    );
  }
}

export default withStyles(s)(Student);
