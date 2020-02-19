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
                        <div id={key}><b>{json.Products[key].Name}</b></div>
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
                <div className="col s12 l8 offset-l3 m12">
                    {menuData}
                    <p>
                        * This is Domino's national menu. 
                        To see the menu of the store in your area, complete steps 1 and 2 of the order process. Cheers!
                        This app currently only supports the ordering of pizza and drinks. More to come soon!
                    </p>
                </div>
            </div>
        </div>
    
    </>)

}

export default FullMenu