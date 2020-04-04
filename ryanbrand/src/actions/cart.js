import ApiUrl from "../api/config"
const log = console.log;

export const viewCart = (allItemsComp, app) => {
    // the URL for the request
    const url = ApiUrl + "/cart/" + app.state.currentUser;
    fetch(url, {credentials: 'include'})
        .then((res) => {
            if (res.status === 200){
                log("successfully retrieved all cart items");
                return res.json()
            } else {
                alert('Could not get products');
            }
        }).then(json => {
        log("Let's snag this sourdough")
        allItemsComp.setState({ data: json, isLoaded: true})
    }).catch(error => {
        log(error);
    })
};

export const getTotal = (cartComp, app) => {
    // the URL for the request
    const url = ApiUrl + "/cart/" + app.state.currentUser;
    fetch(url, {credentials: 'include'})
        .then((res) => {
            if (res.status === 200){
                log("successfully retrieved all cart items");
                return res.json()
            } else {
                alert('Could not get products');
            }
        }).then(json => {
        log("Let's yeet this wheat");
        let total = 0;
        json.forEach(item => total += (item.quantity * item.price));
        cartComp.setState({total: total})
    }).catch(error => {
        log(error);
    })
};
export const removeItem = (itemListComp, item, app, cart) => {
    const filteredItems = itemListComp.state.data.filter(i => {
        return i !== item
    });

    let total = 0;
    filteredItems.forEach(item => total += (item.quantity * item.price));

    itemListComp.setState({
        data: filteredItems,
    });

    cart.setState({
        total: total
    });

    const url = ApiUrl + "/cart/" + app.state.currentUser + "/" + item._id
    const request = new Request(url, {
        method: "delete",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });
    fetch(request, {credentials: 'include'})
        .then(function (res) {
            if (res.status === 200) {
                console.log('product was removed from cart');
                alert(item.name + " was removed from your cart")
            } else {
                console.log('failed to remove product from cart')
            }
        })
};

export const addToCartClick = (detail, quantity, app) => {
    console.log(detail, app);
    if (app.state.currentUser === null) {
        window.location.href = '/login'
    } else {
        const url = ApiUrl + "/cart/" + app.state.currentUser;
        const add = {quantity: quantity, name: detail.name};
        const request = new Request(url, {
            method: "post",
            body: JSON.stringify(add),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        });
    fetch(request, {credentials: 'include'})
        .then(function (res) {
            // Handle response we get from the API.
            // Usually check the error codes to see what happened.
            if (res.status === 200) {
                console.log('added product to cart');
                alert(quantity + " " + detail.name + " has been added to your cart")
            } else {
                console.log('failed to add product to cart')
            }
        })
        .catch(error => {
            console.log(error);
        });
    }
};
