import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'

function ClosestStore(props) {

    const [myStore, setMyStore] = useState([])

   
    //console.log(url)

    useEffect(() => {

        const strAddress = props.address.street
        const cityAddress = props.address.city
        const url = `https://cors-anywhere.herokuapp.com/https://order.dominos.com/power/store-locator?s=${strAddress}&c=${cityAddress}&type=`


        console.log(url)
        fetch(url)
        .then(response => response.json())
        .then(json => {
            console.log(json)
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

const mapStateToProps = (state) => {
    return {
        address: state.customerAddress,
    }
}

export default connect(mapStateToProps)(ClosestStore)