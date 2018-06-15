import React from 'react';
import ProductsProvider, { RequestState } from '../Providers/ProductsProvider';
import ProductsList from '../Components/ProductsList';
import Loader from '../Components/Loader';
import ErrorDetails from '../Components/ErrorDetails';

export default function Products ({match}) {
  const page = match.params.page || 1;

  return <ProductsProvider page={page}>
    {(requestState, data, error) => <React.Fragment>
      {requestState === RequestState.Pending ? <Loader size='large'></Loader> : ''}
      {requestState === RequestState.Error ? <ErrorDetails error={error}></ErrorDetails> : ''}
      {requestState === RequestState.Success ?
        <ProductsList
          products={data.products}
          page={data.page}
          totalPages={data.totalPages}
          total={data.total}></ProductsList> : ''}
    </React.Fragment>}
  </ProductsProvider>
}
