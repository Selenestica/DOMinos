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
                if (json.Products[key].ProductType === "Pizza")
                return (
                    <div>
                        <li className="productName" id={key}>{json.Products[key].Name}</li>
                        <button name={json.Products[key].Variants[0]} className="pizza-size-button">{json.Products[key].Variants[0]}</button>
                        <button name={json.Products[key].Variants[3]} className="pizza-size-button">{json.Products[key].Variants[3]}</button>
                        <button name={json.Products[key].Variants[6]} className="pizza-size-button">{json.Products[key].Variants[6]}</button>
                    </div>
                )
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

export default connect(mapStateToProps)(PizzaMenu)