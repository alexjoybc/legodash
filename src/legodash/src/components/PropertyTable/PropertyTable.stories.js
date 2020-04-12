import React from 'react';

import PropertyTable from './PropertyTable';
// import propertyData from './PropertyTile/PropertyTile.stories.js'

export default {
  component: PropertyTable,
  title: 'PropertyTable',
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const defaultPropertiesData = [
    { key: 'Year', value: '2020' },
    { key: 'Pieces', value: '34530' },
    { key: 'Weigth', value: '12' },
    { key: 'Category', value: 'Pirate' },
  ];


export const Default = () => <PropertyTable properties={ defaultPropertiesData } />;

export const Empty = () => <PropertyTable properties={[]} />;
