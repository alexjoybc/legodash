import React from "react";

import SetCard from "./SetCard";

export default {
  component: SetCard,
  title: "SetCard",
  decorators: [story => <div style={{ padding: "3rem" }}>{story()}</div>],
  excludeStories: /.*Data$/
};

export const setStuntTruckData = {
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

export const setDestroyerData = {
  id: "1",
  name: "Imperial Star Destroyer™",
  productCode: "75252",
  properties: [
    { key: "Year", value: "2020", icon: "" },
    { key: "Pieces", value: "4784", icon: "" },
    { key: "Weigth", value: "12", icon: "" },
    { key: "Category", value: "Star Wars", icon: "" }
  ],
  images: [
    {
      src:
        "https://www.lego.com/cdn/cs/set/assets/blt934044fa508776e2/75252.jpg"
    },
    {
      src:
        "https://www.lego.com/cdn/cs/set/assets/blt40f9e43bbfb9020b/75252_alt1.jpg"
    },
    {
      src:
        "https://www.lego.com/cdn/cs/set/assets/blt323fa20238889b8a/75252_alt2.jpg"
    },
    {
      src:
        "https://www.lego.com/cdn/cs/set/assets/bltd0e77378a099bbc0/75252_alt3.jpg"
    },
    {
      src:
        "https://www.lego.com/cdn/cs/set/assets/blt2b29c0aba14e5cf8/75252_alt4.jpg"
    }
  ]
};

export const setCargoTrainData = {
  id: "1",
  name: "Cargo Train",
  productCode: "60198",
  properties: [
    { key: "Year", value: "2020", icon: "" },
    { key: "Pieces", value: "4784", icon: "" },
    { key: "Weigth", value: "12", icon: "" },
    { key: "Category", value: "City", icon: "" }
  ],
  images: [
    {
      src:
        "https://www.lego.com/cdn/cs/set/assets/blt18158984a1b6b2bf/60198.jpg"
    },
    {
      src:
        "https://www.lego.com/cdn/cs/set/assets/bltc4471bebd6ac2bdc/60198_alt1.jpg"
    },
    {
      src:
        "https://www.lego.com/cdn/cs/set/assets/blt43ab0955999a8f50/60198_alt2.jpg"
    },
    {
      src:
        "https://www.lego.com/cdn/cs/set/assets/bltb07d9b5567baf355/60198_alt3.jpg"
    },
    {
      src:
        "https://www.lego.com/cdn/cs/set/assets/blta114dd25b0f71c8c/60198_alt4.jpg"
    }
  ]
};

export const StuntTruck = () => <SetCard set={{ ...setStuntTruckData }} />;

export const Destroyer = () => <SetCard set={{ ...setDestroyerData }} />;

export const CargoTrain = () => <SetCard set={{ ...setCargoTrainData }} />;
