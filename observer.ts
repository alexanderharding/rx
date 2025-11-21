/**
 * A type that defines a standard way to consume a sequence of values (either finite or infinite).
 */
export interface Observer<Value = unknown> {
  /**
   * The `consumer` is telling the `producer` it is no longer interested in receiving {@linkcode Value|values}.
   */
  readonly signal: AbortSignal;
  /**
   * The `producer` is pushing a {@linkcode value} to the `consumer`.
   */
  next(value: Value): void;
  /**
   * The `producer` is telling the `consumer` that it does not intend to {@linkcode next} any more values,
   * and can perform any cleanup actions.
   */
  return(): void;
  /**
   * The `producer` is telling the `consumer` that it has encountered a {@linkcode value|problem}, does not
   * intend to {@linkcode next} any more values, and can perform any cleanup actions.
   */
  throw(value: unknown): void;
}

/**
 * Object interface for an {@linkcode Observer} factory.
 */
export interface ObserverConstructor {
  new <Value>(
    observer?: Partial<Observer<Value>> | Observer<Value>["next"] | null,
  ): Observer<Value>;
  readonly prototype: Observer;
}

// The main reason this JSDoc exists, is to satisfy the JSR score. In reality,
// the JSDoc on the above type is enough for the DX on both symbols.
/**
 * @class
 */
export const Observer: ObserverConstructor = class {
  readonly #observer?: Partial<Observer> | null;
  readonly #controller = new AbortController();

  constructor(observer?: Partial<Observer> | Observer["next"] | null) {
    typeof observer === "function"
      ? (this.#observer = { next: observer })
      : (this.#observer = observer);
  }

  get signal(): AbortSignal {
    return typeof this.#observer?.signal === "undefined"
      ? this.#controller.signal
      : AbortSignal.any([this.#observer.signal, this.#controller.signal]);
  }

  next(value: unknown): void {
    // If this observer has been aborted there is nothing to do.
    if (this.signal.aborted) return;

    try {
      this.#observer?.next?.(value);
    } catch (thrown) {
      this.throw(thrown);
    }
  }

  return(): void {
    // If this observer has been aborted there is nothing to do.
    if (this.signal.aborted) return;

    // Abort this observer before pushing this notification in-case of reentrant code.
    this.#controller.abort();

    try {
      this.#observer?.return?.();
    } catch (thrown) {
      reportUnhandledError(thrown);
    }
  }

  throw(value: unknown): void {
    // If this observer has been aborted there is nothing to do.
    if (this.signal.aborted) return;

    // Abort this observer before pushing this notification in-case of reentrant code.
    this.#controller.abort();

    try {
      if (this.#observer?.throw) this.#observer.throw(value);
      else throw value;
    } catch (thrown) {
      reportUnhandledError(thrown);
    }
  }
};

function reportUnhandledError(value: unknown): void {
  // Throw error asynchronously to ensure it does not interfere with
  // the library's execution. Ideally we'd report this to the process directly
  // but there's not really generic cross-platform support for this yet.
  globalThis.queueMicrotask(() => {
    throw value;
  });
}
