/**
 * @returns A function that takes in one value and returns it.
 */
export function pipe<Value>(): (value: Value) => Value;
/**
 * Setting up a pipeline of functions.
 * @returns A function that takes in one value and pipes it through the {@linkcode fn}.
 */
export function pipe<A, B>(fn: (value: A) => B): (value: A) => B;
/**
 * Setting up a pipeline of functions.
 * @returns A function that takes in one value and pipes it through the provided functions.
 */
export function pipe<A, B, C>(
  fn1: (value: A) => B,
  fn2: (value: B) => C
): (value: A) => C;
/**
 * Setting up a pipeline of functions.
 * @returns A function that takes in one value and pipes it through the provided functions.
 */
export function pipe<A, B, C, D>(
  fn1: (value: A) => B,
  fn2: (value: B) => C,
  fn3: (value: C) => D
): (value: A) => D;
/**
 * Setting up a pipeline of functions.
 * @returns A function that takes in one value and pipes it through the provided functions.
 */
export function pipe<A, B, C, D, E>(
  fn1: (value: A) => B,
  fn2: (value: B) => C,
  fn3: (value: C) => D,
  fn4: (value: D) => E
): (value: A) => E;
/**
 * Setting up a pipeline of functions.
 * @returns A function that takes in one value and pipes it through the provided functions.
 */
export function pipe<A, B, C, D, E, F>(
  fn1: (value: A) => B,
  fn2: (value: B) => C,
  fn3: (value: C) => D,
  fn4: (value: D) => E,
  fn5: (value: E) => F
): (value: A) => F;
/**
 * Setting up a pipeline of functions.
 * @returns A function that takes in one value and pipes it through the provided functions.
 */
export function pipe<A, B, C, D, E, F, G>(
  fn1: (value: A) => B,
  fn2: (value: B) => C,
  fn3: (value: C) => D,
  fn4: (value: D) => E,
  fn5: (value: E) => F,
  fn6: (value: F) => G
): (value: A) => G;
/**
 * Setting up a pipeline of functions.
 * @returns A function that takes in one value and pipes it through the provided functions.
 */
export function pipe<A, B, C, D, E, F, G, H>(
  fn1: (value: A) => B,
  fn2: (value: B) => C,
  fn3: (value: C) => D,
  fn4: (value: D) => E,
  fn5: (value: E) => F,
  fn6: (value: F) => G,
  fn7: (value: G) => H
): (value: A) => H;
/**
 * Setting up a pipeline of functions.
 * @returns A function that takes in one value and pipes it through the provided functions.
 */
export function pipe<A, B, C, D, E, F, G, H, I>(
  fn1: (value: A) => B,
  fn2: (value: B) => C,
  fn3: (value: C) => D,
  fn4: (value: D) => E,
  fn5: (value: E) => F,
  fn6: (value: F) => G,
  fn7: (value: G) => H,
  fn8: (value: H) => I
): (value: A) => I;
/**
 * Setting up a pipeline of functions.
 * @returns A function that takes in one value and pipes it through the provided functions.
 */
export function pipe<A, B, C, D, E, F, G, H, I, J>(
  fn1: (value: A) => B,
  fn2: (value: B) => C,
  fn3: (value: C) => D,
  fn4: (value: D) => E,
  fn5: (value: E) => F,
  fn6: (value: F) => G,
  fn7: (value: G) => H,
  fn8: (value: H) => I,
  fn9: (value: I) => J
): (value: A) => J;
/**
 * Setting up a pipeline of functions.
 * @returns A function that takes in one value and pipes it through the provided functions.
 */
export function pipe<A, B, C, D, E, F, G, H, I, J, K>(
  fn1: (value: A) => B,
  fn2: (value: B) => C,
  fn3: (value: C) => D,
  fn4: (value: D) => E,
  fn5: (value: E) => F,
  fn6: (value: F) => G,
  fn7: (value: G) => H,
  fn8: (value: H) => I,
  fn9: (value: I) => J,
  fn10: (value: J) => K
): (value: A) => K;
/**
 * Setting up a pipeline of functions.
 * @returns A function that takes in one value and pipes it through the provided functions.
 */
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L>(
  fn1: (value: A) => B,
  fn2: (value: B) => C,
  fn3: (value: C) => D,
  fn4: (value: D) => E,
  fn5: (value: E) => F,
  fn6: (value: F) => G,
  fn7: (value: G) => H,
  fn8: (value: H) => I,
  fn9: (value: I) => J,
  fn10: (value: J) => K,
  fn11: (value: K) => L
): (value: A) => L;
/**
 * Setting up a pipeline of functions.
 * @returns A function that takes in one value and pipes it through the provided functions.
 */
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N>(
  fn1: (value: A) => B,
  fn2: (value: B) => C,
  fn3: (value: C) => D,
  fn4: (value: D) => E,
  fn5: (value: E) => F,
  fn6: (value: F) => G,
  fn7: (value: G) => H,
  fn8: (value: H) => I,
  fn9: (value: I) => J,
  fn10: (value: J) => K,
  fn11: (value: K) => L,
  fn12: (value: L) => M,
  fn13: (value: M) => N
): (value: A) => N;
/**
 * Setting up a pipeline of functions.
 * @returns A function that takes in one value and pipes it through the provided functions.
 */
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(
  fn1: (value: A) => B,
  fn2: (value: B) => C,
  fn3: (value: C) => D,
  fn4: (value: D) => E,
  fn5: (value: E) => F,
  fn6: (value: F) => G,
  fn7: (value: G) => H,
  fn8: (value: H) => I,
  fn9: (value: I) => J,
  fn10: (value: J) => K,
  fn11: (value: K) => L,
  fn12: (value: L) => M,
  fn13: (value: M) => N,
  fn14: (value: N) => O
): (value: A) => O;
/**
 * Setting up a pipeline of functions.
 * @returns A function that takes in one value and pipes it through the provided functions.
 */
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(
  fn1: (value: A) => B,
  fn2: (value: B) => C,
  fn3: (value: C) => D,
  fn4: (value: D) => E,
  fn5: (value: E) => F,
  fn6: (value: F) => G,
  fn7: (value: G) => H,
  fn8: (value: H) => I,
  fn9: (value: I) => J,
  fn10: (value: J) => K,
  fn11: (value: K) => L,
  fn12: (value: L) => M,
  fn13: (value: M) => N,
  fn14: (value: N) => O,
  fn15: (value: O) => P
): (value: A) => P;
/**
 * Setting up a pipeline of functions.
 * @returns A function that takes in one value and pipes it through the provided functions.
 */
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(
  fn1: (value: A) => B,
  fn2: (value: B) => C,
  fn3: (value: C) => D,
  fn4: (value: D) => E,
  fn5: (value: E) => F,
  fn6: (value: F) => G,
  fn7: (value: G) => H,
  fn8: (value: H) => I,
  fn9: (value: I) => J,
  fn10: (value: J) => K,
  fn11: (value: K) => L,
  fn12: (value: L) => M,
  fn13: (value: M) => N,
  fn14: (value: N) => O,
  fn15: (value: O) => P,
  fn16: (value: P) => Q
): (value: A) => Q;
/**
 * Setting up a pipeline of functions.
 * @returns A function that takes in one value and pipes it through the provided functions.
 */
export function pipe<A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q>(
  fn1: (value: A) => B,
  fn2: (value: B) => C,
  fn3: (value: C) => D,
  fn4: (value: D) => E,
  fn5: (value: E) => F,
  fn6: (value: F) => G,
  fn7: (value: G) => H,
  fn8: (value: H) => I,
  fn9: (value: I) => J,
  fn10: (value: J) => K,
  fn11: (value: K) => L,
  fn12: (value: L) => M,
  fn13: (value: M) => N,
  fn14: (value: N) => O,
  fn15: (value: O) => P,
  fn16: (value: P) => Q,
  ...fns: ReadonlyArray<(value: Q) => unknown>
): unknown;
export function pipe(...fns: []): (value: unknown) => unknown {
  return (value) =>
    fns.reduce((value, fn: (value: unknown) => unknown) => fn(value), value);
}
