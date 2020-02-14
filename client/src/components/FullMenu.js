import React, {useState, useEffect} from 'react'

function FullMenu() {

    const [menuData, setMenuData] = useState([])

    useEffect(() => {
        fetch('https://cors-anywhere.herokuapp.com/https://order.dominos.com/power/store/6551/menu?lang=en&structured=true')
        .then(response => response.json())
        .then(json =>  {

            //console.log(Object.keys(json.Products))
            const menuProducts = Object.keys(json.Products).map((key) => {
                if (json.Products[key].ProductType === "Drinks" || json.Products[key].ProductType === "Pizza")
                return (
                    <div className="item-div yellow lighten-4">
                        <li id={key}>{json.Products[key].Name}</li>
                        <div>{json.Products[key].Description}</div>
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

export default FullMenu