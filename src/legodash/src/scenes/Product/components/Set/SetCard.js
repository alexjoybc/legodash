import React from "react";
import PropTypes from "prop-types";
import PropertyTiles from "../../../../components/PropertyTiles/PropertyTiles.js";
import PropertyTable from "../../../../components/PropertyTable/PropertyTable.js";
import Preview from "../../../../components/Preview/Preview.js";

export default function SetCard({
  set: { id, name, productCode, properties, image }
}) {
  return (
    <div class="card p-2">
      <div class="row mb-2">
        <div class="col-md-5">
          <Preview image={image}></Preview>
        </div>
        <div class="col-md-7">
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{productCode}</h6>
            <PropertyTable properties={properties}></PropertyTable>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <PropertyTiles properties={properties}></PropertyTiles>
        </div>
      </div>
    </div>
  );
}

SetCard.propTypes = {
  set: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    productCode: PropTypes.string.isRequired,
    properties: PropTypes.array.isRequired
  })
};
