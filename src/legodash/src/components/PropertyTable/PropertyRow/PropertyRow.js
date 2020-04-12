import React from "react";
import PropTypes from "prop-types";

export default function PropertyRow({ property: { key, value } }) {
  return (
    <tr>
      <td>{key}</td>
      <td>{value}</td>
    </tr>
  );
}

PropertyRow.propTypes = {
  property: PropTypes.shape({
    key: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool
    ])
  }).isRequired
};
