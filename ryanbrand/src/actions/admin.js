import ApiUrl from "../api/config"

export const adminLogin = (loginComp, app) => {
    const url = ApiUrl + "/admin/login";
    const admin = loginComp.state;
    // Create our request constructor with all the parameters we need
    const request = new Request(url, {
        method: "post",
        body: JSON.stringify(admin),
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        }
    });

    // Send the request with fetch()
    fetch(request, {credentials: 'include'})
        .then(res => {
            if (res.status === 200) {
                console.log('login successful');
                return res.json()
            }
        })
        .then(json => {
            if (json.currentUser !== undefined) {
                app.setState({ currentUser: json.currentUser, userType: "chad" });
                console.log('login was successful');
            }
        })
        .catch(error => {
            console.log(error);
        });
};