import ApiUrl from "../api/config"
const log = console.log;

export const getAllProducts = (allProductsComp) => {
    // the URL for the request
    const url = ApiUrl + "/products";
    fetch(url)
    .then((res) => {
        if (res.status === 200){
            log("successfully retrieved products");
            return res.json()
        } else {
            alert('Could not get products');
        }
    }).then(json => {
        log('owo')
        allProductsComp.setState({ data: json, isLoaded: true})
    }).catch(error => {
        log(error);
    })
};

export const getSpecificProduct = (productComp) => {
    const url = ApiUrl + "/products/" + productComp.state.id;
    fetch(url)
        .then((res) => {
        if (res.status === 200){
            log("successfully loaded product");
            return res.json()
        } else {
            alert('Could not get product');
        }
    }).then(json => {
        productComp.setState({ name: json.name, price: json.price, description: json.description})
    }).catch(error => {
        log(error);
    })
};

export const addProduct = (formComp) => {
    // the URL for the request
    const url = "/products";

    // The data we are going to send in our request
    const product = formComp.state;
    console.log(product);

    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(product),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    // Send the request with fetch()
    fetch(request, {credentials: 'include'})
        .then(function (res) {
            // Handle response we get from the API.
            // Usually check the error codes to see what happened.
            if (res.status === 200) {
                console.log("Successfully added product")
            } else {
                // If server couldn't add the student, tell the user.
                // Here we are adding a generic message, but you could be more specific in your app.
                console.log("Can not add product")
                alert('A product with the same name has already been created. Please use a different name.')
            }
        })
        .catch(error => {
            console.log(error);
        });
};

export const removeProduct = (productListComp, product) => {
    const filteredItems = productListComp.state.data.filter(i => {
        return i !== product
    });

    console.log(productListComp, product)

    productListComp.setState({
        data: filteredItems,
    });

    const url = ApiUrl + "/products/" + product._id;
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
                console.log('product was removed from database');
                alert(product.name + " was removed from your cart")
            } else {
                console.log('failed to remove product from database')
            }
        })
};