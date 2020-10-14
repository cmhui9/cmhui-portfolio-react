import React from 'react';

export default function Progressbar({ count }) {
  return (
    <>
      <div className="progress">
        <span className="progress_txt">{count}</span>
      </div>
    </>
  );
}
