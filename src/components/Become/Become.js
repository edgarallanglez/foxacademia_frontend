/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Slider from 'react-slick';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Become.css';
import Student from '../Student';
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

function NextArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'red' }}
      onClick={onClick}
    ></div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'green' }}
      onClick={onClick}
    ></div>
  );
}


class Become extends React.Component {
  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
    return (
      <section className={s.root}>
        <div className={s.container}>
          <h1>¿Por qué deberías ser un <br/> FOX Student?</h1>
          <div className={s.story_container}>
            <div className={s.story}>
              <h2>DESARROLLADOR</h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
            <div className={s.story}>
              <h2>ESTUDIANTE</h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
            <div className={s.story}>
              <h2>GRADUADO</h2>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Ut enim ad minim veniam, quis nostrud exercitation ullamco.
              </p>
            </div>
          </div>
          <h1>¿Qué opina un FOX Student?</h1>
          <div className={s.feedback_container}>
            <div>
              <Slider {...settings}>
                <div>
                  <Student
                    name={mentor_one.name}
                    pro_field={mentor_one.pro_field}
                    about={mentor_one.about}
                    background={mentor_one.background}
                  />
                </div>
                <div>
                  <Student
                    name={mentor_two.name}
                    pro_field={mentor_two.pro_field}
                    about={mentor_two.about}
                    background={mentor_two.background}
                  />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withStyles(s)(Become);
