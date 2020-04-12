import React from 'react';
//import defaultPropertiesData from '../../../../components/PropertyTiles/PropertyTiles.stories.js'

import SetCard from './SetCard';

export default {
  component: SetCard,
  title: 'SetCard',
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const setData = {
  id: '1',
  name: 'Pirates of Barracuda Bay',
  productCode: '21322',
  properties: [
    { key: 'Year', value: '2020', icon:'' },
    { key: 'Pieces', value: '34530', icon:'' },
    { key: 'Weigth', value: '12', icon:'' },
    { key: 'Category', value: 'Pirate', icon:'' },
  ]
};

export const Default = () => <SetCard set={{ ...setData }} />;
