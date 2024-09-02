export const [LocalStorageType, SessionStorageType, DefaultType] = [
  "localStorage",
  "sessionStorage",
  "",
];
export type AvailableStorageType =
  | typeof LocalStorageType
  | typeof SessionStorageType
  | typeof DefaultType;

type availableValueType = string | number | boolean | object | null;

export interface IStorage {
  set(key: string, value: availableValueType): void;
  get(key: string): availableValueType;
  remove(key: string): void;
  clearAll(): void;
}

export class UtilsStorage implements IStorage {
  #storageType: AvailableStorageType;
  #defaultStorage: Record<string, availableValueType> = {};

  constructor(storageType?: AvailableStorageType) {
    this.#storageType = storageType ?? DefaultType;
  }

  /**
   * Set a key-value pair in storage.
   * @param key key of the pair
   * @param value `string` type value of the pair
   */
  set(key: string, value: availableValueType): void {
    switch (this.#storageType) {
      case LocalStorageType:
        window.localStorage.setItem(key, JSON.stringify(value));
        break;
      case SessionStorageType:
        window.sessionStorage.setItem(key, JSON.stringify(value));
        break;
      default:
        this.#defaultStorage[key] = value;
    }
  }

  /**
   * Get value by key from storage.
   * @param key key of the pair
   * @returns value of the pair as `JSON` | `string` type
   */
  get(key: string): availableValueType {
    switch (this.#storageType) {
      case LocalStorageType: {
        const lValue = window.localStorage.getItem(key);
        return lValue ? JSON.parse(lValue) : "";
      }
      case SessionStorageType: {
        const sValue = window.sessionStorage.getItem(key);
        return sValue ? JSON.parse(sValue) : "";
      }
      default:
        return this.#defaultStorage[key];
    }
  }

  /**
   * Remove a key-value pair in storage.
   * @param key key of the pair
   */
  remove(key: string) {
    switch (this.#storageType) {
      case LocalStorageType:
        window.localStorage.removeItem(key);
        break;
      case SessionStorageType:
        window.sessionStorage.removeItem(key);
        break;
      default:
        delete this.#defaultStorage[key];
    }
  }

  /**
   * Clear all data in storage.
   */
  clearAll() {
    switch (this.#storageType) {
      case LocalStorageType:
        window.localStorage.clear();
        break;
      case SessionStorageType:
        window.sessionStorage.clear();
        break;
      default:
        this.#defaultStorage = {};
    }
  }
}

// ## Usage:
// const storage = new UtilsStorage(LocalStorageType); // or using const storage = new UtilsStorage("localStorage");
// storage.set("foo", "bar")
// storage.remove("foo");
