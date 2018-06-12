import React, { Component } from 'react';
import SVG from 'svg-inline-react';
import './App.scss';
import ProductsProvider, { RequestState } from './Providers/ProductsProvider';
import Products from './Views/Products';
import Loader from './Views/Loader';
import ErrorDetails from './Views/ErrorDetails';
import logo from './Images/logo.svg';
import cart from './Images/shopping-cart.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SVG src={logo} className="icon App-logo"/>
          <h1 className="App-title">Demo shop</h1>
          <SVG src={cart} className="icon App-cart"/>
        </header>
        <main role="main" className="App-main">
          <ProductsProvider>
            {(requestState, products, error) => <React.Fragment>
              {requestState === RequestState.Pending ? <Loader size='large'></Loader> : ''}
              {requestState === RequestState.Error ? <ErrorDetails error={error}></ErrorDetails> : ''}
              {requestState === RequestState.Success ? <Products products={products}></Products> : ''}
            </React.Fragment>}
          </ProductsProvider>
        </main>
        <footer className="App-footer">
          <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></div>
        </footer>
      </div>
    );
  }
}

export default App;
