import { describe, expect, it } from "vitest";
import { cn, delay, getDateTime, GetEnv, toThaiDate } from "./index";

describe.concurrent("toThaiDate", () => {
  it("should return empty string when input is null or undefined", () => {
    expect(toThaiDate(null)).toBe("");
    expect(toThaiDate(undefined)).toBe("");
    expect(toThaiDate("")).toBe("");
  });

  it("should return date in Thai format", () => {
    const date = new Date("2024-12-31T00:00:00.000Z");
    expect(toThaiDate(date)).toBe("31 ธันวาคม 2567");
  });
});

describe.concurrent("getDateTime", () => {
  it("should return empty string when input is null or undefined", () => {
    expect(getDateTime(null)).toBe("");
    expect(getDateTime(undefined)).toBe("");
    expect(getDateTime("")).toBe("");
  });

  it("should return date and time in format", () => {
    const date = new Date("2024-12-31T00:00:00.000Z");
    expect(getDateTime(date)).toBe("07:00:00");
  });
});

describe.concurrent("cn", () => {
  it("should merge class names", () => {
    expect(cn("text-red-500", "font-bold")).toBe("text-red-500 font-bold");
  });
});

describe.concurrent("delay", () => {
  it("should resolve after timeout", async () => {
    const start = Date.now();
    await delay(100);
    const end = Date.now();
    expect(end - start).toBeGreaterThanOrEqual(100);
  });
});

describe.concurrent("GetEnv", () => {
  it("should return environment value", () => {
    expect(GetEnv("NODE_ENV")).toBe("test");
  });
});
