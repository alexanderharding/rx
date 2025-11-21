import {
  assertEquals,
  assertInstanceOf,
  assertStrictEquals,
} from "@std/assert";
import { Observer } from "./observer.ts";
import { Observable } from "./observable.ts";

Deno.test(
  "Observable.subscribe should not execute when observer is aborted",
  () => {
    // Arrange
    const observer = new Observer();
    const subscribeCalls: Array<Parameters<Observable["subscribe"]>> = [];
    const subscribeFn = (observer: Observer) => subscribeCalls.push([observer]);
    const observable = new Observable(subscribeFn);
    observer.return();
    assertStrictEquals(observer.signal.aborted, true);

    // Act
    observable.subscribe(observer);

    // Assert
    assertEquals(subscribeCalls, []);
  },
);

Deno.test(
  "Observable.subscribe should create a new Observer instance correctly when subscribe is called with a non-Observer instance",
  () => {
    // Arrange
    const controller = new AbortController();
    const nextCalls: Array<Parameters<Observer["next"]>> = [];
    const throwCalls: Array<Parameters<Observer["throw"]>> = [];
    const returnCalls: Array<Parameters<Observer["return"]>> = [];
    const subscribeCalls: Array<Parameters<Observable["subscribe"]>> = [];
    const observable = new Observable<number>((observer) =>
      subscribeCalls.push([observer])
    );

    // Act
    observable.subscribe(
      new Observer({
        next: (value) => nextCalls.push([value]),
        return: () => returnCalls.push([]),
        throw: (value) => throwCalls.push([value]),
        signal: controller.signal,
      }),
    );
    const subscriptionObserver = subscribeCalls[0][0];
    subscriptionObserver.next(1);
    subscriptionObserver.return();

    // Assert
    assertInstanceOf(subscriptionObserver, Observer);
    assertStrictEquals(subscriptionObserver.signal.aborted, true);
    assertStrictEquals(controller.signal.aborted, false);
    assertEquals(nextCalls, [[1]]);
    assertEquals(returnCalls, [[]]);
    assertEquals(throwCalls, []);
  },
);

Deno.test(
  "Observable.subscribe should not create a new Observer instance when subscribe is called with an existing Observer instance",
  () => {
    // Arrange
    const observer = new Observer();
    const subscribeCalls: Array<Parameters<Observable["subscribe"]>> = [];
    const subscribeFn: Observable["subscribe"] = (observer) =>
      subscribeCalls.push([observer]);
    const observable = new Observable(subscribeFn);

    // Act
    observable.subscribe(observer);

    // Assert
    assertStrictEquals(subscribeCalls[0][0], observer);
  },
);

Deno.test(
  "Observable.subscribe should not throw when internal subscribe throws",
  () => {
    // Arrange
    const error = new Error("this should be handled");
    const subscribeCalls: Array<Parameters<Observable["subscribe"]>> = [];
    const subscribeFn: Observable["subscribe"] = (observer) => {
      subscribeCalls.push([observer]);
      throw error;
    };
    const throwCalls: Array<Parameters<Observer["throw"]>> = [];
    const observable = new Observable(subscribeFn);

    // Act / Assert
    observable.subscribe(
      new Observer({ throw: (value) => throwCalls.push([value]) }),
    );
    assertEquals(throwCalls, [[error]]);
  },
);

Deno.test("should call internal subscribe again on resubscribe", () => {
  // Arrange;
  const subscribeCalls: Array<Parameters<Observable["subscribe"]>> = [];
  const subscribeFn: Observable["subscribe"] = (observer) =>
    subscribeCalls.push([observer]);
  const observable = new Observable(subscribeFn);

  // Act
  observable.subscribe(new Observer());
  observable.subscribe(new Observer());

  // Assert
  assertEquals(subscribeCalls.length, 2);
});
