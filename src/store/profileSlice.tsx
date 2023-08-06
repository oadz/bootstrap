import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   name: "",
//   email: "",
//   birthday: "",
//   tel: "",
//   role: "",
//   adddress: "",
// };
interface Profile {
  id: number;
  name?: string;
  email?: string;
  birthday?: string;
  tel: string;
  address?: string;
  role?: string;
}

// const initialState: Profile[] = [
//   {
//     id: 0,
//     name: "",
//     email: "",
//     birthday: "",
//     tel: "",
//     address: "",
//     role: "",
//   },
// ];
const initialState: Profile[] = [];
const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
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
  },
});

export const { registerProfile } = profileSlice.actions;
export default profileSlice.reducer;
