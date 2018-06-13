const url = require('url');
const db = require('../data/db.json');

// Mock axios client to retrieve the data directly from json file,
// bypassing json-server.
module.exports = {
  get: jest.fn((urlString) => {
    // If path is `/products/`, resolves with list of products,
    // otherwise with `undefined`.
    let data;
    const {pathname} = url.parse(urlString, false, true);
    const path = pathname && pathname.replace(/^\/|\/$/g, '');
    console.log(path);

    if (path === 'products') {
      data = db.products;
    }

    return Promise.resolve({data});
  })
};
