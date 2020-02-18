const initialState = {
    customerAddress: '',
    addressNotNull: false,  
    storeId: '',
    storeIdNotNull: false,
    pizzaId: '',
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

    else if (action.type === 'SAVE_PIZZA') {
        return {
            ...state,
            pizzaId: action.pizzaId
        }
    }

        return state
}

export default reducer
