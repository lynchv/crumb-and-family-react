import C from './actionType'

/*
    ITEM
*/

export const setShopCategory = (category) => {
    return {
        type: C.SET_SHOP_CATEGORY,
        payload: category
    }
}

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
        console.log(resp)
        dispatch(fetchItems())
    })
    .catch(error => {
        console.log("Captured an error when creating item")
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

export const logIn = (email, password) => dispatch => {
    fetch('http://localhost:8080/user/login', {
        method: 'POST',
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
            console.log(resp.message)
        }
    })
    .catch( error => {
        console.log("Captured an error when logging in")
    })
}

export const logOut = () => dispatch => {
    fetch('http://localhost:8080/user/logout')
    .then(response => response.json())
    .then( resp => {
        if (resp.message === "") {
            dispatch({
                type: C.LOG_OUT,
            })
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
            console.log(resp.message)
        }
    })
    .catch( error => {
        console.log("Captured an error when registering")
        console.log(error)
    })

}