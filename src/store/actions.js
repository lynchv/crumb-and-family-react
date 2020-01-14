import C from './actionType'

export const addItem = (item) => {
    return {
        type: C.ADD_ITEM,
        payload: item
    }
}

export const removeItem = (itemId) => {
    return {
        type: C.REMOVE_ITEM,
        payload: itemId
    }
}

export const fetchItems = (category = '') => dispatch => {
    fetch('http://localhost:8080/item/' + category)
        .then(response => response.json())
        .then(allItems => {
            allItems.data.forEach((item) => {
                dispatch(addItem(item))
            })
        })
        .catch(error => {
            console.log("Captured an error from API")
        })

}


export const addToCart = (itemId) => {
    return {
        type: C.ADD_TO_CART,
        payload: itemId
    }
}

export const removeFromCart = (itemId) => {
    return {
        type: C.REMOVE_FROM_CART,
        payload: itemId
    }
}

export const clearCart = () => {
    return {
        type: C.CLEAR_CART
    }
}


export const setShopCategory = (category) => {
    return {
        type: C.SET_SHOP_CATEGORY,
        payload: category
    }
}