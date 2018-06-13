import { Component } from 'react';
import axios from 'axios';

export const RequestState = {
  Pending: 'Pending',
  Success: 'Success',
  Error: 'Error'
};

const apiUrl = (path) => `${process.env.REACT_APP_API_URL}/${path}`;

class ProductsProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestState: RequestState.Pending,
      data: null,
      error: null
    };
  }
  componentDidMount() {
    axios.get(apiUrl('products/'))
      .then(({ data }) => this.setState({ data, requestState: RequestState.Success }))
      .catch((error) => this.setState({ error, requestState: RequestState.Error }));
  }
  render () {
    return this.props.children(this.state.requestState, this.state.data, this.state.error)
  }
}

export default ProductsProvider;
