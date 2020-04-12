import React from 'react';

import Preview from './Preview';

export default {
  component: Preview,
  title: 'Preview',
  // Our exports that end in "Data" are not stories.
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
  excludeStories: /.*Data$/,
};

export const imageData = {
  src: 'https://www.lego.com/cdn/cs/set/assets/blt8f957cbc4a955eea/60146.jpg',
  alt: 'product 60146'
};

export const notAnImageData = {
    src: '',
    alt: 'product 60146'
  };

export const Default = () => <Preview image={{ ...imageData }} />;

export const NoImage = () => <Preview image={{ ...notAnImageData }} />;
