import React, { Component } from 'react';
import Card from '../Card';
import './Products.scss';

class Products extends Component {
  render () {
    const { products } = this.props;
    return <div className="Products">
      <h2 className="Products-title">› Products ({products.length}):</h2>
      <ul className="Products-list">
        {products.map((product) => (
          <li className="Products-list__item" key={product.id}>
            <Card product={product}></Card>
          </li>
        ))}
      </ul>
    </div>
  }
}

export default Products;
