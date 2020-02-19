import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'

function ClosestStore(props) {

    const [myStore, setMyStore] = useState([])

    useEffect(() => {

        const strAddress = props.address.street
        const cityAddress = props.address.city
        const url = `https://cors-anywhere.herokuapp.com/https://order.dominos.com/power/store-locator?s=${strAddress}&c=${cityAddress}&type=`

        fetch(url)
        .then(response => response.json())
        .then(json => {
            const storeDetails = Object.keys(json.Stores).map((key) => {

                let storeId = json.Stores[key].StoreID

                return(<>
                
                <div>
                    <p>Store #: {json.Stores[key].StoreID}</p>
                    <p>Address: {json.Stores[key].AddressDescription}</p>
                    <p>Phone: {json.Stores[key].Phone}</p>
                    <p>---------------</p>
                    <div className="step-2-div">
                        <h4>Step 2: Choose what you want from the menu</h4>
                        <button onClick={() => props.getStoreID(storeId)}>See the menu</button>
                    </div>
                </div>
                
                </>)

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

const mapDispatchToProps = (dispatch) => {
    return {
        getStoreID: (newStoreId) => dispatch({type: 'STORE_ID_SAVED', storeId: newStoreId})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClosestStore)