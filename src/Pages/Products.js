import React from 'react';
import ProductsProvider from '../Providers/ProductsProvider';
import RequestState  from '../Utils/RequestState';
import ProductsList from '../Components/ProductsList';
import ErrorDetails from '../Components/ErrorDetails';

export default function Products ({match}) {
  const page = match.params.page || '1';

  return <ProductsProvider page={page}>
    {(requestState, data, error) => <React.Fragment>
      {error ? <ErrorDetails error={error}></ErrorDetails> : ''}
      {data ?
        <ProductsList
          isLoading={requestState === RequestState.Pending}
          products={data.products}
          page={data.page}
          totalPages={data.totalPages}
          total={data.total}></ProductsList> : ''}
    </React.Fragment>}
  </ProductsProvider>
}
