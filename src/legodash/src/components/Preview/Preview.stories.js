import React from "react";

import Preview from "./Preview";

export default {
  component: Preview,
  title: "Preview",
  // Our exports that end in "Data" are not stories.
  decorators: [
    story => (
      <div style={{ padding: "3rem" }}>
        <div class="card" style={{width: '50rem'}}>{story()}</div>
      </div>
    )
  ],
  excludeStories: /.*Data$/
};

export const imageData = [{
  src: "https://www.lego.com/cdn/cs/set/assets/blt8f957cbc4a955eea/60146.jpg",
}];

export const multiData = [{
    src: "https://www.lego.com/cdn/cs/set/assets/blt18158984a1b6b2bf/60198.jpg",
  }, {
      src: "https://www.lego.com/cdn/cs/set/assets/bltc4471bebd6ac2bdc/60198_alt1.jpg"
  }, {
      src: "https://www.lego.com/cdn/cs/set/assets/blt43ab0955999a8f50/60198_alt2.jpg"
  }, {
      src: "https://www.lego.com/cdn/cs/set/assets/bltb07d9b5567baf355/60198_alt3.jpg"
  }, {
      src: "https://www.lego.com/cdn/cs/set/assets/blta114dd25b0f71c8c/60198_alt4.jpg"
  }];

export const notAnImageData = [
  { src: "" }
];

export const OneImage = () => <Preview images={imageData} />;

export const MultiImage = () => <Preview images={multiData} />;

export const NoImage = () => <Preview images={[]} />;
