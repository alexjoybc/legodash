
const mockData = {
    id: '1',
    type: 'Set',
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

export function getProduct(productCode) {
    return mockData;
}
