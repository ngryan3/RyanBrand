# Team 23 - RyanBrand Shop

## Workflow
https://trello.com/b/EsuXm2Hu/raw-ryan

## Link to online deployment on heroku
https://quiet-journey-89938.herokuapp.com/

## How to use our app:
In team23 folder:
`npm install`
`node server.js`
In ryanbrand folder:
`npm install`
`npm start`

## Phase 2 updates:
### How to use the application:
Users that reach the homepage will be prompted to access the catalogue of products sold at the Ryan Store. They can go to the catalogue using the header or the button on the home page. 

Users can use the header to navigate to many of the site pages. This includes the catalogue, home page, about page, login/register page, and cart.

At the login page, the user may enter credentials and login. If they are invalid (no user found or incorrect password), they will be prompted as such. Users can click the bottom at the bottom that says register to switch to a register screen, where they can register with the credentials they enter. They can also click "login as admin" at the very bottom to access admin login.

If you login as an admin, the admin can view a variety of pages. The first is the user page. This page does not actually display our users, as we were not able to display them. The next page is the product page. In this page admins can add, edit, and remove products shown in the catalogue. 

At the catalogue, they can click individual items to be brought to their page. They can also filter by item type on the sidebar.

On any given item page, the user sees the product picture, name, description, and is able to add any quantity they'd like to their cart. They can also rate items. If a user attempts to add items to cart while not logged in, they will be redirected to the login page.

On the about page, the user can see a bit about Ryan, and click images to reach a variety of his social links (currently just links to the regular domain). 

On the cart page, the user can see what's in their cart. If they are not logged in and try to access their cart,they will be redirected to login first. Users can remove items from their cart. Users' carts will be remembered even after logging out. They can also click on a button to proceed to checkout.

On the checkout page, the user can enter their information to checkout. Currently, the checkout is still hardcoded to work with the card 123456789012, with expiry month 12, expiry year 2020, and ccv 123. 

When logged in, a user can logout at any time using the button in the header.

### Overview of Routes:

/images/:name/ - POST
This route posts an image to our Cloudinary server. It also inserts the image id url and product name into our mongoDB server as well. It expects an image path (and name given in the url). It returns the image information on success, and returns 400 on error.

/images/:name - GET
Returns the image under given. Returns the requested image on success, and 500 on failure. The other image get route is not currently used.  

/users/login/ - POST
This route expects a username and password field to be sent in the body. It is used for regular user login. It finds a user by user password. What is expected to be returned is the current user's user id. Ther user is expected to be logged in after. This route should catch a 400 error.

/users/logout/ - GET
This route is the logout route. On success, the expected result is "successful logout" to be sent. On failure, the server returns a 500. 

/users/check-session/ - GET
This route is used to check if the user is logged in on a session cookie. On success, it should return the current user and their type (regular or admin). On failure it should return a not found.

/users/ - POST
This route is for signing up a new user. It expects to be sent a username and password. On success, it should return the user object back. On failure, it will send a 400 error.

/cart/:id/ - GET
This route gets the products from user id's cart. On success, it should find a user and send their cart. On failure, they either didn't find the user (404 is sent back), or something happened in the server (500 is sent back). In order to send this request, the logged in user must be a user.


/cart/:id/ - POST
This route is used to add a product to a user's cart. It expects a quantity and a name (of product), since the authentication middleware checks for user id. On success, the return will include user and product. On failure, 404 will be returned if the product or user is not found, and a 400 will be returned in most other cases. In order to send this request, the logged in user must be a regular user.


/cart/:id/:prod_id/ - DELETE
This route is used to delete items from a single user's cart. It expects the product id and id (as in the url). It then removes that specific product from the user id's cart. On success, it returns the user, and item removed. On failure, it will return 404 or 400 depending on the circumstances. In order to send this request, the logged in user must be a regular user.

/products/ - POST
This route adds a new product. It expects a name, category, description, and price to be sent. On success, the product will be returned. On failure, a 400 will be sent. In order to send this request, the logged in user must be an admin.

/products/:id/ - DELETE
This route deletes a product from the catalogue. It expects nothing from the body. It uses the id given to find the product and delete it. It sends the deleted product on success. 

/products/ - GET
This route gets all the products to be displayed in the catalogue. It sends the products on success, and gives a 500 on failure.

/products/:id/ - GET
This route gets a specific product by id in the catalogue. Returns the product on success. Returns 404 if the product is not found, and 500 on other failures.

/products/:id/ - PATCH
This route modifies a product given its id. Returns the updated product on success. Returns 404 if the product is not found, and 500 on other failures.

/products/:id/ - POST
This route updates the ratings of a product given its id. It expects a rating (number rating) in the body. On success, it sends back the ratings and product on success. 404 is sent on failure if the item is not found, and in other errors a 400 is sent.

/products/category/:type/ - GET
This route gets all products with category :type. It sends back all the products with said type on success. ON failure it returns a 404 or 500 depending on the error.

/users/ - GET
This route gets all users. It returns all users on success, and a 500 on failure.

/admins/ - POST
This route creates a new admin. Expects a username and password. Returns the new admin on success. Returns a 400 on error.

/admins/check-session/ - GET
This route checks if an admin is logged in on the session cookie. Returns the current user's username on success, and a 401 on failure.

/admins/login/ - POST
This route is for logging in an admin. It expects a username and password in the body. It returns the current admin's id on success. Returns a 400 on failure.

## Phase 1 text:

You can use the header to navigate to most pages on the app. This includes the home page, the catalogue, the about ryan page, the login/register page, and the cart page.

On the home page, you can click the button in the middle to reach the catalogue.

On the catalogue page you can see items and click categories on the sidebar to change categories, however this functionality is not yet available. The products displayed dynamically increase with the number of products in the database. At this point in time, the product database is hardcoded. You can also click on a product to see it's details. On the product detail page you can add quantity to add to your cart. Currently does not actually add to cart, as cart page is hard coded.

The about page has links to Ryan's social media.

On the login/Register page you can make an account with credentials. You can use the button at the bottom to switch between login and register. You can login as an admin by clicking on the link at the bottom of the register/login page. Logging ibn as a user prompts you. Logging in as an admin brings you to the admin page.

You can login into a client account with credentials: username: user, password: user

You can login into an admin account with credentials: username: admin, password: admin

The admin page has a few tabs the admin can view. This includes a user list, a product list, and a stats tab. Currently all the data is hardcoded.

On the cart page the user can view what items are in their cart, and remove items. Item list is currently hard coded, so refreshing the page refreshes the cart. You can click checkout to go to the checkout page.

Currently, the checkout page has many fillable fields. However, pressing the button does not bring you anywhere.

