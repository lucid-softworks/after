import { describe, expect, it, vi } from "vitest";

import { after } from "../src/index.js";

describe("after", () => {
  it("invokes on the threshold call and every later call", () => {
    const target = vi.fn<(value: number) => number>((value) => value * 2);
    const wrapped = after(2, target);
    expect(wrapped(1)).toBeUndefined();
    expect(wrapped(2)).toBe(4);
    expect(wrapped(3)).toBe(6);
    expect(target.mock.calls).toEqual([[2], [3]]);
  });

  it("invokes immediately for a zero threshold", () => {
    expect(after(0, (value: string) => value)("ready")).toBe("ready");
  });

  it.each([-1, 1.5, Number.NaN])("rejects the invalid count %s", (count) => {
    expect(() => after(count, () => {})).toThrow(
      "count must be a non-negative integer",
    );
  });
});
