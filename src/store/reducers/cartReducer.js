import { ADD_TO_CARD } from "../action";

export const add_to_cart = (payload) => {
  return {
    type: ADD_TO_CARD,
    payload,
  };
};

const initalState = {
  products: [],
  totalPrice: 0,
  totalQuantity: 0,
};

export const cartReducer = (state = initalState, action) => {
  if (action.type === ADD_TO_CARD) {
    return { ...state, products: state.products.concat(action.payload) };
  } else {
    return state;
  }
};

// 1. Надо изменить структуру каждого продукта который хранится в products.
// 2. Если у нас добавили в корзину один и тот же продукт обект должен остатся
// один но значнеи должно поменятся
