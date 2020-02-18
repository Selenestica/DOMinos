const initialState = {
    customerAddress: '',
    addressNotNull: false,  
    storeId: '',
    storeIdNotNull: false,
    pizzaId: '',
    isAuthenticated: false,
    token: '',
    userEmail: ''
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

    else if (action.type === 'ON_LOGIN_SUCCESS') {
        return {
            ...state,
            isAuthenticated: true,
            token: action.token
        }
    }

    else if (action.type === 'SIGN_OUT') {
        return {
            ...state,
            isAuthenticated: false,
            token: ''
        }
    }

        return state
}

export default reducer
