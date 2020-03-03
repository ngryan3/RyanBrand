export const removeItem = (cart, item) => {
    const filteredItems = cart.state.cart.filter(i => {
        return i !== item
    });

    cart.setState({
        cart: filteredItems
    })
};