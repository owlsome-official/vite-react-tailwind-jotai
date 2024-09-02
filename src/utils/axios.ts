import axios from "axios";

import {
  AUTH_PATH,
  EXPIRED_TOKEN_TEXT,
  UNPROTECTED_PATHS,
} from "utils/constants";

// NOTE: [Optional] for cache axios instance, use `setupCache` from `axios-cache-interceptor`
// example: `const ClientWithCache = setupCache(axios.create(config));`

const redirectToAuth = () => {
  console.log("Session expired, redirect to login");
  const { alert, location } = window;
  if (alert) alert("เซสชั่นหมดอายุ กำลังพาท่านไปหน้าหลัก");
  if (location) location.replace(AUTH_PATH); // or LANDING_PATH

  // ## Idea: an idea for clean up token
  // AuthService.CleanUp();

  return Promise.reject(EXPIRED_TOKEN_TEXT);
};

const isUnprotectedPath = (url: string) => {
  for (const path of UNPROTECTED_PATHS) {
    if (url.includes(path)) {
      return true;
    }
  }
  return false;
};

axios.interceptors.request.use(
  async (config) => {
    if (isUnprotectedPath(config.url ?? "")) {
      return config;
    }

    // ## Idea: An idea for token attached to header.
    // let token = storage.get(STORAGE_KEY_TOKEN);
    // if (token) {
    //   config.headers["Authorization"] =
    //     config.headers["Authorization"] || `Bearer ${token}`;
    // } else if (`${import.meta.env["VITE_DEBUG_MODE"]}` !== "true") {
    //   throw Error(EXPIRED_TOKEN_TEXT);
    // }

    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  (response) => {
    // ## Idea: extend timeout on some response which has 2xx status
    // UtilsStorage.Cookies.extend(STORAGE_KEY_TOKEN);

    return response;
  },
  (error) => {
    if (error.request === undefined) {
      return redirectToAuth();
    }

    return Promise.reject(error);
  },
);

export const HttpStatusCode = axios.HttpStatusCode;
export const isAxiosError = axios.isAxiosError;
export default axios;

/*
NOTE: another way to using instance as configurable
/ export const instance = axios.create({
/   baseURL: 'https://example.com/api/',
/   timeout: 1000,
/   headers: {'Authorization': 'Bearer '+token}
/ });
*/
