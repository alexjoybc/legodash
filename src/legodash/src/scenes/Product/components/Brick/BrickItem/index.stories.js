import React from 'react';

import Brick from '.';

export default {
  component: Brick,
  title: 'Brick',
  decorators: [story => <div style={{ padding: "3rem" }}>{story()}</div>],
  excludeStories: /.*Data$/,
};


export const Default = () => <Brick brick={{ ...brikData }} />;


export const brikData = {
        itemNo: 6100030,
        itemDescr: "BEAM 1X1",
        colourLikeDescr: "Grey",
        colourDescr: "DK. ST. GREY",
        maingroupDescr: "Bricks, Special Circles And Angles",
        asset: "https://www.lego.com/service/bricks/5/2/6100030",
        maxQty: 2,
        ip: false,
        price: -1,
        cid: "CAD",
        sQty: 26761,
        designId: 18654,
        priceStr: "",
        priceWithTaxStr: "",
        itemUnavailable: false,
        unavailableLink: null,
        unavailableReason: null
    };
