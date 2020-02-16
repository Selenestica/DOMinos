const initialState = {
    customerAddress: '',
    customerStreetAddress: ''
}

const reducer = (state = initialState, action) => {

    if (action.type === 'ADDRESS_SAVED') {
        return {
            ...state,
            customerAddress: action.customerAddress
        }
    }

    else if (action.type === 'STREET_ADDRESS_SAVED') {
        return {
            ...state,
            customerStreetAddress: action.customerStreetAddress
        }
    }

        return state
}

export default reducer
