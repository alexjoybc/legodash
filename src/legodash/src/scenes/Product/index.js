import React from "react";
import PropTypes from "prop-types";
import { getProduct } from "./services/ProductApi";
import SetCard from "./components/Set/SetCard";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export default function Product({ search: { productCode } }) {
  let result = getProduct({ productCode });

  return (
    <div>
      <div class="row">
        <div class="col-md-12">
          <SetCard set={result}></SetCard>
        </div>
      </div>
      <div class="row mt-2">
        <div class="col-md-12">
          <Tabs defaultActiveKey="inventory" id="productTabs">
            <Tab eventKey="inventory" title="Inventory">
              inventory
            </Tab>
            <Tab eventKey="price" title="Profile">
              price
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  search: PropTypes.shape({
    productCode: PropTypes.string.isRequired
  })
};
