import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: {
      'Marks and Spencer': 30,
      'Lindt' : 15,
      'Guylian' : 25,
      'Patchi' : 35,
      "Walker's" : 14,
      'Tim Tam': 18,
      'Meiji Hello Panda': 10,
      'Jammie Dodgers': 17
    },
  },
  reducers: {
    // [{name: 'Marks and Spencer', price: 30}...]
    total: (state, action) => {
      return{
        ...state,
        value: {
          ...state.value,
          [action.payload]: state.value[action.payload] + 1
        }
      }
    },
  },
})

export default cartSlice.reducer