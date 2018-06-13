import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'enzyme';
import axios from 'axios';
import App from '../src/App';

// Flush the call stack to make sure async rendering has finished
function flush () {
  return new Promise((resolve) => setTimeout(resolve, 0));
}

async function renderApp () {
  // Mount App and wait for provider data to be processed
  const wrapper = mount(<App />);
  await flush();
  wrapper.update();

  return wrapper;
}

it('renders loader while waiting for data', async () => {
  // Request fn doesn't reject or resolve
  axios.get.mockImplementationOnce(() => new Promise(() => {}));

  const wrapper = await renderApp();
  expect(wrapper.find('Loader').length).toBe(1);
  expect(wrapper.find('Products').length).toBe(0);
  expect(wrapper.find('ErrorDetails').length).toBe(0);
  wrapper.unmount();
});

it('renders product list when data is loaded', async () => {
  const wrapper = await renderApp();
  expect(wrapper.find('Loader').length).toBe(0);
  expect(wrapper.find('Products').length).toBe(1);
  expect(wrapper.find('ErrorDetails').length).toBe(0);
  wrapper.unmount();
});


it('renders product list when data is loaded', async () => {
  axios.get.mockImplementationOnce(() => Promise.reject());

  const wrapper = await renderApp();
  expect(wrapper.find('Loader').length).toBe(0);
  expect(wrapper.find('Products').length).toBe(0);
  expect(wrapper.find('ErrorDetails').length).toBe(1);
  wrapper.unmount();
});
