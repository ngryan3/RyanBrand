// Functions to help with user actions
import ApiUrl from "../api/config"
// A function to check if a user is logged in on the session cookie
export const readCookie = (app) => {
    const url = ApiUrl + "/users/check-session";

    fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            }
        })
        .then(json => {
            if (json && json.currentUser) {
                app.setState({ currentUser: json.currentUser });
            }
        })
        .catch(error => {
            console.log(error);
        });
};

// A function to send a POST request with the user to be logged in
export const login = (loginComp, app) => {
    const url = ApiUrl + "/users/login";
    const user = loginComp.state;
    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(user),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    // Send the request with fetch()
    fetch(request)
        .then(res => {
            if (res.status === 200) {
                return res.json()
            }
        })
        .then(json => {
            if (json.currentUser !== undefined) {
                app.setState({ currentUser: json.currentUser });
                console.log('login was successful');
                loginComp.props.history.push('/cart')
            }
        })
        .catch(error => {
            console.log(error);
        });
};

export const logout = (app) => {
    const url = "/users/logout";

    fetch(url)
        .then(res => {
            app.setState({
                currentUser: null,
                message: { type: "", body: "" }
            });
        })
        .catch(error => {
            console.log(error);
        });
};

export const addUser = (formComp) => {
    // the URL for the request
    const url = ApiUrl + "/users";

    // The data we are going to send in our request
    const user = formComp.state;
    console.log(user);

    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(user),
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
                console.log("Successfully added user");
                alert("Successfully added user");
                window.location.href = '/login';
            } else {
                // If server couldn't add the student, tell the user.
                // Here we are adding a generic message, but you could be more specific in your app.
                console.log("Can not add user");
                alert('An account has already been registered using this email. Please use a different email.')
            }
        })
        .catch(error => {
            console.log(error);
        });
};