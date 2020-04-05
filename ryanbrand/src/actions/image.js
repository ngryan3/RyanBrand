import ApiUrl from "../api/config"
// A function to send a GET request to the web server,
// and then loop through them and add a list element for each image
export const getImages = (tile, product) => {
    // the URL for the request
    const url = ApiUrl + "/images/" + product.name;

    // Since this is a GET request, simply call fetch on the URL
    fetch(url)
        .then(res => {
            if (res.status === 200) {
                // return a promise that resolves with the JSON body
                return res.json();
            } else {
                alert("Could not get images");
            }
        })
        .then(json => {
            // the resolved promise with the JSON body
            tile.setState({ image_url: json.image_url, isLoaded: true});
        })
        .catch(error => {
            console.log(error);
        });
};