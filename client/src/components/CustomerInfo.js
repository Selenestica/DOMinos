import React, {useState} from 'react'
import {connect} from 'react-redux'
import DrinksMenu from './DrinksMenu'
import PizzaMenu from './PizzaMenu'
import ClosestStore from './ClosestStore'

function CustomerInfo(props) {

    const [customerInfo, setCustomerInfo] = useState({})

    const handleChange = (e) => {
        setCustomerInfo({
            ...customerInfo,
            [e.target.name]: e.target.value,
            chosenStore: props.storeId,
            itemCode: props.pizzaId,
            drinkCode: props.drinkId
        }) 
    }

    const onHandleSubmitCustomerInfo = () => {
        fetch('http://localhost:1200/order/add-order', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(customerInfo)
        }).then(response => response.json())
        .then(window.location.href = "/order-success")
    }

    const [customerAddress, setCustomerAddress] = useState({})

    const handleAddressChange = (e) => {
        setCustomerAddress({
            ...customerAddress,
            [e.target.name]: e.target.value
        }
        )
    }

    return(<>

        <div className="container">
            <div className="row">

                <div className="row">
                    <div className="col s12 m12 l8 offset-l2">
                        <h2>Get pizza in 3 easy steps</h2>
                    </div>
                </div>

                <div className="col l10 offset-l1 s12 m12">
                    <h4>Step 1: Find the Domino's nearest to you</h4>
                    <div className="step-divs">
                        <p>Address</p>
                        <input type="text" onChange={handleAddressChange} name="street" placeholder="street" />
                        <input type="text" onChange={handleAddressChange} name="city" placeholder="city, state, zip code" />
                        <button className="open-menu-button purple" onClick={() => props.findStore(customerAddress)}><i className="material-icons carryout-icon small">search</i></button>
                    </div>
                    {props.addressNotNull ? <div className="step-divs">
                        <p>Your Domino's</p>
                        <ClosestStore />
                        <input type="hidden" onChange={handleChange} name="chosenStore" value={props.storeId} />
                        <input type="hidden" onChange={handleChange} name="itemCode" value={props.pizzaId} />
                        <input type="hidden" onChange={handleChange} name="drinkCode" value={props.drinkId} />
                        <input type="hidden" onChange={handleChange} name="chosenDeliveryMethod" value="Delivery" />
                    </div> : null}

                    {props.storeIdNotNull ? <div>
                        <div>
                            <div className="step-divs">
                                <h4>Drinks</h4>
                                <DrinksMenu />
                                <input required type="number" placeholder="how many drinks?" name="drinkQuantity" onChange={handleChange} />
                            </div>
                            <div className="step-divs">
                                <h4>Pizzas</h4>
                                <PizzaMenu />
                                <input required type="number" placeholder="how many pizzas?" name="quantity" onChange={handleChange} />
                            </div>
                        </div>
                    </div> : null}

                    {props.storeIdNotNull ? <div>
                        <h4>Step 3: Enter your info, and place the order!</h4>
                        <div className="step-divs">
                            <p>Address</p>
                            <input type="text" onChange={handleChange} name="street" placeholder="street" />
                            <input type="text" onChange={handleChange} name="city" placeholder="city" />
                            <input type="text" onChange={handleChange} name="state" placeholder="state" />
                            <input type="text" onChange={handleChange} name="zip" placeholder="zip code" />
                        </div>
                        <div className="step-divs">
                            <p>Contact Info</p>
                            <input type="text" onChange={handleChange} name="firstName" placeholder="first name" />
                            <input type="text" onChange={handleChange} name="lastName" placeholder="last name" />
                            <input type="text" onChange={handleChange} name="email" placeholder="email" />
                            <input type="text" onChange={handleChange} name="phone" placeholder="phone number" />
                        </div>
                        <div className="step-divs">
                            <p>Payment</p>
                            <input type="text" onChange={handleChange} name="cardNumber" placeholder="cc number" />
                            <input type="text" onChange={handleChange} name="expiration" placeholder="expiration" />
                            <input type="text" onChange={handleChange} name="securityCode" placeholder="security code" />
                            <input type="text" onChange={handleChange} name="cardZip" placeholder="zip code" />
                        </div>
                        <div className="green place-order-button-div">
                            <a className="place-order-button" onClick={onHandleSubmitCustomerInfo}><i className="material-icons carryout-icon large">check</i><h1 className="place-order-text">Place order</h1></a>
                        </div>
                   </div> : null}
                </div>

            </div>
        </div>   

    </>)

}

const mapDispatchToProps = (dispatch) => {
    return {
        findStore: (newCustomerAddress) => dispatch({type: 'ADDRESS_SAVED', customerAddress: newCustomerAddress}),
    }
}

const mapStateToProps = (state) => {
    return {
        addressNotNull: state.addressNotNull,
        storeIdNotNull: state.storeIdNotNull,
        storeId: state.storeId,
        pizzaId: state.pizzaId,
        drinkId: state.drinkId
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerInfo)