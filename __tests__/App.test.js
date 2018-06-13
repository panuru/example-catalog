import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';

// Flush the call stack to make sure async rendering has finished
function flush () {
  return new Promise((resolve) => setTimeout(resolve, 0));
}

it('renders without crashing', async () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

  await flush();
  ReactDOM.unmountComponentAtNode(div);
});
