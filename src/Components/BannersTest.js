import React, { useState } from 'react';
import { BANNERS } from '../shared/banners';

function BannersTest(props) {
    console.log("Render Banner")
    // const renderBanners = BANNERS.map((item) => (<li>{item.name}</li>));
    const [banner, setBanners] = useState({ BANNERS })
    return {BANNERS} ? (
        <div className="col-md-5 m-1">
            <h2>{banner.BANNERS[0].name}</h2>
            {/* <ul>{renderBanners}</ul> */}
        </div>
    ) : (
        <div>
            <p>Banner Data Not Available</p>
        </div>
    );
}

export default BannersTest;