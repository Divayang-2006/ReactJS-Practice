import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice.js'
const store = configureStore({
   reducer: {
      auth: authSlice
      // TODO: To load all the Posts and store them in the Store 
      // so that browser does'nt need to make multiple webrequests every time
   }
});

export default store;