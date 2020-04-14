import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";

export default function Brick({
  brick: {
    itemNo,
    itemDescr,
    colourLikeDescr,
    colourDescr,
    maingroupDescr,
    asset,
    maxQty,
    ip,
    price,
    cid,
    sQty,
    designId,
    priceStr,
    priceWithTaxStr,
    itemUnavailable,
    unavailableLink,
    unavailableReason
  }
}) {
  return (
    <Row>
      <Col md={1} sm={12}>
        <Image src={asset} fluid />
      </Col>
      <Col md={11} sm={12}>
        <h3>{itemDescr}</h3>
        <Table size="sm">
          <thead>
            <tr>
              <th>Quantity</th>
              <th>Item #</th>
              <th>Design Id</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{maxQty}</td>
              <td>{itemNo}</td>
              <td>{designId}</td>
              <td>{colourDescr}</td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}
