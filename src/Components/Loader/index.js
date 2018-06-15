import React from 'react';
import SVG from 'svg-inline-react';
import './Loader.scss';
import spinner from '../../Images/spinner.svg';
import classNames from 'classnames';

export default function Loader ({size}) {
  return (
    <div className={classNames('Loader', size && `Loader--${size}`)}>
      <SVG src={spinner}/>
    </div>
  );
}
