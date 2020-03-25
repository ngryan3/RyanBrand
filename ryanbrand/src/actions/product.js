import ApiUrl from "../api/config"

const log = console.log;

export const getAllProducts = (allProductsComp) => {
    // the URL for the request
    const url = ApiUrl + "/products"
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
}

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
    fetch(request)
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