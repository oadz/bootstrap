import { createSlice } from "@reduxjs/toolkit";

interface Profile {
  id: number;
  name?: string;
  email?: string;
  birthday?: string;
  tel: string;
  address?: string;
  role?: string;
}

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
  },
});

export const { registerProfile, updateProfile, removeItem } =
  profileSlice.actions;
export default profileSlice.reducer;
