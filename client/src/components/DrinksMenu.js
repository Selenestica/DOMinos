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

                return (
                    <div>
                        <li className="productName" id={key}>{json.Products[key].Name}</li>
                        <button onClick={() => props.getDrink(drinkId)} className="productButton">2L Bottle</button>
                    </div>
                )
                }
            })

            setMenuData(menuProducts)
        })
    }, [])

    return(<>
    
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