import React, { Component } from 'react';
import './Products.scss';

class Products extends Component {
  render () {
    const { products } = this.props;
    return <div className="Products">
      <h2 className="Products-title">› Products ({products.length}):</h2>
      <ul className="Products-list">
        {products.map(({name, image, brand, price, id}) => (
          <li className="Products-list__item" key={id}>
            <div className="Card">
              <div className="Card-image"><img src={image} alt={name} /></div>
              <div className="Card-title">{name}</div>
              <div className="Card-brand">by {brand}</div>
              <div className="Card-price">$ {price.toString().replace(/(.{2})$/, '.$1')}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  }
}

export default Products;
