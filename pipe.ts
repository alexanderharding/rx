/**
 * Pipe a value through a series of functions.
 * @param fns - The functions to pipe the value through.
 * @returns A function that pipes the value through the functions.
 */
export function pipe<Value>(): (value: Value) => Value;
export function pipe<A, B>(fn1: (value: A) => B): (value: A) => B;
export function pipe<A, B, C>(
  fn1: (value: A) => B,
  fn2: (value: B) => C
): (value: A) => C;
export function pipe<A, B, C, D>(
  fn1: (value: A) => B,
  fn2: (value: B) => C,
  fn3: (value: C) => D
): (value: A) => D;
export function pipe<A, B, C, D, E>(
  fn1: (value: A) => B,
  fn2: (value: B) => C,
  fn3: (value: C) => D,
  fn4: (value: D) => E
): (value: A) => E;
export function pipe<A, B, C, D, E, F>(
  fn1: (value: A) => B,
  fn2: (value: B) => C,
  fn3: (value: C) => D,
  fn4: (value: D) => E,
  fn5: (value: E) => F
): (value: A) => F;
export function pipe<A, B, C, D, E, F, G>(
  fn1: (value: A) => B,
  fn2: (value: B) => C,
  fn3: (value: C) => D,
  fn4: (value: D) => E,
  fn5: (value: E) => F,
  fn6: (value: F) => G
): (value: A) => G;
export function pipe<A, B, C, D, E, F, G, H>(
  fn1: (value: A) => B,
  fn2: (value: B) => C,
  fn3: (value: C) => D,
  fn4: (value: D) => E,
  fn5: (value: E) => F,
  fn6: (value: F) => G,
  fn7: (value: G) => H
): (value: A) => H;
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
): unknown;
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
