import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: undefined,
    isLoading: true,
  },
  reducers: {
    setUser: (state, actions) => {
      state.user = actions.payload;
    },
    setIsLoading: (state, actions) => {
      state.isLoading = actions.payload;
    },
  },
});

export const { setUser, setIsLoading } = authSlice.actions;
export default authSlice.reducer;
