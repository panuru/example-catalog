import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SVG from 'svg-inline-react';
import './App.scss';
import ProductsPage from './Pages/Products';
import NotFoundPage from './Pages/NotFound';
import logo from './Images/logo.svg';
import cart from './Images/shopping-cart.svg';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to="/">
              <SVG src={logo} className="icon App-logo"/>
            </Link>
            <h1 className="App-title">Demo shop</h1>
            <SVG src={cart} className="icon App-cart"/>
          </header>
          <main role="main" className="App-main">
            <Switch>
              <Route exact path="/" component={ProductsPage}/>
              <Route path="/products/page/:page" component={ProductsPage}/>
              <Route component={NotFoundPage} />
            </Switch>
          </main>
          <footer className="App-footer">
            <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
