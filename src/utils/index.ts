import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import dayjs from "dayjs";
import "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";

dayjs.locale("th");
dayjs.extend(buddhistEra);

export const toThaiDate = (date?: null | Date | string) => {
  return date ? dayjs(date).format("D MMMM BBBB") : "";
};

export const getDateTime = (date?: null | Date | string) => {
  return date ? dayjs(date).format("HH:mm:ss") : "";
};

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const GetEnv = (key: string) => {
  return import.meta.env[key];
};
