//"find": "https://order.dominos.com/power/store-locator?s=${line1}&c=${line2}&type=${type}",

import React, {useEffect, useState} from 'react'

function ClosestStore() {

    const [myStore, setMyStore] = useState([])

    useEffect(() => {
        fetch('https://cors-anywhere.herokuapp.com/https://order.dominos.com/power/store-locator?s=1334brittmoorerd&c=houstontx77043&type=')
        .then(response => response.json())
        .then(json => {

            const storeDetails = Object.keys(json.Stores).map((key) => {

                return(<div>
                    <p>Store #: {json.Stores[key].StoreID}</p>
                    <p>Address: {json.Stores[key].AddressDescription}</p>
                    <p>Phone: {json.Stores[key].Phone}</p>
                    <p>---------------</p>
                    </div>)
            })

            setMyStore(storeDetails[0])
        })
    }, [])

    return(<>
    
        {myStore}

    </>)

}

export default ClosestStore