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
        .then(json => console.log(json))
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

            <div className="row buttons-row">
                <div className="button-as">
                    <div id="delivery-button-div" className="col l6 s12 m12 purple">
                        <div>
                            <i className="material-icons delivery-icon">drive_eta</i>
                            <button value="Delivery" onClick={handleChange} name="chosenDeliveryMethod"><h1 className="button-h1s">Delivery</h1></button>
                        </div>
                    </div>
                </div>
                <div className="button-as">
                    <div id="carryout-button-div" className="col l6 s12 m12 green">
                        <div>
                            <i className="material-icons carryout-icon">local_convenience_store</i>
                            <button value="Carryout" onClick={handleChange} name="chosenDeliveryMethod"><h1 className="button-h1s">Carryout</h1></button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">

                <div className="col s12 l6">
                    <div className="red lighten-4">
                        <h4>Drinks</h4>
                        {props.storeIdNotNull ? <DrinksMenu /> : null}
                    </div>
                    <div className="red lighten-4">
                        <h4>Pizzas</h4>
                        {props.storeIdNotNull ? <PizzaMenu /> : null}
                        <input required type="number" placeholder="quantity" name="quantity" onChange={handleChange} />
                    </div>
                </div>

                <div className="col s12 m12 l6">
                    <h4>Step 1: Find the Domino's nearest to you</h4>
                    <div className="blue lighten-5">
                        <p>Address</p>
                        <input type="text" onChange={handleAddressChange} name="street" placeholder="street" />
                        <input type="text" onChange={handleAddressChange} name="city" placeholder="city, state, zip code" />
                        <button onClick={() => props.findStore(customerAddress)}>Find your Domino's</button>
                    </div>
                    <div className="blue lighten-5">
                        <p>Your Domino's</p>
                        {props.addressNotNull ? <ClosestStore /> : null}
                        <input type="hidden" onChange={handleChange} name="chosenStore" value={props.storeId} />
                        <input type="hidden" onChange={handleChange} name="itemCode" value={props.pizzaId} />
                    </div>

                    <h4>Step 3: Enter your info, and place the order!</h4>
                    <div className="blue lighten-5">
                        <p>Address</p>
                        <input type="text" onChange={handleChange} name="street" placeholder="street" />
                        <input type="text" onChange={handleChange} name="city" placeholder="city" />
                        <input type="text" onChange={handleChange} name="state" placeholder="state" />
                        <input type="text" onChange={handleChange} name="zip" placeholder="zip code" />
                    </div>
                    <div className="blue lighten-5">
                        <p>Contact Info</p>
                        <input type="text" onChange={handleChange} name="firstName" placeholder="first name" />
                        <input type="text" onChange={handleChange} name="lastName" placeholder="last name" />
                        <input type="text" onChange={handleChange} name="email" placeholder="email" />
                        <input type="text" onChange={handleChange} name="phone" placeholder="phone number" />
                    </div>
                    <div className="blue lighten-5">
                        <p>Payment</p>
                        <input type="text" onChange={handleChange} name="cardNumber" placeholder="cc number" />
                        <input type="text" onChange={handleChange} name="expiration" placeholder="expiration" />
                        <input type="text" onChange={handleChange} name="securityCode" placeholder="security code" />
                        <input type="text" onChange={handleChange} name="cardZip" placeholder="zip code" />
                    </div>
                    <button onClick={onHandleSubmitCustomerInfo}><h1>Place Order</h1></button>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerInfo)