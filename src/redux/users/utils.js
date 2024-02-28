import { setUser } from "../auth/authSlice";
import { store } from "../store";

export const setUsersToRedux = (usersData) => {
  store.dispatch(setUser(usersData));
};
