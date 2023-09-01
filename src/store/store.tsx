import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../store/profileSlice";
import productReducer from "../store/productSlice";
export const store = configureStore({
  reducer: {
    profile: profileReducer,
    products: productReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// import { configureStore } from "@reduxjs/toolkit"; //ตั้งค่า configureStore มีหน้าที่เก็บ ค่าต่างๆ state ต่างๆ มีได้เพียงตัวเดียวใช้ทั้งแอป
// import profileReducer from "../store/profileSlice";
// import productReducer from "../store/productSlice";
// export const store = configureStore({                //กำหนด reducer
//   reducer: {

//   },
// });
// export type RootState = ReturnType<typeof store.getState>; //การกำหนด type ในการรับค่าต่างๆ
// export type AppDispatch = typeof store.dispatch; //หลังจากนั้นไปกำหนด _app.tsx ที่มีการตั้งค่า layout provider
