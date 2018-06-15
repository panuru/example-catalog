import { Component } from 'react';
import RequestState from '../Utils/RequestState';

class BaseProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestState: RequestState.Pending,
      data: null,
      error: null
    };
  }
  componentDidMount() {
    this.setState({requestState: RequestState.Pending});
    this.fetch();
  }
  componentDidUpdate(prevProps, prevState) {
    if (!shallowCompare(prevProps, this.props)) {
      this.setState({requestState: RequestState.Pending});
      this.fetch();
    }
  }
  render () {
    return this.props.children(this.state.requestState, this.state.data, this.state.error)
  }
  /**
   * Must be overridden in subclass component
   */
  fetch () {}
  /**
   * Called from fetch () on success with fetched data
   */
  setData (data) {
    this.setState({
      data,
      error: null,
      requestState: RequestState.Success
    });
  }
  /**
   * Called from fetch () on error with error details
   */
  setError (error) {
    this.setState({
      data: null,
      error,
      requestState: RequestState.Error
    });
  }
}

function shallowCompare (objA, objB) {
  for (let prop in objA) {
    if (objA.hasOwnProperty(prop)) {
      if (objA[prop] !== objB[prop]) {
        return false;
      }
    }
  }
  return true;
}

export default BaseProvider;
