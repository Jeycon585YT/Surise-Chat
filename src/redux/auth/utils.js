import { store } from "../store";
import { setIsLoading, setUser } from "./authSlice";

export const setUserToRedux = (userData) => {
  store.dispatch(setUser(userData));
};

export const setIsLoadingToRedux = (isLoading) => {
  store.dispatch(setIsLoading(isLoading));
};
