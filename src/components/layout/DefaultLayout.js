import React, { useState } from 'react';
import Gnb from './Gnb';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';


function DefaultLayout({active}) {
  const [isShow, setIsShow] = useState(false);
  const [btnOn, setBtnOn] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsShow(!isShow);
    setBtnOn(!btnOn);
  };

	return (
    <header className="header">
      <h1 className="logo">
        <Link to="../../pages/Home">
          <img src={logo} alt="logo" />
        </Link>
      </h1>
      <aside className="aside_job">
        <h2 className="obj">UI/UX / Web Publisher</h2>
      </aside>
      <aside className="aside_personal">
        <ul>
          <li>
            <Link to="https://github.com/cmhui9" target="_blank">
              github
            </Link>
          </li>
        </ul>
      </aside>
      <aside className="aside_scrl">
        <span className="txt">scroll to discover</span>
      </aside>
      <div className={btnOn ? 'btn_nav on' : 'btn_nav'} onClick={handleClick}>
        <span className="dot" data-dot></span>
        <span className="dot" data-dot></span>
        <span className="dot" data-dot></span>
        <span className="dot" data-dot></span>
        <span className="dot" data-dot></span>
        <span className="dot" data-dot></span>
        <span className="dot" data-dot></span>
        <span className="dot" data-dot></span>
        <span className="dot" data-dot></span>
      </div>
      {isShow && <Gnb />}
      <div className="cursor"></div>
      <div className="cursor_follower"></div>
    </header>
  );
}

export default DefaultLayout;