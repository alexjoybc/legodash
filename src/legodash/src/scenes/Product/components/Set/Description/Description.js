import React from "react";
import PropertyTable from "../../../../../components/PropertyTable/PropertyTable";

export default function SetCard({ description: { properties } }) {
  console.log({ properties });

  return <PropertyTable properties={properties}></PropertyTable>;
}
