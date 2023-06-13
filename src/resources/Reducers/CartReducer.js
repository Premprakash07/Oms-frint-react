const initialState = {
  cart: [],
};

export const CartReducers = (state = initialState, action) => {
  switch (action.type) {
    
    case "CART":
      cart.forEach((element) => {});
      return {
        ...state,
        cart: [
          ...cart,
          { quantity: action.payload.quantity, inventory: action.payload.item },
        ],
      };

    default:
      return state;
  }
};
