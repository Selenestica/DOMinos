const initialState = {
    customerAddress: '',
    addressNotNull: false,  
    storeId: '',
    storeIdNotNull: false,
    itemId: [],
    itemName: [],
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

    else if (action.type === 'OPEN_DRINKS_MENU') {
        if (state.drinksMenuOpen === false) {
            return {
                ...state,
                drinksMenuOpen: true
            }
        }
        else {
            return {
                ...state,
                drinksMenuOpen: false
            }
        }
    }

    else if (action.type === 'OPEN_PIZZA_MENU') {
        if (state.pizzaMenuOpen === false) {
            return {
                ...state,
                pizzaMenuOpen: true
            }
        }
        else {
            return {
                ...state,
                pizzaMenuOpen: false
            }
        }
    }

    else if (action.type === 'OPEN_BREAD_MENU') {
        if (state.saladMenuOpen === false) {
            return {
                ...state,
                breadMenuOpen: true
            }
        }
        else {
            return {
                ...state,
                breadMenuOpen: false
            }
        }
    }

    else if (action.type === 'OPEN_DESSERT_MENU') {
        if (state.dessertMenuOpen === false) {
            return {
                ...state,
                dessertMenuOpen: true
            }
        }
        else {
            return {
                ...state,
                dessertMenuOpen: false
            }
        }
    }

    else if (action.type === 'OPEN_PASTA_MENU') {
        if (state.pastaMenuOpen === false) {
            return {
                ...state,
                pastaMenuOpen: true
            }
        }
        else {
            return {
                ...state,
                pastaMenuOpen: false
            }
        }
    }

    else if (action.type === 'OPEN_SANDWICH_MENU') {
        if (state.sandwichMenuOpen === false) {
            return {
                ...state,
                sandwichMenuOpen: true
            }
        }
        else {
            return{
                ...state,
                sandwichMenuOpen: false
            }
        }
    }

    else if (action.type === 'OPEN_SALAD_MENU') {
        if (state.saladMenuOpen === false) {
            return {
                ...state,
                saladMenuOpen: true
            }
        }
        else {
            return {
                ...state,
                saladMenuOpen: false
            }
        }
    }

    else if (action.type === 'OPEN_WINGS_MENU') {
        if (state.wingsMenuOpen === false) {
            return {
                ...state,
                wingsMenuOpen: true
            }
        }
        else {
            return {
                ...state,
                wingsMenuOpen: false
            }
        }
    }

        return state
}

export default reducer
