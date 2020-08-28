import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

/*
*********** NOPE... Don't need all of this. LOL, what a learing experience... Was wrong about this being a modal. It's just a page with router and animation

***button for navbar should be something like this***
<span className="navbar-text ml-auto">
    <Button onClick={ }>Close</Button>
</span>

*/

//HelpComponent renders text heavy support page. After laying this out, I want to set up an itemDisplay component that will take props from data object to populate the different question items. this will make updating dynamic and easier. But in essebnce of time, will come back to do that later. other components to build now.
function HelpComponent(){

    return (
        <div className="help-container">
            <div className="help-close">
                <Link className="special-a" to=''>
                    <a type="button" className="special-a btn btn-lg">CLOSE</a>
                </Link>
            </div>
            <div className="help-header">
                <h1>HELP</h1>
                <div className="help-call">
                    <p>Need to speak with a friendly HONK Support representative for assistance?</p>
                    <Link to=''>
                        <Button type="button" className="btn">Call Support</Button>
                    </Link>
                </div>
            </div>
            <h2>GENERAL</h2>
            <div className="item">
                <h3>WHAT IS HONK?</h3>
                <p>HONK is the fastest, easiest way to get the best price when you need a tow or roadside assistance. Get help with just a few taps from your phone.</p>
                <p>We search thousands of nearby trucks and find you the fastest service and best price. No membership fees. No haggling. No cash involved.</p>
            </div>
            <div className="item">
                <h3>HOW TO ORDER ROADSIDE SERVICE HONK!</h3>
                <p>Ordering with HONK is easy. Simply follow these steps:</p>
                <ol>
                    <li>Set your location: Once we know where you are, we can find nearby trucks to help you.</li>
                    <li>Choose towing or roadside: Select "tow" when your car cannot move, or is unsafe to drive and needs to be "carried" away. "Roadside" means you need a tire change, fuel or other fluids, a jump start, or you locked your keys in the car. If you need roadside service, proceed to step 4.</li>
                    <li>Tow: Set your destination and we'll provide an accurate price (including taxes and tip). To set the destination, use the grey map markers or list of auto repair facilities, or enter any address.
                    </li>
                    <li>Confirm your order: Click the "Order Service" button.</li>
                    <li>Payment: Enter your personal details and credit card. Your total price includes all taxes and tip. You will not need to pay your driver.</li>
                </ol>
            </div>
            <h2>FAQ</h2>
            <div className="item">
                <h3>WHAT PAYMENT METHODS ARE ACCEPTED?</h3>
                <p>HONK is a cashless application. You must use a credit or debit card.</p>
            </div>
            <div className="item">
                <h3>WHERE IS MY TRUCK?</h3>
                <p>Our ETA is a best effort time frame.</p>
                <p>If your truck does not arrive within 15 minutes of the ETA, we want to know about it! We review all customer ratings and reviews. Email us with questions at <a href="mailto:support@honkforhelp.com">support@honkforhelp.com</a>.</p>
            </div>
            <div className="item">
                <h3>HOW DOES HONK ENSURE THE QUALITY OF MY RIDE?</h3>
                <p>HONK regularly reviews customer ratings and driver feedback to ensure high quality, highly rated service.</p>
                <p>We actively seek feedback for every ride, and take this feedback very seriously.</p>
                <p>If you ever have questions or feedback about your experience, Community Managers are standing by to help at <a href="mailto:support@honkforhelp.com">support@honkforhelp.com</a>.</p>
            </div>
            <div className="item">
                <h3>WHAT IS HONK'S CANCELLATION POLICY?</h3>
                <p>HONK charges the following for job cancellation:</p>
                <ul>
                    <li>Within 5 minutes of job dispatch time: $0</li>
                    <li>After 5 minutes of job dispatch time and prior to driver arriving on scene: $30</li>
                </ul>
                <p>You will be charged the full amount of the quoted service price for any of the following reasons:</p>
                <ul>
                    <li>Driver is on scene and you decide to cancel for any reason.</li>
                    <li>Driver determines you have inaccurately stated the conditions of your vehicle and that the cost of service will be higher than initially quoted and you elect to cancel the service.</li>
                    <li>You are GOA &#40;Gone On Arrival&#41; and/or fail to cancel the service at all.</li>
                </ul>
            </div>
            <div className="item">
                <h3>WHO IS COMING TO HELP ME?</h3>
                <p>While you are entering your information, our app works with nearby roadside professionals &#40;from our network of 45,000 companies&#41; to find trucks available to service you quickly at the best rate.  Once you have checked out, the local partner will reach out to you directly.</p>
            </div>
        </div>
    );
}

export default HelpComponent;
