import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'

function PizzaMenu(props) {

    const [menuData, setMenuData] = useState([])

    useEffect((props) => {

        const storeId = props.storeId

        fetch(`https://cors-anywhere.herokuapp.com/https://order.dominos.com/power/store/${storeId}/menu?lang=en&structured=true`)
        .then(response => response.json())
        .then(json =>  {

            const menuProducts = Object.keys(json.Products).map((key) => {
                if (json.Products[key].ProductType === "Pizza") {

                let itemId = json.Products[key].Variants[4]
                let itemName = json.Products[key].Name
                let itemDescription = json.Products[key].Description

                return (
                    <div className="product-div">
                        <div className="product-name"><b>{itemName}</b></div>
                        <div>{itemDescription}</div>
                        <button onClick={() => props.getItem(itemId, itemName)} name="code" className="pizza-size-button green">Add to order</button>
                    </div>
                )
                }
            })

            setMenuData(menuProducts)
        })
    }, [])

    return(<>

        <i className="material-icons carryout-icon large">local_pizza</i>
        <div className="container">
            <div className="row">
                <div className="col s12">
                    {menuData}
                </div>
            </div>
        </div>
    
    </>)

}

const mapStateToProps = (state) => {
    return {
        storeId: state.storeId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getItem: (newItemId, newItemName) => dispatch({type: 'SAVE_ITEM', itemId: newItemId, itemName: newItemName})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaMenu)