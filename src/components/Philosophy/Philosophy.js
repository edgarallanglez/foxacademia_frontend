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
import s from './Philosophy.css';
import asset1 from './mentor.jpg';
import asset2 from './mentor2.jpg';

const backgroundItem1 = {
  backgroundImage: `url(${asset1})`,
  top: '10%',
  left: '25%',
};

const backgroundItem2 = {
  backgroundImage: `url(${asset2})`,
  top: '30%',
  right: '10%',
};

class Philosophy extends React.Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.philosophy}>
            <h1 className={s.wild}>Filosofía</h1>
            <p>
            Vacía tu mente, piensa sin forma, moldeable, como el agua. Si pones
             agua en una taza, se convierte en la taza, si pones agua en una
             botella se convierte en la botella, si la pones en una tetera se
              convierte en la tetera. El agua puede fluir o puede aplastar.
               Se como el agua." Esperamos ofrecer una ventana a la realidad del
                desarrollo tecnológico en la industria, es decir, poner en
                 practica de forma divertida lo que implica realizar un proyecto
                  real y lo que conlleva</p>
          </div>
          <div className={s.assetContainer}>
            <div className={s.asset} style={backgroundItem1} />
            <div className={s.asset} style={backgroundItem2} />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Philosophy);
