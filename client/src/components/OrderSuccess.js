import React from 'react'

function OrderSuccess() {

    return(<>
    
        <div className="container">
            <div className="row">
                <div className="col l10 offset-l1 s12 m12">

                    <h1>Your order has been placed!</h1>
                    <div className="row buttons-row">
                        <a className="button-as" href="/">
                            <div id="carryout-button-div" className="green home-button">
                                <div>
                                    <i className="material-icons carryout-icon">home</i>
                                    <h1 className="button-h1s">Go back home</h1>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="faq-div">
                        <h3>FAQ's</h3>
                        <li>
                            You should have received an email from Domino's confirming your order.
                        </li>
                        <li>
                            If you didn't, you may want to check your credit card to see if it was charged. 
                        </li>
                        <li>
                            If your card was charged, the pizza is on it's way to you! Most likely you gave the wrong email.
                                You can always call your Domino's to confirm.
                        </li>
                        <li>
                            If your card wasn't charged and you didn't get an email, there was an error in your order, and you may want to try again.
                        </li>
                    </div>

                </div>
            </div>
        </div>

    </>)

}

export default OrderSuccess