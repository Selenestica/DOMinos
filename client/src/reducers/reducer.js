const initialState = {
    customerAddress: '',
    addressNotNull: false    
}

const reducer = (state = initialState, action) => {

    if (action.type === 'ADDRESS_SAVED') {
        return {
            ...state,
            customerAddress: action.customerAddress,
            addressNotNull: true
        }
    }

        return state
}

export default reducer
