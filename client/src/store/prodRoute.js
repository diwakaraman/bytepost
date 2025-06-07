import { createSlice } from "@reduxjs/toolkit";

const prodSlice = createSlice({
   name: "prod",
   initialState: {
      products: {
        link: "http://localhost:1000",
      },
   },
   reducers: {},
});

export default prodSlice.reducer;