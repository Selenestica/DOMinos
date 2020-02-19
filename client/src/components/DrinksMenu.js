import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'

function DrinksMenu(props) {

    const [menuData, setMenuData] = useState([])

    useEffect(() => {

        const storeId = props.storeId

        fetch(`https://cors-anywhere.herokuapp.com/https://order.dominos.com/power/store/${storeId}/menu?lang=en&structured=true`)
        .then(response => response.json())
        .then(json =>  {

            const menuProducts = Object.keys(json.Products).map((key) => {
                if (json.Products[key].ProductType === "Drinks") {

                let drinkId = json.Products[key].Variants[1]

                return (<>
                    <div className="product-div">
                        <div className="product-name"><b>{json.Products[key].Name}</b></div>
                        <div>{json.Products[key].Description} 2L Bottle.</div>
                        <button onClick={() => props.getDrink(drinkId)} className="product-button green">Add to order</button>
                    </div>
                </>)
                }
            })

            setMenuData(menuProducts)
        })
    }, [])

    return(<>
    
        <i className="material-icons carryout-icon large">local_cafe</i>
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
        getDrink: (newDrink) => dispatch({type: 'SAVE_DRINK', drinkId: newDrink})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DrinksMenu)