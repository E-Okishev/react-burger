import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderList: JSON.parse(localStorage.getItem('order') || '[]'),
};

export const localStorageMiddware = store => next => action => {
  const nextActions = next(action);

  if (nextActions.type.startsWith('order/')) {
    const orderList = store.getState().order.orderList;
    localStorage.setItem('order', JSON.stringify(orderList))
  }

  return next(action);
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = state.orderList.find(item => item.id === action.payload.id);

      if (product) {
        product.count += 1;
      } else {
        state.orderList.push({ ...action.payload, count: 1 });
      }
    }
  }
})

export const { addProduct } = orderSlice.actions;
export default orderSlice.reducer;