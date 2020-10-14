import React from 'react';
import { Link } from 'react-router-dom';

function Gnb() {
	return (
    <nav class="nav_wrap on">
      <article class="article nav">
        <div class="inner">
          <ul>
            <li>
              <span class="field">01</span>
              <Link to="#home" class="scrl_link">
                home
              </Link>
            </li>
            <li>
              <span class="field">02</span>
              <Link to="#person" class="scrl_link">
                person
              </Link>
            </li>
            <li>
              <span class="field">03</span>
              <Link to="#skills" class="scrl_link">
                skills
              </Link>
            </li>
            <li>
              <span class="field">04</span>
              <Link to="#portfolio" class="scrl_link">
                portfolio
              </Link>
            </li>
          </ul>
        </div>
      </article>
      <article class="article contact">
        <div class="inner">
          <h3>
            Say <em>Hello!</em>
          </h3>
          <ul>
            <li>
              <span class="field">Email</span>
              <Link to="mailto:cmhui727@gmail.com">cmhui727@gmail.com</Link>
            </li>
            <li>
              <span class="field">Github</span>
              <Link to="https://github.com/cmhui9" target="_blank">
                https://github.com/cmhui9
              </Link>
            </li>
          </ul>
        </div>
      </article>
    </nav>
  );
}

export default Gnb;