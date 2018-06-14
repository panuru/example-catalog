import React from 'react';
import classNames from 'classnames';
import './Card.scss';

export default function Card ({product}) {
  const {brand, name, slug, type, image, price, size, rating} = product;
  const stars = Math.round(rating / 10) / 2;

  return (
    <a className="Card" href={`#${slug}`}>
      <div className="Card-image">
        <div className="Card-image__inner">
          <img src={image} alt={name} />
        </div>
      </div>
      <div className="Card-brand">{brand}</div>
      <div className="Card-name">{name}</div>
      <div className="Card-type">{type}</div>
      <div className="Card-price">{formatPrice(price)} / {size}</div>
      <div className={classNames(
        'Card-rating',
        `Card-rating--${stars}`
      )}></div>
    </a>
  );
}


function formatPrice (cents) {
  return `$${cents.toString().replace(/(.{2})$/, '.$1')}`;
}
