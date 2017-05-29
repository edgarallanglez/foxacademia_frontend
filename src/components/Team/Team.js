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
import s from './Team.css';
import Mentor from '../Mentor';
import asset1 from '../Mentor/mentor1.jpg';
import asset2 from '../Mentor/mentor2.jpg';

const backgroundItem1 = { backgroundImage: `url(${asset1})` };
const backgroundItem2 = { backgroundImage: `url(${asset2})` };

const mentor_one = {
  name: 'Edgar Allan Glez',
  pro_field: 'Full Stack Dev/UI/UX',
  about: 'Apasionado por la tecnología desde siempre, me encanta el como se ve\
          y como puede funcionar mejor un producto, 5 años desarrollando en\
           diferentes plataformas tratando de estar siempre a la vanguardia.',
  background: backgroundItem1,
};

const mentor_two = {
  name: 'El Jeishell',
  pro_field: 'Full Stack Dev/UI/UX',
  about: 'Apasionado por la tecnología desde siempre, me encanta el como se ve\
          y como puede funcionar mejor un producto, 5 años desarrollando en\
           diferentes plataformas tratando de estar siempre a la vanguardia.',
  background: backgroundItem2,
};

class Team extends React.Component {
  render() {
    return (
      <section className={s.root}>
        <div className={s.container}>
          <h1>Equipo</h1>
          <div className={s.team_container}>
            <Mentor
              name={mentor_one.name}
              pro_field={mentor_one.pro_field}
              about={mentor_one.about}
              background={mentor_one.background}
              className={s.mentor_block}
            />
            <Mentor
              name={mentor_two.name}
              pro_field={mentor_one.pro_field}
              about={mentor_one.about}
              background={mentor_two.background}
              className={s.mentor_block}
            />
            <Mentor
              name={mentor_two.name}
              pro_field={mentor_one.pro_field}
              about={mentor_one.about}
              background={mentor_two.background}
              className={s.mentor_block}
            />
            <Mentor
              name={mentor_two.name}
              pro_field={mentor_one.pro_field}
              about={mentor_one.about}
              background={mentor_two.background}
              className={s.mentor_block}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default withStyles(s)(Team);
