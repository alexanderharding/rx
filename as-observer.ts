import { Observer } from "./observer.ts";

const cache = new WeakMap<Observer, Observer>();

/**
 * Converts custom {@linkcode Observer|observers}, probably exported by libraries, to proper {@linkcode Observer|observers}. If the `source` is already
 * instanceof {@linkcode Observer} (which means it has {@linkcode Observer.prototype} in it's prototype chain), it is returned directly. Otherwise, a
 * new {@linkcode Observer} object is created that wraps the original `source`.
 */
export function asObserver<Value>(): (
  source: Observer<Value>
) => Observer<Value> {
  return (source) => {
    let observer = source instanceof Observer ? source : cache.get(source);
    if (!observer) {
      observer = new Observer(source);
      cache.set(source, observer);
    }
    return observer;
  };
}
