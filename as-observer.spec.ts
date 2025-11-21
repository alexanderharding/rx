import { assertEquals, assertStrictEquals } from "@std/assert";
import { asObserver } from "./as-observer.ts";
import { Observer } from "./observer.ts";
import { rx } from "./rx.ts";

Deno.test(
  "asObserver should convert a custom observer to a proper observer",
  () => {
    // Arrange
    const nextCalls: Array<Parameters<Observer<number>["next"]>> = [];
    const returnCalls: Array<Parameters<Observer<number>["return"]>> = [];
    const throwCalls: Array<Parameters<Observer<number>["throw"]>> = [];
    const signal = new AbortController().signal;
    const custom: Observer<number> = {
      signal,
      next: (value) => nextCalls.push([value]),
      return: () => returnCalls.push([]),
      throw: (value) => throwCalls.push([value]),
    };

    // Act
    const observer = rx(custom, asObserver());
    observer.next(1);
    observer.next(2);
    observer.return();

    // Assert
    assertStrictEquals(observer.signal.aborted, true);
    assertEquals(nextCalls, [[1], [2]]);
    assertEquals(returnCalls, [[]]);
    assertEquals(throwCalls, []);
  },
);

Deno.test(
  "asObserver should return the same observer if it is already a proper observer",
  () => {
    // Arrange
    const expected = new Observer<number>();

    // Act
    const actual = rx(expected, asObserver());

    // Assert
    assertStrictEquals(actual, expected);
  },
);
Deno.test("asObserver should cache observers", () => {
  // Arrange
  const a: Observer<number> = {
    signal: new AbortController().signal,
    next: () => {},
    return: () => {},
    throw: () => {},
  };
  const b: Observer<number> = {
    signal: new AbortController().signal,
    next: () => {},
    return: () => {},
    throw: () => {},
  };
  const c = new Observer<number>();
  const d = new Observer<number>();

  // Act
  const observerA1 = rx(a, asObserver());
  const observerA2 = rx(a, asObserver());
  const observerB1 = rx(b, asObserver());
  const observerB2 = rx(b, asObserver());
  const observerC1 = rx(c, asObserver());
  const observerC2 = rx(c, asObserver());
  const observerD1 = rx(d, asObserver());
  const observerD2 = rx(d, asObserver());

  // Assert
  assertStrictEquals(observerA1, observerA2);
  assertStrictEquals(observerB1, observerB2);
  assertStrictEquals(observerC1, observerC2);
  assertStrictEquals(observerD1, observerD2);
});
