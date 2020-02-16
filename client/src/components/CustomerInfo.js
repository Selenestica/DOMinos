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
            [e.target.name]: e.target.value
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

    const [customerAddress, setCustomerAddress] = useState('')

    const handleAddressChange = (e) => {
        setCustomerAddress(e.target.value)
    }

    const [customerStreetAddress, setCustomerStreetAddress] = useState('')

    const handleStreetAddressChange = (e) => {
        setCustomerStreetAddress(e.target.value)
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
                        <DrinksMenu />
                    </div>
                    <div className="red lighten-4">
                        <h4>Pizzas</h4>
                        <PizzaMenu />
                    </div>
                </div>
                <div className="col s12 m12 l6">
                    <div className="blue lighten-5">
                        <p>Address</p>
                        <input type="text" onChange={handleStreetAddressChange} name="street" placeholder="street" />
                        <button onClick={() => props.findStoreStreet(customerStreetAddress)}>Input</button>
                        <input type="text" onChange={handleAddressChange} name="city" placeholder="city, state, zip code" />
                        <button onClick={() => props.findStore(customerAddress)}>Find your Domino's</button>
                    </div>
                    <div className="blue lighten-5">
                        <p>Your Domino's</p>
                        <ClosestStore />
                    </div>
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
        findStoreStreet: (newCustomerStreetAddress) => dispatch({type: 'STREET_ADDRESS_SAVED', customerStreetAddress: newCustomerStreetAddress})
    }
}

export default connect(null, mapDispatchToProps)(CustomerInfo)