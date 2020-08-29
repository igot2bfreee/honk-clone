import React, { Component } from 'react';
import { BANNERS } from '../shared/banners';

function RenderBanner(props) {
    console.log("Render Banner")
    const renderBanners = BANNERS.map((item) => (<li>{item.name}</li>));
    return {BANNERS} ? (
        <div className="col-md-5 m-1">
            <h2>{BANNERS[0].name}</h2>
            <ul>{renderBanners}</ul>
        </div>
    ) : (
        <div>
            <p>Banner Data Not Available</p>
        </div>
    );
}


class BannersComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="Banner">
                <RenderBanner />
            </div>
        );
    }
}

export default BannersComponent;