import {
  assertEquals,
  assertInstanceOf,
  assertStrictEquals,
} from "@std/assert";
import { Observer } from "./observer.ts";
import { rx } from "./rx.ts";
import { asObservable } from "./as-observable.ts";
import { Observable } from "./observable.ts";

Deno.test(
  "asObservable should convert a custom observable to a proper observable",
  () => {
    // Arrange
    const observer = new Observer();
    const subscribeCalls: Array<Parameters<Observable<number>["subscribe"]>> =
      [];
    const subscribeFn = (observer: Observer<number>) => {
      assertInstanceOf(observer, Observer);
      subscribeCalls.push([observer]);
      observer.next(1);
      observer.next(2);
      observer.return();
    };
    const custom: Observable<number> = { subscribe: subscribeFn };

    // Act
    const observable = rx(custom, asObservable());
    observable.subscribe(observer);

    // Assert
    assertInstanceOf(observable, Observable);
    assertEquals(subscribeCalls, [[observer]]);
  },
);

Deno.test(
  "asObservable should return the same observer if it is already a proper observer",
  () => {
    // Arrange
    const expected = new Observable<number>((observer) => {
      observer.next(1);
      observer.next(2);
      observer.return();
    });

    // Act
    const actual = rx(expected, asObservable());

    // Assert
    assertStrictEquals(actual, expected);
  },
);
Deno.test("asObservable should cache observers", () => {
  // Arrange
  const a: Observable<number> = {
    subscribe(observer) {
      observer.next(1);
      observer.next(2);
      observer.return();
    },
  };
  const b: Observable<number> = {
    subscribe(observer) {
      observer.next(1);
      observer.next(2);
      observer.return();
    },
  };
  const c = new Observable<number>((observer) => {
    observer.next(1);
    observer.next(2);
    observer.return();
  });
  const d = new Observable<number>((observer) => {
    observer.next(1);
    observer.next(2);
    observer.return();
  });

  // Act
  const observableA1 = rx(a, asObservable());
  const observableA2 = rx(a, asObservable());
  const observableB1 = rx(b, asObservable());
  const observableB2 = rx(b, asObservable());
  const observableC1 = rx(c, asObservable());
  const observableC2 = rx(c, asObservable());
  const observableD1 = rx(d, asObservable());
  const observableD2 = rx(d, asObservable());

  // Assert
  assertStrictEquals(observableA1, observableA2);
  assertStrictEquals(observableB1, observableB2);
  assertStrictEquals(observableC1, observableC2);
  assertStrictEquals(observableD1, observableD2);
});
