import React from "react";

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
