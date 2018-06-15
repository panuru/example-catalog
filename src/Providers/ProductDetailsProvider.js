import axios from 'axios';
import BaseProvider from './BaseProvider';
import { apiUrl } from '../Utils/Urls';

class ProductDetailsProvider extends BaseProvider {
  fetch () {
    const {slug} = this.props;

    axios.get(apiUrl(`products/${slug}`))
      .then(({data}) => { this.setData(data); })
      .catch((error) => { this.setError(error); });
  }
}

export default ProductDetailsProvider;
