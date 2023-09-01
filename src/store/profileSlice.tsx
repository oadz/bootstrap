import { createSlice } from "@reduxjs/toolkit"; //*

interface Profile {
  id: number;
  name?: string | undefined;
  email?: string;
  birthday?: string;
  tel: string;
  address?: string;
  role?: string;
  testnum?: string;
}
// interface Products {
//   data: Profile[]
//   test?: string
// }
// const initialState: Products = {
//   data: [],
// test : ""
// };
const initialState: Profile[] = [
  // {
  //   id: 0,
  //   name: "",
  //   email: "",
  //   birthday: "",
  //   tel: "",
  //   address: "",
  //   role: "",
  //   testnum: "",
  // },
]; // กำหนด initialState
const profileSlice = createSlice({
  name: "profile", // *
  initialState: initialState, //*
  reducers: {
    //* สร้างฟังก์ชั่นที่จะเราจะอัพเดท state
    registerProfile(state, action) {
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email,
          birthday: action.payload.birthday,
          tel: action.payload.tel,
          role: action.payload.role,
          address: action.payload.address,
        },
      ];
    },
    updateProfile(state, action) {
      const { id, name, email, birthday, role, tel } = action.payload;
      const profileToUpdate = state.find((profile) => profile.id === id);
      if (profileToUpdate) {
        profileToUpdate.name = name;
        profileToUpdate.email = email;
        profileToUpdate.birthday = birthday;
        profileToUpdate.role = role;
        profileToUpdate.tel = tel;
      }
    },
    removeItem(state, action) {
      const itemId = action.payload;
      return state.filter((item) => !itemId.includes(item.id));
    },
    addItem(state, action) {
      console.log("action.payload", action.payload);
      const itemId = action.payload;
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email,
          birthday: action.payload.birthday,
          tel: action.payload.tel,
          role: action.payload.role,
          address: action.payload.address,
          testnum: action.payload.testnum,
        },
      ];
    },
  },
});

export const { registerProfile, updateProfile, removeItem, addItem } =
  profileSlice.actions;
export default profileSlice.reducer;
