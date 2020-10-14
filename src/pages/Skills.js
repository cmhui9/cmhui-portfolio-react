import React from 'react';

export default function Skills() {
  return (
    <section id="skills" className="section skills_section">
      <article className="skills_wrap">
        <h3 className="main_tit">skills</h3>
        <ul className="object_lst">
          <li>
            <img src="assets/images/ic_html.png" alt="html5" />
            <span className="obj">HTML5</span>
          </li>
          <li>
            <img src="assets/images/ic_css.png" alt="css3" />
            <span className="obj">CSS3</span>
          </li>
          <li>
            <img src="assets/images/ic_sass.png" alt="sass" />
            <span className="obj">Sass(SCSS)</span>
          </li>
          <li>
            <img src="assets/images/ic_react.svg" alt="react" />
            <span className="obj">React</span>
          </li>
          <li>
            <img src="assets/images/ic_js.png" alt="javascript" />
            <span className="obj">Javascript</span>
          </li>
          <li>
            <img src="assets/images/ic_jq.png" alt="jQuery" />
            <span className="obj">jQuery</span>
          </li>
          <li>
            <img src="assets/images/ic_ps.png" alt="photoshop" />
            <span className="obj">Photoshop</span>
          </li>
          <li>
            <img src="assets/images/ic_ai.png" alt="Illustrator" />
            <span className="obj">Illustrator</span>
          </li>
        </ul>
      </article>
      <article className="tools_wrap">
        <div className="row">
          <h4 className="sub_tit">SCM</h4>
          <ul className="object_lst">
            <li>
              <img src="assets/images/ic_git.png" alt="Git" />
              <span className="obj">Git</span>
            </li>
            <li>
              <img src="assets/images/ic_svn.png" alt="SVN" />
              <span className="obj">SVN</span>
            </li>
          </ul>
        </div>
        <div className="row">
          <h4 className="sub_tit">IDE</h4>
          <ul className="object_lst">
            <li>
              <img src="assets/images/ic_vscode.png" alt="vs code" />
              <span className="obj">VS Code</span>
            </li>
            <li>
              <img src="assets/images/ic_atom.png" alt="Atom" />
              <span className="obj">Atom</span>
            </li>
            <li>
              <img src="assets/images/ic_eclipse.png" alt="Eclipse" />
              <span className="obj">Eclipse</span>
            </li>
          </ul>
        </div>
        <div className="row">
          <h4 className="sub_tit">ETC</h4>
          <ul className="object_lst">
            <li>
              <img src="assets/images/ic_npm.png" alt="npm" />
              <span className="obj">npm</span>
            </li>
            <li>
              <img src="assets/images/ic_node.png" alt="node" />
              <span className="obj">node</span>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
}
