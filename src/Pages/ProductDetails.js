import React from 'react';
import { Link } from "react-router-dom";
import ProductDetailsProvider from '../Providers/ProductDetailsProvider';
import RequestState  from '../Utils/RequestState';
import Loader from '../Components/Loader';
import ErrorDetails from '../Components/ErrorDetails';
import Card from '../Components/Card';


export default function ProductDetails ({match}) {
  const slug = match.params.slug;

  return (
    <ProductDetailsProvider slug={slug}>
      {(requestState, data, error) => <React.Fragment>
        {requestState === RequestState.Pending ? <Loader size='large'></Loader> : ''}
        {requestState === RequestState.Error ? <ErrorDetails error={error}></ErrorDetails> : ''}
        {requestState === RequestState.Success ? (
          // TODO extract component and styles
          <div className="ProductDetails" style={{
            'maxWidth': '400px',
            'margin': '0 auto'
          }}>
            <nav style={{
              margin: '2em 0'
            }}><Link to="/">Back to products list</Link></nav>
            <Card product={data}></Card>
          </div>
        ) : ''}
      </React.Fragment>}
    </ProductDetailsProvider>
  );
}
