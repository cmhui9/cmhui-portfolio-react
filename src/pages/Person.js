import React from 'react';

export default function Person() {
  return (
    <section id="person" className="section person_section">
      <h3 className="main_tit">person</h3>
      <div className="inner">
        <article className="img_area">
          <figure className="figure id_pic">
            <span className="thumb"></span>
            <dl className="figcaption">
              <dt>Choi Myeong-hui</dt>
              <dd>Web Publisher / Front-End</dd>
            </dl>
          </figure>
        </article>
        <article className="txt_area">
          <p>
            <em className="fw_b">안녕하세요,</em> 끊임없이 성찰하여 발전하는
            웹퍼블리셔/UI마크업 개발자 최명희입니다.
            <br />
            퍼블리셔 직무로서 프로젝트 협업을 중시하고, 구축 후 다양한 테스트를
            거쳐 최적화된 기능으로 배포하고 모니터링합니다. 재사용성이 가능한
            마크업 코딩을 통해 빠르고 유지보수에 용이한 컴포넌트화된 구조를
            좋아합니다. 리액트 프로젝트에 마크업 개발로 참여한 이후, 최근에는
            프론트엔드에 흥미가 생겨 동영상 강의와 도서 구입 등 자발적 학습으로
            성장하고 있습니다.
          </p>
        </article>
        <article className="img_area">
          <figure className="figure">
            <img src="assets/images/img_self3.jpg" alt="" />
          </figure>
        </article>
      </div>
    </section>
  );
}
