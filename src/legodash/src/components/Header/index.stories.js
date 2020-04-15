import React from "react";

import Header from ".";

export default {
  component: Header,
  title: "Header",
  // Our exports that end in "Data" are not stories.
  decorators: [
    story => (
      <div style={{ padding: "3rem" }}>{story()}</div>
    )
  ],
  excludeStories: /.*Data$/
};

export const Default = () => <Header />;
