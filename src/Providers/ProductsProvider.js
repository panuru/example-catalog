import axios from 'axios';
import BaseProvider from './BaseProvider';
import { apiUrl } from '../Utils/Urls';

const PER_PAGE = 12;

class ProductsProvider extends BaseProvider {
  fetch () {
    const {page} = this.props;

    axios.get(apiUrl(`products/?_page=${page}&_limit=${PER_PAGE}`))
      .then(({data, headers}) => {
        const total = headers['x-total-count'];
        this.setData({
          products: data,
          total,
          page,
          totalPages: Math.ceil(total / PER_PAGE)
        });
      })
      .catch((error) => {
        this.setError(error);
      });
  }
}

export default ProductsProvider;
