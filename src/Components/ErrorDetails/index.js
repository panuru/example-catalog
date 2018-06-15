import React from 'react';
import SVG from 'svg-inline-react';
import './ErrorDetails.scss';
import warning from '../../Images/warning.svg';

export default function ErrorDetails ({ error = {} }) {
  let status;
  if (error.status) {
    status = error.status;
  } else if (error.response) {
    status = error.response.status;
  }

  return (
    <div className="ErrorDetails">
      <div className="ErrorDetails-message">
        <SVG className="ErrorDetails-icon icon" src={warning}></SVG>
        <div className="ErrorDetails-text">{
          status === 404 ? 'Page not found' : 'Something went wrong!'
        }</div>
      </div>
    </div>
  );
}
