import C from './actionType'

/*
    NOTIFICATION
*/

export const setNotification = (title, message) => {
    return {
        type: C.SET_NOTIFICATION,
        payload: {title: title, message: message}
    }
}

export const clearNotification = () => {
    return {
        type: C.CLEAR_NOTIFICATION,
    }
}

/*
    ITEM
*/

export const setShopCategory = (category) => {
    return {
        type: C.SET_SHOP_CATEGORY,
        payload: category
    }
}

export const setItems = (items) => {
    return {
        type: C.SET_ITEMS,
        payload: items
    }
}

export const removeItem = (itemId) => {
    return {
        type: C.REMOVE_ITEM,
        payload: itemId
    }
}

export const setItemCategories = (categories) => {
    return {
        type: C.SET_ITEM_CATEGORIES,
        payload: categories
    }
}

export const fetchItemCategories = () => dispatch => {
    fetch('http://localhost:8080/item/categories')
    .then(response => response.json())
    .then(resp => {
        if (resp.message === "") {
            dispatch(
                setItemCategories(resp.data)
            )
        }
        else {
            dispatch(
                setNotification("Error", resp.message)
            )
        }

    })
    .catch(error => {
        console.log("Captured an error when fetching")
        console.log(error)
    })
}

export const fetchItems = (category = '') => dispatch => {
    fetch('http://localhost:8080/item/' + category)
    .then(response => response.json())
    .then(resp => {
        if (resp.message === "") {
            dispatch(
                setItems(resp.data)
            )
        }
        else {
            dispatch(
                setNotification("Error", resp.message)
            )
        }

    })
    .catch(error => {
        console.log("Captured an error when fetching")
        console.log(error)
    })
}

export const createItem = (itemInfo) => dispatch => {
    fetch('http://localhost:8080/item/', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(itemInfo)
    })
    .then( response => response.json())
    .then( resp => {
        if (resp.message === "") {
            dispatch(fetchItems())
        }
        else {
            dispatch(
                setNotification("Error", resp.message)
            )
        }
    })
    .catch(error => {
        console.log("Captured an error when creating item")
        console.log(error)
    })
}

export const deleteItem = (itemId) => dispatch => {
    fetch('http://localhost:8080/item/' + itemId, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    })
    .then( response => response.json())
    .then( resp => {
        if (resp.message === "") {
            dispatch(fetchItems())
        }
        else {
            dispatch(
                setNotification("Error", resp.message)
            )
        }
    })
    .catch(error => {
        console.log("Captured an error when deleting item")
        console.log(error)
    })
}

/*
    CART
*/

export const addToCart = (item) => {
    return {
        type: C.ADD_TO_CART,
        payload: item
    }
}

export const removeFromCart = (itemIndex) => {
    return {
        type: C.REMOVE_FROM_CART,
        payload: itemIndex
    }
}

export const clearCart = () => {
    return {
        type: C.CLEAR_CART
    }
}

/*
    USER
*/

export const logIn = (email, password, showErrors = true) => dispatch => {
    fetch('http://localhost:8080/user/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password})
    })
    .then(response => response.json())
    .then( resp => {
        if (resp.message === "") {
            dispatch({
                type: C.LOG_IN,
                payload: resp.data
            })
        }
        else {
            if (showErrors) {
                dispatch(
                    setNotification("Error", resp.message)
                )
            }
        }
    })
    .catch( error => {
        console.log("Captured an error when logging in")
    })
}

export const logOut = () => dispatch => {
    fetch('http://localhost:8080/user/logout', {
        credentials: 'include',
    })
    .then(response => response.json())
    .then( resp => {
        if (resp.message === "") {
            dispatch({
                type: C.LOG_OUT,
            })
        }
        else {
            dispatch(
                setNotification("Error", resp.message)
            )
        }
    })
    .catch( error => {
        console.log("Captured an error when logging out")
    })
}

export const register = (userInfo) => dispatch => {
    fetch('http://localhost:8080/user/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
    })
    .then(response => response.json())
    .then( resp => {
        if (resp.message === "") {
            console.log("Loging in after successful register")
            console.log(userInfo)
            dispatch(
                logIn(userInfo.email, userInfo.password)
            )
        }
        else {
            dispatch(
                setNotification("Error", resp.message)
            )
        }
    })
    .catch( error => {
        console.log("Captured an error when registering")
        console.log(error)
    })

}

