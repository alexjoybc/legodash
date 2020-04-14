import React from 'react';

import Product from './index';

export default {
  component: Product,
  title: 'Product',
  decorators: [story => <div style={{ padding: '0.2rem' }}>{story()}</div>],
  excludeStories: /.*Data$/,
};

export const searchData = {
    productCode: '23456'
}

export const WithSet = () => <Product search={{ ...searchData }} />;