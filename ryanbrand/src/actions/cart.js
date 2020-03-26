import ApiUrl from "../api/config"

export const removeItem = (cart, item) => {
    const filteredItems = cart.state.cart.filter(i => {
        return i !== item
    });

    cart.setState({
        cart: filteredItems,
        total: cart.state.total - item.price
    })
};

export const addToCartClick = (detail, app) => {
    console.log(detail, app);
    // if (app.state.currentUser === null) {
    //     window.location.href = '/login'
    // } else {
        const url = ApiUrl + "/cart/" + app.state.currentUser;
        const add = {quantity: detail.quantity, name: detail.name};
        const request = new Request(url, {
            method: "post",
            body: JSON.stringify(add),
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            }
        });
    fetch(request)
        .then(function (res) {
            // Handle response we get from the API.
            // Usually check the error codes to see what happened.
            if (res.status === 200) {
                console.log('added product to cart')
            } else {
                console.log('failed to add product to cart')
            }
        })
        .catch(error => {
            console.log(error);
        });
    // }
};
