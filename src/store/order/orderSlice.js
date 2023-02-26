const initialState = {
  orderList: JSON.parse(localStorage.getItem('order') || '[]'),

};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducer: {
    addProduct: (state, action) => {
      
    }
  }
})