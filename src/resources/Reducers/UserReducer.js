const initialState = {
  authenticated: true,
  usertype: null,
  userDetails: null
};

export const UserReducers = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        userDetails: action.payload,
        authenticated: true,
        usertype: action.usertype,
      };

    case "LOGOUT":
      return {
        ...state,
        userDetails: false,
        authenticated: false,
        usertype: null,
      };

    case "CART":
      cart.forEach(element => {
        
      });
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
