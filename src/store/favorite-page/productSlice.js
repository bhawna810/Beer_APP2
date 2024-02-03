import { createSlice } from "@reduxjs/toolkit";

const itemss =
  localStorage.getItem("productItems") !== null
    ? JSON.parse(localStorage.getItem("productItems"))
    : [];

const setProduct = (item) => {
  localStorage.setItem("productItems",  JSON.stringify(item));
};

const initialState = {
    productItems: itemss
};

const productSlice = createSlice({
    name: "product",
    initialState,
   
    reducers: {
       

        addProduct(state, action) {
           
            const newItem = action.payload;

            state.productItems = [...state.productItems, ...newItem];
            setProduct(state.productItems);
          },
    },
  });
  
  export const productActions = productSlice.actions;
  export default productSlice;