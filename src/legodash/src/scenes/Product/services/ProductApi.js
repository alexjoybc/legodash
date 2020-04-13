
const mockData = {
    id: "1",
    name: "Stunt Truck",
    productCode: "60146",
    properties: [
      { key: "Year", value: "2020", icon: "" },
      { key: "Pieces", value: "91", icon: "" },
      { key: "Weigth", value: "12", icon: "" },
      { key: "Category", value: "Pirate", icon: "" }
    ],
    images: [
      {
        src:
          "https://www.lego.com/cdn/cs/set/assets/blt8f957cbc4a955eea/60146.jpg"
      },
      {
        src:
          "https://www.lego.com/cdn/cs/set/assets/blt6432fbc70e26d6cb/60146_alt1.jpg"
      },
      {
        src:
          "https://www.lego.com/cdn/cs/set/assets/blt9a199b7635a691a1/60146_alt2.jpg"
      },
      {
        src:
          "https://www.lego.com/cdn/cs/set/assets/blt3ed5af4fa976d11b/60146_alt3.jpg"
      },
      {
        src:
          "https://www.lego.com/cdn/cs/set/assets/blt42215ab451dd5542/60146_alt4.jpg"
      }
    ]
  };

export function getProduct(productCode) {
    return mockData;
}
