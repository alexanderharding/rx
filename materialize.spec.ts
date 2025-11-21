import { Observer } from "./observer.ts";
import { rx } from "./rx.ts";
import { materialize } from "./materialize.ts";
import { assertEquals, assertStrictEquals } from "@std/assert";
import { Observable } from "./observable.ts";

Deno.test(
  "materialize should emit the notifications from a source observable that returns",
  () => {
    // Arrange
    const source = new Observable<number>((observer) => {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.return();
    });
    const nextCalls: Array<
      Parameters<
        Observer<Readonly<["N", number] | ["R"] | ["T", unknown]>>["next"]
      >
    > = [];
    const returnCalls: Array<Parameters<Observer["return"]>> = [];
    const throwCalls: Array<Parameters<Observer["throw"]>> = [];

    // Act
    rx(source, materialize()).subscribe(
      new Observer({
        next: (...args) => nextCalls.push(args),
        return: (...args) => returnCalls.push(args),
        throw: (...args) => throwCalls.push(args),
      }),
    );

    // Assert
    assertEquals(nextCalls, [[["N", 1]], [["N", 2]], [["N", 3]], [["R"]]]);
    assertEquals(returnCalls, [[]]);
    assertEquals(throwCalls, []);
  },
);

Deno.test(
  "materialize should emit the notifications from a source observable that throws",
  () => {
    // Arrange
    const error = new Error("test");
    const source = new Observable<never>((observer) => {
      observer.throw(error);
    });
    const nextCalls: Array<[Readonly<["N", number] | ["R"] | ["T", unknown]>]> =
      [];
    const returnCalls: Array<Parameters<Observer["return"]>> = [];
    const throwCalls: Array<Parameters<Observer["throw"]>> = [];

    // Act
    rx(source, materialize()).subscribe(
      new Observer({
        next: (...args) => nextCalls.push(args),
        return: (...args) => returnCalls.push(args),
        throw: (...args) => throwCalls.push(args),
      }),
    );

    // Assert
    assertEquals(nextCalls, [[["T", error]]]);
    assertEquals(returnCalls, [[]]);
    assertEquals(throwCalls, []);
  },
);

Deno.test("materialize should honor unsubscription", () => {
  // Arrange
  const controller = new AbortController();
  const source = new Observable<number>((observer) => {
    observer.next(1);
    observer.next(2);
    observer.return();
  });
  const nextCalls: Array<
    Parameters<
      Observer<Readonly<["N", number] | ["R"] | ["T", unknown]>>["next"]
    >
  > = [];
  const returnCalls: Array<Parameters<Observer["return"]>> = [];
  const throwCalls: Array<Parameters<Observer["throw"]>> = [];

  // Act
  rx(source, materialize()).subscribe({
    signal: controller.signal,
    next: (...args) => {
      nextCalls.push(args);
      if (nextCalls.length === 2) controller.abort();
    },
    return: (...args) => returnCalls.push(args),
    throw: (...args) => throwCalls.push(args),
  });

  // Assert
  assertEquals(nextCalls, [[["N", 1]], [["N", 2]]]);
  assertEquals(returnCalls, []);
  assertEquals(throwCalls, []);
});

Deno.test("materialize should cache", () => {
  // Arrange
  const never = new Observable<never>(() => {
    // Do nothing.
  });
  const empty = new Observable<never>((observer) => {
    observer.return();
  });
  const a = materialize()(never);
  const b = materialize()(never);
  const c = materialize()(empty);
  const d = materialize()(empty);

  // Act / Assert
  assertStrictEquals(a === b, true);
  assertStrictEquals(c === d, true);
  assertStrictEquals(a === c, false);
});
