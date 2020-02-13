/*
{
  "referer":"https://order.dominos.com/en/pages/order/",
  "sourceUri":"order.dominos.com",
  "store": {
    "find": "https://order.dominos.com/power/store-locator?s=${line1}&c=${line2}&type=${type}",
    "info": "https://order.dominos.com/power/store/${storeID}/profile",
    "menu": "https://order.dominos.com/power/store/${storeID}/menu?lang=${lang}&structured=true"
  },
  "order": {
    "validate": "https://order.dominos.com/power/validate-order",
    "price": "https://order.dominos.com/power/price-order",
    "place": "https://order.dominos.com/power/place-order"
  },
  "track": "https://trkweb.dominos.com/orderstorage/GetTrackerData?"
}
*/ 
 /*console.log(json.Products.S_MARIN.Name)*/
import React, {useState, useEffect} from 'react'

function Menu() {

    const [menuData, setMenuData] = useState([])

    useEffect(() => {
        fetch('https://cors-anywhere.herokuapp.com/https://order.dominos.com/power/store/6551/menu?lang=en&structured=true')
        .then(response => response.json())
        .then(json =>  {

            //console.log(Object.keys(json.Products))
            const menuProducts = Object.keys(json.Products).map((key) => {
                console.log(key, json.Products[key].Name)
                return json.Products[key].Name
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

export default Menu