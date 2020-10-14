import React from 'react';
import { Link } from 'react-router-dom';

function PortfolioItem({ info, img, alt, link }) {
  return (
    <>
      <div className="col_area">
        <div className="img_area ani_cover" data-offset="70%">
          <figure className="figure">
            <Link to={info.link || '#'} target="_black">
              <img src={info.img} alt={info.title} />
            </Link>
          </figure>
          <div className="cover cover_left"></div>
        </div>
        <div className="desc_area">
          <dl className="desc">
            <dt>
              <span className="field">{info.field}</span>
              {info.title}
            </dt>
            <dd>
              참여도 {info.participation}
              <br />
              {info.language}
            </dd>
          </dl>
          <div className="btn_group">
            <Link
              to={info.link || '#'}
              target="_blank"
              className="btn link center">
              View Site
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PortfolioItem;
