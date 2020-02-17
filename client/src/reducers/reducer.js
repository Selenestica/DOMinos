const initialState = {
    customerAddress: '',
    addressNotNull: false,  
    storeId: '',
    storeIdNotNull: false
}

const reducer = (state = initialState, action) => {

    if (action.type === 'ADDRESS_SAVED') {
        return {
            ...state,
            customerAddress: action.customerAddress,
            addressNotNull: true
        }
    }

    else if (action.type === 'STORE_ID_SAVED') {
        return {
            ...state,
            storeId: action.storeId,
            storeIdNotNull: true
        }
    }

        return state
}

export default reducer
