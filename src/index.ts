import { invariant } from "@lucid-softworks/invariant";

/** Calls `target` on the threshold call and every call after it. */
export function after<TArguments extends readonly unknown[], TResult>(
  count: number,
  target: (...arguments_: TArguments) => TResult,
): (...arguments_: TArguments) => TResult | undefined {
  invariant(
    Number.isInteger(count) && count >= 0,
    "count must be a non-negative integer",
  );
  let calls = 0;
  return (...arguments_) => {
    calls += 1;
    return calls >= count ? target(...arguments_) : undefined;
  };
}
