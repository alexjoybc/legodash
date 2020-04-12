import React from "react";

import PropertyRow from "./PropertyRow";

export default {
  component: PropertyRow,
  title: "PropertyRow",
  // Our exports that end in "Data" are not stories.
  decorators: [
    story => (
      <div style={{ padding: "3rem" }}>
        <table class="table" >
          <tbody>{story()}</tbody>
        </table>
      </div>
    )
  ],
  excludeStories: /.*Data$/
};

export const propertyData = {
  key: "Price",
  value: "CAD $28.50"
};

export const Default = () => <PropertyRow property={{ ...propertyData }} />;
