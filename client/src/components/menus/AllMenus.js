import React from 'react'
import {connect} from 'react-redux'
import DrinksMenu from './individualMenus/DrinksMenu'
import PizzaMenu from './individualMenus/PizzaMenu'
import BreadMenu from './individualMenus/BreadMenu'
import DessertMenu from './individualMenus/DessertMenu'
import PastaMenu from './individualMenus/PastaMenu'
import SaladMenu from './individualMenus/SaladMenu'
import SandwichMenu from './individualMenus/SandwichMenu'
import WingsMenu from './individualMenus/WingsMenu' 

function AllMenus(props) {

  return (<>
  
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
  
  </>)

}

const mapDispatchToProps = (dispatch) => {
  return {
      openDrinksMenu: () => dispatch({type: 'OPEN_DRINKS_MENU'}),
      openPizzaMenu: () => dispatch({type: 'OPEN_PIZZA_MENU'}),
      openBreadMenu: () => dispatch({type: 'OPEN_BREAD_MENU'}),
      openDessertMenu: () => dispatch({type: 'OPEN_DESSERT_MENU'}),
      openPastaMenu: () => dispatch({type: 'OPEN_PASTA_MENU'}),
      openSaladMenu: () => dispatch({type: 'OPEN_SALAD_MENU'}),
      openSandwichMenu: () => dispatch({type: 'OPEN_SANDWICH_MENU'}),
      openWingsMenu: () => dispatch({type: 'OPEN_WINGS_MENU'}),

  }
}

const mapStateToProps = (state) => {
  return {
    drinksMenuOpen: state.drinksMenuOpen,
    pizzaMenuOpen: state.pizzaMenuOpen,
    breadMenuOpen: state.breadMenuOpen,
    dessertMenuOpen: state.dessertMenuOpen,
    pastaMenuOpen: state.pastaMenuOpen,
    saladMenuOpen: state.saladMenuOpen,
    sandwichMenuOpen: state.sandwichMenuOpen,
    wingsMenuOpen: state.wingsMenuOpen,
    addressNotNull: state.addressNotNull,
    storeIdNotNull: state.storeIdNotNull,
    storeId: state.storeId,
    itemId: state.itemId,
    itemName: state.itemName,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllMenus)