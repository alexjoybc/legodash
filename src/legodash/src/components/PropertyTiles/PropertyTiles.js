import React from "react";
import PropertyTile from "./PropertyTile/PropertyTile";

function PropertyTiles({ properties }) {
  
    if (properties.length === 0) {
    return <div>empty</div>;
  }

  return (
    <div class="card-deck">
      {properties.map(property => (
        <PropertyTile property={property} ></PropertyTile>
      ))}
    </div>
  );
}

export default PropertyTiles;
