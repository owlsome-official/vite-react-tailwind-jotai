import { atom } from "jotai";

type UserInfo = {
  firstName?: string;
  lastName?: string;
  email?: string;
  token?: string;
};

export const userInfoAtom = atom<UserInfo>({});
export const userFullnameAtom = atom<string>((get) => {
  const { firstName, lastName } = get(userInfoAtom);
  if (firstName && lastName) {
    return `${firstName} ${lastName}`;
  }
  return "-";
});
export const userAuthTokenAtom = atom<string>((get) => {
  return get(userInfoAtom).token ?? "";
});
export const isAuthenticatedAtom = atom<boolean>((get) => {
  return Boolean(get(userInfoAtom).token);
});
