// slices/dataSlice.js
import { createSlice } from '@reduxjs/toolkit';
 const initialState={data:[]}
const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    
    addItem: (state, action) => {
      state.data.push(action.payload);
    },
    removeItem: (state, action) => {
      state.data = state.data.filter(data => data !== action.payload);
      
    },
  },
});

export const { addItem,removeItem } = dataSlice.actions;
export default dataSlice.reducer;

