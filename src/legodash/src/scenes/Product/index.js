import React from "react";
import PropTypes from "prop-types";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import { getProduct } from "./services/ProductApi";
import SetCard from "./components/Set/SetCard";
import BrickList from "./components/BrickList";

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
          <Tabs defaultActiveKey="instructions" id="productTabs">
            <Tab eventKey="instructions" title="Instructions">
              Instructions
            </Tab>
            <Tab eventKey="inventory" title="Inventory">
              <div class="p-2">
                <BrickList bricks={result.bricks}></BrickList>
              </div>
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
