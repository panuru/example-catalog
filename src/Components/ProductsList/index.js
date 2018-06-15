import React from 'react';
import Card from '../Card';
import Pagination from '../Pagination';
import './Products.scss';

export default function ProductsList ({ products, total, page, totalPages }) {
  const pagination = (
    <Pagination
      currentPage={page}
      totalPages={totalPages}
      linkTemplate={(page) =>`/products/page/${page}`}></Pagination>
  );

  return (
    <div className="Products">
      <h2 className="Products-title">› Products ({total}):</h2>
      {pagination}
      <ul className="Products-list">
        {products.map((product) => (
          <li className="Products-list__item" key={product.id}>
            <Card product={product}></Card>
          </li>
        ))}
      </ul>
      {pagination}
    </div>
  );
}
