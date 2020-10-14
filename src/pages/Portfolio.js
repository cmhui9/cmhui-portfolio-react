import React from 'react';
import PortfolioItem from '../components/Portfolio/PortfolioItem';

export default function Portfolio() {
  const portfolio = [
    {
      field: 'Responsive Web',
      title: 'Portfolio',
      participation: '100%',
      language: 'HTML5, SCSS, jQuery, Javascript',
      link: '',
      img: '/assets/images/img_portfolio19.png',
    },
    {
      field: 'Mobile App',
      title: 'CJ 인마이백',
      participation: '30%',
      language: 'HTML5, SCSS, jQuery, Javascript, Zeplin',
      link: '',
      img: '/assets/images/img_portfolio20.png',
    },
    {
      field: 'Responsive Web',
      title: 'Amorepacific Tour',
      participation: '100%',
      language: 'HTML5, CSS3, jQuery, Javascript',
      link: '',
      img: '/assets/images/img_portfolio20.png',
    },
    {
      field: 'Responsive Web',
      title: 'HomeCC 인테리어',
      participation: '100%',
      language: 'HTML5, CSS3, jQuery, Javascript',
      link: '',
      img: '/assets/images/img_portfolio20.png',
    },
    {
      field: 'SPA React',
      title: '캐나다 멤버십 설화수',
      participation: '95%',
      language: 'React, Material-UI, JSX, ES6, Zeplin',
      link: '',
      img: '/assets/images/img_portfolio20.png',
    },
    {
      field: 'Web',
      title: 'Amorepacific F-Up 시스템',
      participation: '100%',
      language: 'HTML5, CSS3, jQuery, Javascript',
      link: '',
      img: '/assets/images/img_portfolio20.png',
    },
    {
      field: 'Responsive Web',
      title: 'Amorepacific 재단',
      participation: '100%',
      language: 'HTML5, CSS3, jQuery, Javascript',
      link: '',
      img: '/assets/images/img_portfolio20.png',
    },
    {
      field: 'Responsive Web',
      title: 'O-lens Global Mall',
      participation: '30%',
      language: 'HTML5, CSS3, jQuery, Javascript',
      link: '',
      img: '/assets/images/img_portfolio20.png',
    },
    {
      field: 'Responsive Web',
      title: 'Tonymoly Mall',
      participation: '30%',
      language: 'HTML5, CSS3, jQuery, Javascript',
      link: '',
      img: '/assets/images/img_portfolio20.png',
    },
    {
      field: 'Responsive Web',
      title: 'Amorepacific 스마트근무관리 시스템',
      participation: '100%',
      language: 'HTML5, CSS3, jQuery, Javascript',
      link: '',
      img: '/assets/images/img_portfolio20.png',
    },
    {
      field: 'Responsive Web',
      title: '이니스프리 모음재단',
      participation: '90%',
      language: 'HTML5, CSS3, jQuery, Javascript',
      link: '',
      img: '/assets/images/img_portfolio20.png',
    },
    {
      field: 'Responsive Web',
      title: 'Amorepacific AP-TONG',
      participation: '100%',
      language: 'HTML5, CSS3, jQuery, Javascript',
      link: '',
      img: '/assets/images/img_portfolio20.png',
    },
    {
      field: 'Responsive Web',
      title: 'Amorepacific Welfare 복지 시스템',
      participation: '100%',
      language: 'HTML5, CSS3, jQuery, Javascript',
      link: '',
      img: '/assets/images/img_portfolio20.png',
    },
    {
      field: 'Responsive Web',
      title: 'KSTEC',
      participation: '100%',
      language: 'HTML5, CSS3, jQuery, Javascript',
      link: '',
      img: '/assets/images/img_portfolio20.png',
    },
    {
      field: 'Responsive Web',
      title: '한국 핀테크지원센터',
      participation: '100%',
      language: 'HTML5, CSS3, jQuery, Javascript',
      link: '',
      img: '/assets/images/img_portfolio20.png',
    },
    {
      field: 'Responsive Web',
      title: 'eosika',
      participation: '100%',
      language: 'HTML5, CSS3, jQuery, Javascript',
      link: '',
      img: '/assets/images/img_portfolio20.png',
    },
    {
      field: 'Responsive Web',
      title: 'Techross',
      participation: '100%',
      language: 'HTML5, CSS3, jQuery, Javascript',
      link: '',
      img: '/assets/images/img_portfolio20.png',
    },
    {
      field: 'Responsive Web',
      title: 'Techross Campaign',
      participation: '100%',
      language: 'HTML5, CSS3, jQuery, Javascript',
      link: '',
      img: '/assets/images/img_portfolio20.png',
    },
    {
      field: 'Tablet App',
      title: 'miniGold Tablet App',
      participation: '100%',
      language: 'HTML5, CSS3, jQuery, Javascript',
      link: '',
      img: '/assets/images/img_portfolio20.png',
    },
    {
      field: 'Responsive Web',
      title: 'AbyBOM',
      participation: '100%',
      language: 'HTML5, CSS3, jQuery, Javascript',
      link: '',
      img: '/assets/images/img_portfolio20.png',
    },
  ];

  return (
    <section id="portfolio" className="section portfolio_section">
      <h3 className="main_tit">portfolio</h3>
      <article className="col_group">
        {portfolio.map((info, idx) => (
          <PortfolioItem key={idx} info={info} />
        ))}
      </article>
    </section>
  );
}
