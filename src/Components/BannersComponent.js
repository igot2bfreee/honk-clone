import React, { Component } from 'react';
import { BANNERS } from '../shared/banners';

function RenderBanner() {
    return (
        <div className="col-md-5 m-1">
            <h2>{BANNERS[0].name}</h2>
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