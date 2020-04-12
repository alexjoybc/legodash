import React from 'react';

import PropertyTile from './PropertyTile';

export default {
  component: PropertyTile,
  title: 'PropertyTile',
  // Our exports that end in "Data" are not stories.
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
  excludeStories: /.*Data$/,
};

export const propertyData = {
  key: 'year',
  value: '2020',
  icon: '',
};

export const Default = () => <PropertyTile property={{ ...propertyData }} />;
