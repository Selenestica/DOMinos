const initialState = {
    customerAddress: '',
    addressNotNull: false,  
    storeId: '',
    storeIdNotNull: false,
    itemId: [],
    itemName: [],
    isAuthenticated: false,
    token: '',
    userEmail: '',
    drinksMenuOpen: false,
    pizzaMenuOpen: false,
    breadMenuOpen: false,
    dessertMenuOpen: false,
    pastaMenuOpen: false,
    saladMenuOpen: false,
    sandwichMenuOpen: false,
    wingsMenuOpen: false,
}

const reducer = (state = initialState, action) => {

    if (action.type === 'ADDRESS_SAVED') {
        return {
            ...state,
            customerAddress: action.customerInfo,
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

    else if (action.type === 'SAVE_ITEM') {
        return {
            ...state,
            itemId: state.itemId.concat(action.itemId),
            itemName: state.itemName.concat(action.itemName + ', ')
        }
    }

    else if (action.type === 'CLEAR_ORDER') {
        return {
            ...state,
            itemId: [],
            itemName: []
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

    else if (action.type === 'OPEN_DRINKS_MENU') {
        return {
            ...state,
            drinksMenuOpen: true
        }
    }

    else if (action.type === 'CLOSE_DRINKS_MENU') {
        return {
            ...state,
            drinksMenuOpen: false
        }
    }

    else if (action.type === 'OPEN_PIZZA_MENU') {
        return {
            ...state,
            pizzaMenuOpen: true
        }
    }

    else if (action.type === 'CLOSE_PIZZA_MENU') {
        return {
            ...state,
            pizzaMenuOpen: false
        }
    }

    else if (action.type === 'OPEN_BREAD_MENU') {
        return {
            ...state,
            breadMenuOpen: true
        }
    }

    else if (action.type === 'CLOSE_BREAD_MENU') {
        return {
            ...state,
            breadMenuOpen: false
        }
    }

    else if (action.type === 'OPEN_DESSERT_MENU') {
        return {
            ...state,
            dessertMenuOpen: true
        }
    }

    else if (action.type === 'CLOSE_DESSERT_MENU') {
        return {
            ...state,
            dessertMenuOpen: false
        }
    }

    else if (action.type === 'OPEN_PASTA_MENU') {
        return {
            ...state,
            pastaMenuOpen: true
        }
    }

    else if (action.type === 'CLOSE_PASTA_MENU') {
        return {
            ...state,
            pastaMenuOpen: false
        }
    }

    else if (action.type === 'OPEN_SANDWICH_MENU') {
        return {
            ...state,
            sandwichMenuOpen: true
        }
    }

    else if (action.type === 'CLOSE_SANDWICH_MENU') {
        return {
            ...state,
            sandwichMenuOpen: false
        }
    }

    else if (action.type === 'OPEN_SALAD_MENU') {
        return {
            ...state,
            saladMenuOpen: true
        }
    }

    else if (action.type === 'CLOSE_SALAD_MENU') {
        return {
            ...state,
            saladMenuOpen: false
        }
    }

    else if (action.type === 'OPEN_WINGS_MENU') {
        return {
            ...state,
            wingsMenuOpen: true
        }
    }

    else if (action.type === 'CLOSE_WINGS_MENU') {
        return {
            ...state,
            wingsMenuOpen: false
        }
    }

        return state
}

export default reducer
