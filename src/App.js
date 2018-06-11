import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import ProductsProvider, { RequestState } from './Providers/ProductsProvider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ProductsProvider>
          {(requestState, products, error) => <React.Fragment>
            {requestState === RequestState.Pending ? <div class="App-loader"></div> : ''}
            {requestState === RequestState.Error ? <div class="App-error">{JSON.stringify(error)}</div> : ''}
            {requestState === RequestState.Success ? (
              <div className="Products">
                <h2>Products:</h2>
                <ul>
                  {products.map(({name, id}) => (
                    <li key={id}>ID: {id}; name: {name}</li>
                  ))}
                </ul>
              </div>
            ) : ''}
          </React.Fragment>}
        </ProductsProvider>
      </div>
    );
  }
}

export default App;
