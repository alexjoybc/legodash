import React from "react";
import PropTypes from 'prop-types';
import PropertyTiles from '../../../../components/PropertyTiles/PropertyTiles.js'

export default function SetCard({
  set: { id, name, productCode, properties }
}) {


  console.log({properties});
  console.log("coming form setcar");


  return (
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{productCode}</h6>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <PropertyTiles properties={properties}></PropertyTiles>
      </div>
    </div>
  );
}


SetCard.propTypes = {
  set: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    productCode: PropTypes.string.isRequired,
  })
};
