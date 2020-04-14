import React from 'react';

import Description from './Description';

export default {
  component: Description,
  title: 'Description',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};


export const descriptionData = { properties: [
    { key: 'Year', value: '2020' },
    { key: 'Pieces', value: '91'  },
    { key: 'Weigth', value: '12' },
    { key: 'Category', value: 'Pirate' }]};

export const Default = () => <Description description={ descriptionData } />;
