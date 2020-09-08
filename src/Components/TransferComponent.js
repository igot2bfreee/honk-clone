import React from 'react';
import BannersComponent from "./BannersComponent"

function Transfer() {
    return(
        <React.Fragment>
            <p>Header </p>
            <BannersComponent />
            <p>Please call the number below to talk to support to continue with this service request.</p>
            <a href="tel:1-866-947-7519">866-947-7519</a>
        </React.Fragment>
    );

}

export default Transfer;