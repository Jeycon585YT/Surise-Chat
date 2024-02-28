import { store } from "../store";
import { setUsers } from "./usersSlice";

export const setUsersToRedux = (usersData) => {
  store.dispatch(setUsers(usersData));
};
