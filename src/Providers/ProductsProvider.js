import { Component } from 'react';
import axios from 'axios';

export const RequestState = {
  Pending: 'Pending',
  Success: 'Success',
  Error: 'Error'
};

const apiUrl = (path) => `${process.env.REACT_APP_API_URL}/${path}`;
const PER_PAGE = 12;

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
    this.fetch(this.props.page);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.page !== this.props.page) {
      this.fetch(this.props.page);
    }
  }
  render () {
    return this.props.children(this.state.requestState, this.state.data, this.state.error)
  }
  fetch (page) {
    this.setState({
      requestState: RequestState.Pending,
      data: null,
      error: null
    });
    axios.get(apiUrl(`products/?_page=${page}&_limit=${PER_PAGE}`))
      .then(({data, headers}) => {
        const total = headers['x-total-count'];
        this.setState({
          data: {
            products: data,
            total,
            page,
            totalPages: Math.ceil(total / PER_PAGE)
          },
          requestState: RequestState.Success
        })
      })
      .catch((error) => { this.setState({ error, requestState: RequestState.Error }) });
  }
}

export default ProductsProvider;
