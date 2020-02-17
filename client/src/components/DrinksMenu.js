import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'

function DrinksMenu(props) {

    const [menuData, setMenuData] = useState([])

    useEffect(() => {

        const storeId = props.storeId

        fetch(`https://cors-anywhere.herokuapp.com/https://order.dominos.com/power/store/${storeId}/menu?lang=en&structured=true`)
        .then(response => response.json())
        .then(json =>  {

            //console.log(Object.keys(json.Products))
            const menuProducts = Object.keys(json.Products).map((key) => {
                if (json.Products[key].ProductType === "Drinks")
                return (
                    <div>
                        <li className="productName" id={key}><button className="productButton">{json.Products[key].Name}</button></li>
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

export default connect(mapStateToProps)(DrinksMenu)