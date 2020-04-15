import React from 'react';

import Home from '.';

export default {
  component: Home,
  title: 'Home',
  decorators: [story => <div style={{ padding: '0.2rem' }}>{story()}</div>],
  excludeStories: /.*Data$/,
};

export const Default = () => <Home />;