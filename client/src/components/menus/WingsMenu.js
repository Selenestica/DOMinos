import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'

function WingsMenu(props) {

    const [menuData, setMenuData] = useState([])

    useEffect(() => {

        const storeId = props.storeId

        fetch(`https://cors-anywhere.herokuapp.com/https://order.dominos.com/power/store/${storeId}/menu?lang=en&structured=true`)
        .then(response => response.json())
        .then(json =>  {

            const menuProducts = Object.keys(json.Products).map((key) => {
                if (json.Products[key].ProductType === "Wings") {

                let itemId = json.Products[key].Variants[0]
                let itemName = json.Products[key].Name
                let itemDescription = json.Products[key].Description

                return (<>
                    <div className="product-div">
                        <div className="product-name"><b>{itemName}</b></div>
                        <div>{itemDescription} 8 wings.</div>
                        <button onClick={() => props.getItem(itemId, itemName)} className="product-button green">Add to order</button>
                    </div>
                </>)
                }
            })

            setMenuData(menuProducts)
        })
    }, [])

    return(<>
    
        <i className="material-icons carryout-icon large">local_dining</i>
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
        getItem: (newItem, newItemName) => dispatch({type: 'SAVE_ITEM', itemId: newItem, itemName: newItemName})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WingsMenu)