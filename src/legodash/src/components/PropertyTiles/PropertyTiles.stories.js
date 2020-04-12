import React from 'react';

import PropertyTiles from './PropertyTiles';
// import propertyData from './PropertyTile/PropertyTile.stories.js'

export default {
  component: PropertyTiles,
  title: 'PropertyTiles',
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const defaultPropertiesData = [
    { key: 'Year', value: '2020', icon:'' },
    { key: 'Pieces', value: '34530', icon:'' },
    { key: 'Weigth', value: '12', icon:'' },
    { key: 'Category', value: 'Pirate', icon:'' },
  ];


export const Default = () => <PropertyTiles properties={ defaultPropertiesData } />;

export const Empty = () => <PropertyTiles properties={[]} />;
