import {readCookie} from "./user";

export const removeItem = (cart, item) => {
    const filteredItems = cart.state.cart.filter(i => {
        return i !== item
    });

    cart.setState({
        cart: filteredItems,
        total: cart.state.total - item.price
    })
};

export const addToCartClick = (detail, quantity, app) => {
    console.log(detail, quantity, app);
    alert(quantity + " " + detail.name + " has been added to your cart");
};
