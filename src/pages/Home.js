import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import Person from './Person';
import Skills from './Skills';
import Portfolio from './Portfolio';

const BgArea = styled.div`
  ${(props) =>
    props.open &&
    css`
      transform: translate3d(-30%, 0%, 0px);
    `}
`;

const MainFigure = styled.div`
  ${(props) =>
    props.show &&
    css`
      opacity: 1;
    `}
`;

export default function Home() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  window.onload = () => {
    setOpen(true);
    setShow(true);
  };

  return (
    <>
      <BgArea className="bg_area" open={open}></BgArea>
      <section id="home" className="section main_section">
        <div className="obj_area">
          <span className="field">portfolio 2020</span>
          <h3 className="obj">
            choi
            <br />
            myeonghui
          </h3>
          <nav className="sub_nav">
            <ul className="btn_group">
              <li>
                <Link to="#person" className="btn link scrl_link">
                  PERSON
                </Link>
              </li>
              <li>
                <Link to="#skills" className="btn link scrl_link">
                  SKILLS
                </Link>
              </li>
              <li>
                <Link to="#portfolio" className="btn link scrl_link">
                  PORTFOLIO
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <MainFigure className="figure_main" show={show}>
          <img src="../assets/images/img_main_visual.svg" alt="main visual" />
        </MainFigure>
      </section>
      <Person />
      <Skills />
      <Portfolio />
    </>
  );
}
