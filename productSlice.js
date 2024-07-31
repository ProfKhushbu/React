import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    { id: 1, name: 'Fern', price: 10, category: 'Indoor', thumbnail: 'path/to/fern.jpg' },
    { id: 2, name: 'Cactus', price: 15, category: 'Desert', thumbnail: 'path/to/cactus.jpg' },
    // Add more products as needed
  ],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productSlice.reducer;
