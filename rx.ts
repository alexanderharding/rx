import { pipe } from "./pipe.ts";

/**
 * Pipe a {@linkcode source|value} through a series of unary functions.
 * @param source - The {@linkcode source|value} to pipe.
 * @param fns - The functions to pipe the {@linkcode source|value} through.
 * @returns The result of the last function.
 */
export function rx<Value>(source: Value): Value;
export function rx<In, Out>(source: In, fn: (value: In) => Out): Out;
export function rx<In, A, B>(
  source: In,
  fn1: (value: In) => A,
  fn2: (value: A) => B,
): B;
export function rx<In, A, B, C>(
  source: In,
  fn1: (value: In) => A,
  fn2: (value: A) => B,
  fn3: (value: B) => C,
): C;
export function rx<In, A, B, C, D>(
  source: In,
  fn1: (value: In) => A,
  fn2: (value: A) => B,
  fn3: (value: B) => C,
  fn4: (value: C) => D,
): D;
export function rx<In, A, B, C, D, E>(
  source: In,
  fn1: (value: In) => A,
  fn2: (value: A) => B,
  fn3: (value: B) => C,
  fn4: (value: C) => D,
  fn5: (value: D) => E,
): E;
export function rx<In, A, B, C, D, E, F>(
  source: In,
  fn1: (value: In) => A,
  fn2: (value: A) => B,
  fn3: (value: B) => C,
  fn4: (value: C) => D,
  fn5: (value: D) => E,
  fn6: (value: E) => F,
): F;
export function rx<In, A, B, C, D, E, F, G>(
  source: In,
  fn1: (value: In) => A,
  fn2: (value: A) => B,
  fn3: (value: B) => C,
  fn4: (value: C) => D,
  fn5: (value: D) => E,
  fn6: (value: E) => F,
  fn7: (value: F) => G,
): G;
export function rx<In, A, B, C, D, E, F, G, H>(
  source: In,
  fn1: (value: In) => A,
  fn2: (value: A) => B,
  fn3: (value: B) => C,
  fn4: (value: C) => D,
  fn5: (value: D) => E,
  fn6: (value: E) => F,
  fn7: (value: F) => G,
  fn8: (value: G) => H,
): H;
export function rx<In, A, B, C, D, E, F, G, H, I>(
  source: In,
  fn1: (value: In) => A,
  fn2: (value: A) => B,
  fn3: (value: B) => C,
  fn4: (value: C) => D,
  fn5: (value: D) => E,
  fn6: (value: E) => F,
  fn7: (value: F) => G,
  fn8: (value: G) => H,
  fn9: (value: H) => I,
): I;
export function rx<In, A, B, C, D, E, F, G, H, I, J>(
  source: In,
  fn1: (value: In) => A,
  fn2: (value: A) => B,
  fn3: (value: B) => C,
  fn4: (value: C) => D,
  fn5: (value: D) => E,
  fn6: (value: E) => F,
  fn7: (value: F) => G,
  fn8: (value: G) => H,
  fn9: (value: H) => I,
  fn10: (value: I) => J,
): J;
export function rx<In, A, B, C, D, E, F, G, H, I, J, K>(
  source: In,
  fn1: (value: In) => A,
  fn2: (value: A) => B,
  fn3: (value: B) => C,
  fn4: (value: C) => D,
  fn5: (value: D) => E,
  fn6: (value: E) => F,
  fn7: (value: F) => G,
  fn8: (value: G) => H,
  fn9: (value: H) => I,
  fn10: (value: I) => J,
  fn11: (value: J) => K,
): K;
export function rx<In, A, B, C, D, E, F, G, H, I, J, K, L>(
  source: In,
  fn1: (value: In) => A,
  fn2: (value: A) => B,
  fn3: (value: B) => C,
  fn4: (value: C) => D,
  fn5: (value: D) => E,
  fn6: (value: E) => F,
  fn7: (value: F) => G,
  fn8: (value: G) => H,
  fn9: (value: H) => I,
  fn10: (value: I) => J,
  fn11: (value: J) => K,
  fn12: (value: K) => L,
): L;
export function rx<In, A, B, C, D, E, F, G, H, I, J, K, L, M>(
  source: In,
  fn1: (value: In) => A,
  fn2: (value: A) => B,
  fn3: (value: B) => C,
  fn4: (value: C) => D,
  fn5: (value: D) => E,
  fn6: (value: E) => F,
  fn7: (value: F) => G,
  fn8: (value: G) => H,
  fn9: (value: H) => I,
  fn10: (value: I) => J,
  fn11: (value: J) => K,
  fn12: (value: K) => L,
  fn13: (value: L) => M,
): M;
export function rx<In, A, B, C, D, E, F, G, H, I, J, K, L, M, N>(
  source: In,
  fn1: (value: In) => A,
  fn2: (value: A) => B,
  fn3: (value: B) => C,
  fn4: (value: C) => D,
  fn5: (value: D) => E,
  fn6: (value: E) => F,
  fn7: (value: F) => G,
  fn8: (value: G) => H,
  fn9: (value: H) => I,
  fn10: (value: I) => J,
  fn11: (value: J) => K,
  fn12: (value: K) => L,
  fn13: (value: L) => M,
  fn14: (value: M) => N,
): N;
export function rx<In, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O>(
  source: In,
  fn1: (value: In) => A,
  fn2: (value: A) => B,
  fn3: (value: B) => C,
  fn4: (value: C) => D,
  fn5: (value: D) => E,
  fn6: (value: E) => F,
  fn7: (value: F) => G,
  fn8: (value: G) => H,
  fn9: (value: H) => I,
  fn10: (value: I) => J,
  fn11: (value: J) => K,
  fn12: (value: K) => L,
  fn13: (value: L) => M,
  fn14: (value: M) => N,
  fn15: (value: N) => O,
): O;
export function rx<In, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(
  source: In,
  fn1: (value: In) => A,
  fn2: (value: A) => B,
  fn3: (value: B) => C,
  fn4: (value: C) => D,
  fn5: (value: D) => E,
  fn6: (value: E) => F,
  fn7: (value: F) => G,
  fn8: (value: G) => H,
  fn9: (value: H) => I,
  fn10: (value: I) => J,
  fn11: (value: J) => K,
  fn12: (value: K) => L,
  fn13: (value: L) => M,
  fn14: (value: M) => N,
  fn15: (value: N) => O,
  fn16: (value: O) => P,
): P;
export function rx<In, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P>(
  source: In,
  fn1: (value: In) => A,
  fn2: (value: A) => B,
  fn3: (value: B) => C,
  fn4: (value: C) => D,
  fn5: (value: D) => E,
  fn6: (value: E) => F,
  fn7: (value: F) => G,
  fn8: (value: G) => H,
  fn9: (value: H) => I,
  fn10: (value: I) => J,
  fn11: (value: J) => K,
  fn12: (value: K) => L,
  fn13: (value: L) => M,
  fn14: (value: M) => N,
  fn15: (value: N) => O,
  fn16: (value: O) => P,
  ...fns: ReadonlyArray<(value: P) => unknown>
): P;
export function rx(source: unknown, ...fns: []): unknown {
  return pipe(...fns)(source);
}
