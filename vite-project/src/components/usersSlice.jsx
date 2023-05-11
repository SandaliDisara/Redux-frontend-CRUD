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
    userUpdated(state, action) {
      const { id, name, email } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
      }
    },
    userDeleted(state, action) {
      const { id } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        return state.filter((user) => user.id !== id);
      }
    },
  },
});

export const { userAdded } = usersSlice.actions;
export const { userUpdated } = usersSlice.actions;
export const { userDeleted } = usersSlice.actions;

export default usersSlice.reducer;
