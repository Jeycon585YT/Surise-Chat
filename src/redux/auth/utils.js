import { store } from "../store";
import { setUser } from "./authSlice";

export const setUserToRedux = (userData) => {
  store.dispatch(setUser(userData));
};
