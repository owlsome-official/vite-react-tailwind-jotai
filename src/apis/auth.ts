import Axios, { HttpStatusCode, isAxiosError } from "utils/axios";
import {
  API_SIGN_IN,
  API_SIGN_OUT,
  BAD_REQUEST_TEXT,
  SERVER_INTERNAL_ERROR_TEXT,
} from "utils/constants";

/**
 * Function to sign in to the system.
 * @param {string} [username=""] - Username to sign in with.
 * @param {string} [password=""] - Password to sign in with.
 * @returns {Promise<[string, string]>}
 *   - `redirectUrl` is the URL to redirect to after signing in,
 *     or an empty string if the sign in failed.
 *   - `errMsg` is an error message if the sign in failed, or an empty string if it succeeded.
 * @example const [ redirectUrl, errMsg ] = SignIn("username", "password");
 */
const SignIn = async (
  username: string = "",
  password: string = "",
): Promise<[string, string]> => {
  try {
    const CancelToken = Axios.CancelToken;
    const source = CancelToken.source();
    const response = await Axios.post(
      API_SIGN_IN,
      {
        username,
        password,
      },
      { cancelToken: source.token },
    );
    const { token } = response.data.response_data;
    console.log(token);

    return [token, ""];
  } catch (error) {
    console.error(error);
    if (isAxiosError(error)) {
      const status = error.response?.status;
      switch (status) {
        case HttpStatusCode.BadRequest:
          return ["", BAD_REQUEST_TEXT];
      }
    }
    return ["", SERVER_INTERNAL_ERROR_TEXT];
  }
};

/**
 * Function to sign out from the system.
 * @returns {Promise<boolean>}
 *   - `true` if the sign out was successful, or `false` if it failed.
 * @example const isAccepted = SignOut();
 */
const SignOut = async (): Promise<boolean> => {
  try {
    await Axios.post(API_SIGN_OUT, {});
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};

export default {
  SignIn,
  SignOut,
};
