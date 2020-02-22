const initialState = {
    customerAddress: '',
    addressNotNull: false,  
    storeId: '',
    storeIdNotNull: false,
    pizzaId: [],
    pizzaName: [],
    drinkId: [],
    drinkName: [],
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
            pizzaId: state.pizzaId.concat(action.pizzaId),
            pizzaName: state.pizzaName.concat(action.pizzaName + ' ')
        }
    }

    else if (action.type === 'CLEAR_PIZZA_ORDER') {
        return {
            ...state,
            pizzaName: []
        }
    }

    else if (action.type === 'SAVE_DRINK') {
        return {
            ...state,
            drinkId: state.drinkId.concat(action.drinkId),
            drinkName: state.drinkName.concat(action.drinkName + ' ')
        }
    }

    else if (action.type === 'CLEAR_DRINK_ORDER') {
        return {
            ...state,
            drinkName: []
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
