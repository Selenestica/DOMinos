import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'

function PizzaMenu(props) {

    const [menuData, setMenuData] = useState([])

    useEffect(() => {

        const storeId = props.storeId

        fetch(`https://cors-anywhere.herokuapp.com/https://order.dominos.com/power/store/${storeId}/menu?lang=en&structured=true`)
        .then(response => response.json())
        .then(json =>  {

            const menuProducts = Object.keys(json.Products).map((key) => {
                if (json.Products[key].ProductType === "Pizza") {

                let pizzaId = json.Products[key].Variants[4]

                return (
                    <div className="product-div">
                        <div className="product-name"><b>{json.Products[key].Name}</b></div>
                        <div>{json.Products[key].Description}</div>
                        <button onClick={() => props.getPizza(pizzaId)} name="code" className="pizza-size-button green">Add to order</button>
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
        getPizza: (newPizzaId) => dispatch({type: 'SAVE_PIZZA', pizzaId: newPizzaId})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PizzaMenu)