import React from 'react';
import './Loader.scss';
import spinner from '../../Images/spinner.svg';
import classNames from 'classnames';

export default function Loader ({size}) {
  return (
    <div className={classNames('Loader', size && `Loader--${size}`)}>
      <img src={spinner} alt="Loading..." />
    </div>
  );
}
