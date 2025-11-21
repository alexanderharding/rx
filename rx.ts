import { pipe } from "./pipe.ts";

/**
 * A unary function that takes a {@linkcode source|value} and returns it.
 * @param source - The {@linkcode source|value} to return.
 * @returns The {@linkcode source|value}.
 */
export function rx<Value>(source: Value): Value;
/**
 * Pipe a {@linkcode source|value} through a {@linkcode fn}.
 * @param source - The {@linkcode source|value} to pipe.
 * @param fn - The {@linkcode fn} to pipe the {@linkcode source|value} through.
 * @returns The result of the {@linkcode fn}.
 */
export function rx<In, Out>(source: In, fn: (value: In) => Out): Out;
/**
 * Pipe a {@linkcode source|value} through a series of unary functions.
 * @param source - The {@linkcode source|value} to pipe.
 * @returns The result of the {@linkcode fn2}.
 */
export function rx<In, A, B>(
  source: In,
  fn1: (value: In) => A,
  fn2: (value: A) => B,
): B;
/**
 * Pipe a {@linkcode source|value} through a series of unary functions.
 * @param source - The {@linkcode source|value} to pipe.
 * @returns The result of the {@linkcode fn3}.
 */
export function rx<In, A, B, C>(
  source: In,
  fn1: (value: In) => A,
  fn2: (value: A) => B,
  fn3: (value: B) => C,
): C;
/**
 * Pipe a {@linkcode source|value} through a series of unary functions.
 * @param source - The {@linkcode source|value} to pipe.
 * @returns The result of the {@linkcode fn4}.
 */
export function rx<In, A, B, C, D>(
  source: In,
  fn1: (value: In) => A,
  fn2: (value: A) => B,
  fn3: (value: B) => C,
  fn4: (value: C) => D,
): D;
/**
 * Pipe a {@linkcode source|value} through a series of unary functions.
 * @param source - The {@linkcode source|value} to pipe.
 * @returns The result of the {@linkcode fn5}.
 */
export function rx<In, A, B, C, D, E>(
  source: In,
  fn1: (value: In) => A,
  fn2: (value: A) => B,
  fn3: (value: B) => C,
  fn4: (value: C) => D,
  fn5: (value: D) => E,
): E;
/**
 * Pipe a {@linkcode source|value} through a series of unary functions.
 * @param source - The {@linkcode source|value} to pipe.
 * @returns The result of the {@linkcode fn6}.
 */
export function rx<In, A, B, C, D, E, F>(
  source: In,
  fn1: (value: In) => A,
  fn2: (value: A) => B,
  fn3: (value: B) => C,
  fn4: (value: C) => D,
  fn5: (value: D) => E,
  fn6: (value: E) => F,
): F;
/**
 * Pipe a {@linkcode source|value} through a series of unary functions.
 * @param source - The {@linkcode source|value} to pipe.
 * @returns The result of the {@linkcode fn7}.
 */
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
/**
 * Pipe a {@linkcode source|value} through a series of unary functions.
 * @param source - The {@linkcode source|value} to pipe.
 * @returns The result of the {@linkcode fn8}.
 */
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
/**
 * Pipe a {@linkcode source|value} through a series of unary functions.
 * @param source - The {@linkcode source|value} to pipe.
 * @returns The result of the {@linkcode fn9}.
 */
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
/**
 * Pipe a {@linkcode source|value} through a series of unary functions.
 * @param source - The {@linkcode source|value} to pipe.
 * @returns The result of the {@linkcode fn10}.
 */
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
/**
 * Pipe a {@linkcode source|value} through a series of unary functions.
 * @param source - The {@linkcode source|value} to pipe.
 * @returns The result of the {@linkcode fn11}.
 */
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
/**
 * Pipe a {@linkcode source|value} through a series of unary functions.
 * @param source - The {@linkcode source|value} to pipe.
 * @returns The result of the {@linkcode fn12}.
 */
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
/**
 * Pipe a {@linkcode source|value} through a series of unary functions.
 * @param source - The {@linkcode source|value} to pipe.
 * @returns The result of the {@linkcode fn13}.
 */
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
/**
 * Pipe a {@linkcode source|value} through a series of unary functions.
 * @param source - The {@linkcode source|value} to pipe.
 * @returns The result of the {@linkcode fn14}.
 */
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
/**
 * Pipe a {@linkcode source|value} through a series of unary functions.
 * @param source - The {@linkcode source|value} to pipe.
 * @returns The result of the {@linkcode fn15}.
 */
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
/**
 * Pipe a {@linkcode source|value} through a series of unary functions.
 * @param source - The {@linkcode source|value} to pipe.
 * @returns The result of the {@linkcode fn16}.
 */
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
/**
 * Pipe a {@linkcode source|value} through a series of unary functions.
 * @param source - The {@linkcode source|value} to pipe.
 * @returns The result of the last {@linkcode fns|fn}.
 */
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
): unknown;
export function rx(source: unknown, ...fns: []): unknown {
  return pipe(...fns)(source);
}
