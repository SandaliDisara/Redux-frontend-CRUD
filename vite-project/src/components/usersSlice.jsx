import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", name: "Dave Patrick", email: "dave@gmail.com" },
  { id: "2", name: "Hank Gluhwein", email: "hank@gmail.com" },
  { id: "3", name: "Sandali Disara", email: "sandali@gmail.com" },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    userAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const { userAdded } = usersSlice.actions;

export default usersSlice.reducer;
