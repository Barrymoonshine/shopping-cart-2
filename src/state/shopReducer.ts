import ACTIONS from '../utils/ACTIONS';

export const initialState = {
  products: null,
  areProductsLoading: false,
  productsError: null,
  //   cart: [],
  //   totalCartItems: 0,
  //   totalCartCost: 0,
  //   isCartVisible: false,
};

const shopReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.SAVE_PRODUCTS:
      return {
        ...state,
        cart: payload.newCart,
      };
    case ACTIONS.TOGGLE_PRODUCTS_LOADING:
      return {
        ...state,
        areProductsLoading: !state.areProductsLoading,
      };
    case ACTIONS.SAVE_PRODUCTS_ERROR:
      return {
        ...state,
        productsError: payload.error,
      };
    case ACTIONS.REMOVE_PRODUCTS_ERROR:
      return {
        ...state,
        productsError: null,
      };
    default:
      return state;
  }
};

export default shopReducer;
