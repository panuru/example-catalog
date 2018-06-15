import React from 'react';
import Card from '../Card';
import Pagination from '../Pagination';
import Loader from '../Loader';
import './Products.scss';

export default function ProductsList ({ isLoading, products, total, page, totalPages }) {
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
      {isLoading ? <div className="Products-overlay"><Loader></Loader></div> : ''}
      {pagination}
    </div>
  );
}
