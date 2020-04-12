import React from "react";
import PropertyRow from "./PropertyRow/PropertyRow";

function PropertyTable({ properties }) {
  if (properties.length === 0) {
    return <div>empty</div>;
  }

  return (
    <table class="table">
      <tbody>
        {properties.map(property => (
          <PropertyRow property={property}></PropertyRow>
        ))}
      </tbody>
    </table>
  );
}

export default PropertyTable;
