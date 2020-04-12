import React from "react";
import PropTypes from "prop-types";

export default function PropertyTile({ property: { key, value, icon } }) {
  return (
    <div class="card text-center">
      <div class="card-body">
        <h5 class="card-title">{key}</h5>
        <p class="card-text">{value}</p>
      </div>
    </div>
  );
}

PropertyTile.propTypes = {
    property: PropTypes.shape({
        key: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool])
    }).isRequired
  };
  
