import { createSlice, configureStore } from "@reduxjs/toolkit";

const userCreation = createSlice({
  name: "addUser",
  initialState: {
    value: "",
  },
  reducers: {
    addUser: (state) => {
      state.push();
    },
    // deleteUser: (state) => {

    // },
  },
});

export const { addUser } = userCreation.actions;

const store = configureStore({
  reducer: userCreation.reducer,
});

store.subscribe(() => console.log(store.getState()));

store.dispatch(addUser());
// {value: 1}
// store.dispatch(incremented());
// // {value: 2}
// store.dispatch(decremented());
// // {value: 1}
