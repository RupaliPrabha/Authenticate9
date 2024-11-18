import { Constant } from "./constant";
// https://www.omdbapi.com/?s=Tom&page=1&apikey=cd8b5c72

const dataServices = {
  getMovie(searchQuery, pageNo) {
    return fetch(
      `${Constant.GET_MOVIES}?s=${searchQuery}&page=${pageNo}&apikey=cd8b5c72`
    );
  },
  setSessionStorage(key, value) {
    const stringifyVal = JSON.stringify(value);
    sessionStorage.setItem(key, stringifyVal);
  },
  setLocalStorage(key, value) {
    const stringifyVal = JSON.stringify(value);
    localStorage.setItem(key, stringifyVal);
  },
  getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  },
  clearSessionStorage(key) {
    sessionStorage.removeItem(key);
  },
};

export default dataServices;
