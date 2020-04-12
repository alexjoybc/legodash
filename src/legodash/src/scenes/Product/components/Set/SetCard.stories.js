import React from 'react';

import SetCard from './SetCard';

export default {
  component: SetCard,
  title: 'SetCard',
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
  excludeStories: /.*Data$/,
};

export const imageData = {
  src: 'https://www.lego.com/cdn/cs/set/assets/blt8f957cbc4a955eea/60146.jpg',
  alt: 'product 60146'
};

export const setStuntTruckData = {
  id: '1',
  name: 'Stunt Truck',
  productCode: '60146',
  properties: [
    { key: 'Year', value: '2020', icon:'' },
    { key: 'Pieces', value: '91', icon:'' },
    { key: 'Weigth', value: '12', icon:'' },
    { key: 'Category', value: 'Pirate', icon:'' },
  ],
  image: imageData
};


export const setDestroyerData = {
  id: '1',
  name: 'Imperial Star Destroyer™',
  productCode: '75252',
  properties: [
    { key: 'Year', value: '2020', icon:'' },
    { key: 'Pieces', value: '4784', icon:'' },
    { key: 'Weigth', value: '12', icon:'' },
    { key: 'Category', value: 'Star Wars', icon:'' },
  ],
  image: {
    src: 'https://www.lego.com/cdn/cs/set/assets/blt934044fa508776e2/75252.jpg',
    alt: 'product 60146'
  }
};


export const setCargoTrainData = {
  id: '1',
  name: 'Cargo Train',
  productCode: '60198',
  properties: [
    { key: 'Year', value: '2020', icon:'' },
    { key: 'Pieces', value: '4784', icon:'' },
    { key: 'Weigth', value: '12', icon:'' },
    { key: 'Category', value: 'City', icon:'' },
  ],
  image: {
    src: 'https://www.lego.com/cdn/cs/set/assets/blt18158984a1b6b2bf/60198.jpg',
    alt: 'product 60146'
  }
};



export const StuntTruck = () => <SetCard set={{ ...setStuntTruckData }} />;

export const Destroyer = () => <SetCard set={{ ...setDestroyerData }} />;

export const CargoTrain = () => <SetCard set={{ ...setCargoTrainData }} />;
