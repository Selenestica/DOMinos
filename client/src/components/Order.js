import React, {useState} from 'react'
import {connect} from 'react-redux'
import DrinksMenu from './menus/DrinksMenu'
import PizzaMenu from './menus/PizzaMenu'
import BreadMenu from './menus/BreadMenu'
import DessertMenu from './menus/DessertMenu'
import PastaMenu from './menus/PastaMenu'
import SaladMenu from './menus/SaladMenu'
import SandwichMenu from './menus/SandwichMenu'
import WingsMenu from './menus/WingsMenu' 
import ClosestStore from './ClosestStore'

function Order(props) {

    const [customerInfo, setCustomerInfo] = useState({})

    const handleChange = (e) => {
        setCustomerInfo({
            ...customerInfo,
            [e.target.name]: e.target.value,
            chosenStore: props.storeId,
            itemCode: props.itemId
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
                        <p className="p-titles">Your address</p>
                        <input type="text" onChange={handleChange} name="street" placeholder="street" />
                        <input type="text" onChange={handleChange} name="city" placeholder="city" />
                        <input type="text" onChange={handleChange} name="state" placeholder="state" />
                        <input type="text" onChange={handleChange} name="zip" placeholder="zip code" />
                        <button className="open-menu-button green" onClick={() => props.findStore(customerInfo)}><i className="material-icons carryout-icon small">search</i></button>
                    </div>
                    {props.addressNotNull ? <div className="step-divs">
                        <p className="p-titles">Your Domino's</p>
                        <ClosestStore />
                        <input type="hidden" onChange={handleChange} name="chosenStore" value={props.storeId} />
                        <input type="hidden" onChange={handleChange} name="itemCode" value={props.itemId} />
                        <input type="hidden" onChange={handleChange} name="chosenDeliveryMethod" value="Delivery" />
                    </div> : null}

                    {props.storeIdNotNull ? <div>
                        <div>

                            <div className="row menu-toggle-row">
                                <h5 className="menu-open-buttons" onClick={() => props.openPizzaMenu()}><u>Pizzas</u></h5>
                            </div>
                            {props.pizzaMenuOpen ? <div>
                                <div className="step-divs">
                                    <PizzaMenu />
                                </div>
                            </div> : null}

                            <div className="row menu-toggle-row">
                                <h5 className="menu-open-buttons" onClick={() => props.openDrinksMenu()}><u>Drinks</u></h5>
                            </div>
                            {props.drinksMenuOpen ? <div>
                                <div className="step-divs">
                                    <DrinksMenu />
                                </div>
                            </div> : null}

                            <div className="row menu-toggle-row">
                                <h5 className="menu-open-buttons" onClick={() => props.openBreadMenu()}><u>Bread</u></h5>
                            </div>
                            {props.breadMenuOpen ? <div>
                                <div className="step-divs">
                                    <BreadMenu />
                                </div>
                            </div> : null}

                            <div className="row menu-toggle-row">
                                <h5 className="menu-open-buttons" onClick={() => props.openWingsMenu()}><u>Wings</u></h5>
                            </div>
                            {props.wingsMenuOpen ? <div>
                                <div className="step-divs">
                                    <WingsMenu />
                                </div>
                            </div> : null}

                            <div className="row menu-toggle-row">
                                <h5 className="menu-open-buttons" onClick={() => props.openSandwichMenu()}><u>Sandwiches</u></h5>
                            </div>
                            {props.sandwichMenuOpen ? <div>
                                <div className="step-divs">
                                    <SandwichMenu />
                                </div>
                            </div> : null}

                            <div className="row menu-toggle-row">
                                <h5 className="menu-open-buttons" onClick={() => props.openPastaMenu()}><u>Pasta</u></h5>
                            </div>
                            {props.pastaMenuOpen ? <div>
                                <div className="step-divs">
                                    <PastaMenu />
                                </div>
                            </div> : null}

                            <div className="row menu-toggle-row">
                                <h5 className="menu-open-buttons" onClick={() => props.openDessertMenu()}><u>Dessert</u></h5>
                            </div>
                            {props.dessertMenuOpen ? <div>
                                <div className="step-divs">
                                    <DessertMenu />
                                </div>
                            </div> : null}

                            <div className="row menu-toggle-row">
                                <h5 className="menu-open-buttons" onClick={() => props.openSaladMenu()}><u>Salads</u></h5>
                            </div>
                            {props.saladMenuOpen ? <div>
                                <div className="step-divs">
                                    <SaladMenu />
                                </div>
                            </div> : null}

                            <div className="items-array-div green lighten-5">
                                    <p className="p-order-titles">Your order<i onClick={() => props.clearOrder()} className="material-icons carryout-icon clear-cart-icon">clear</i></p>
                                    <p className="items-array-p"><b>{props.itemName}</b></p>
                            </div>

                        </div>
                    </div> : null}

                    {props.storeIdNotNull ? <div>
                        <h4>Step 3: Enter your info, and place the order!</h4>
                        <div className="step-divs">
                            <p className="p-titles">Contact Info</p>
                            <input type="text" onChange={handleChange} name="firstName" placeholder="first name" />
                            <input type="text" onChange={handleChange} name="lastName" placeholder="last name" />
                            <input type="text" onChange={handleChange} name="email" placeholder="email" />
                            <input type="text" onChange={handleChange} name="phone" placeholder="phone number" />
                        </div>
                        <div className="step-divs">
                            <p className="p-titles">Payment</p>
                            <input type="text" onChange={handleChange} name="cardNumber" placeholder="cc number" />
                            <input type="text" onChange={handleChange} name="expiration" placeholder="expiration" />
                            <input type="text" onChange={handleChange} name="securityCode" placeholder="security code" />
                            <input type="text" onChange={handleChange} name="cardZip" placeholder="zip code" />
                        </div>
                        <div onClick={onHandleSubmitCustomerInfo} className="green place-order-button-div">
                            <a className="place-order-button"><i className="material-icons carryout-icon large">check</i><h1 className="place-order-text">Place order</h1></a>
                        </div>
                   </div> : null}
                </div>

            </div>
        </div>   

    </>)

}

const mapDispatchToProps = (dispatch) => {
    return {
        findStore: (newCustomerInfo) => dispatch({type: 'ADDRESS_SAVED', customerInfo: newCustomerInfo}),
        clearOrder: () => dispatch({type: 'CLEAR_ORDER'}),
        openDrinksMenu: () => dispatch({type: 'OPEN_DRINKS_MENU'}),
        closeDrinksMenu: () => dispatch({type: 'CLOSE_DRINKS_MENU'}),
        openPizzaMenu: () => dispatch({type: 'OPEN_PIZZA_MENU'}),
        closePizzaMenu: () => dispatch({type: 'CLOSE_PIZZA_MENU'}),
        openBreadMenu: () => dispatch({type: 'OPEN_BREAD_MENU'}),
        openBreadMenu: () => dispatch({type: 'OPEN_BREAD_MENU'}),
        openDessertMenu: () => dispatch({type: 'OPEN_DESSERT_MENU'}),
        closeDessertMenu: () => dispatch({type: 'CLOSE_DESSERT_MENU'}),
        openPastaMenu: () => dispatch({type: 'OPEN_PASTA_MENU'}),
        closePastaMenu: () => dispatch({type: 'CLOSE_PASTA_MENU'}),
        openSaladMenu: () => dispatch({type: 'OPEN_SALAD_MENU'}),
        closeSaladMenu: () => dispatch({type: 'CLOSE_SALAD_MENU'}),
        openSandwichMenu: () => dispatch({type: 'OPEN_SANDWICH_MENU'}),
        closeSandwichMenu: () => dispatch({type: 'CLOSE_SANDWICH_MENU'}),
        openWingsMenu: () => dispatch({type: 'OPEN_WINGS_MENU'}),
        closeWingsMenu: () => dispatch({type: 'CLOSE_WINGS_MENU'}),

    }
}

const mapStateToProps = (state) => {
    return {
        addressNotNull: state.addressNotNull,
        storeIdNotNull: state.storeIdNotNull,
        storeId: state.storeId,
        itemId: state.itemId,
        itemName: state.itemName,
        drinksMenuOpen: state.drinksMenuOpen,
        pizzaMenuOpen: state.pizzaMenuOpen,
        breadMenuOpen: state.breadMenuOpen,
        dessertMenuOpen: state.dessertMenuOpen,
        pastaMenuOpen: state.pastaMenuOpen,
        saladMenuOpen: state.saladMenuOpen,
        sandwichMenuOpen: state.sandwichMenuOpen,
        wingsMenuOpen: state.wingsMenuOpen
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)