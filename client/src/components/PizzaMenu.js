import React, {useState, useEffect} from 'react'

function PizzaMenu() {

    const [menuData, setMenuData] = useState([])

    useEffect(() => {
        fetch('https://cors-anywhere.herokuapp.com/https://order.dominos.com/power/store/6551/menu?lang=en&structured=true')
        .then(response => response.json())
        .then(json =>  {

            //console.log(Object.keys(json.Products))
            const menuProducts = Object.keys(json.Products).map((key) => {
                if (json.Products[key].ProductType === "Pizza")
                return (
                    <div>
                        <li className="productName" id={key}>{json.Products[key].Name}</li>
                        <button className="pizza-size-button">{json.Products[key].Variants[0]}</button>
                        <button className="pizza-size-button">{json.Products[key].Variants[3]}</button>
                        <button className="pizza-size-button">{json.Products[key].Variants[6]}</button>
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

export default PizzaMenu