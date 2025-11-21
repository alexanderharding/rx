import { Observable } from "./observable.ts";

const cache = new WeakMap<Observable, Observable>();

/**
 * Converts custom {@linkcode Observable|observables}, probably exported by libraries, to proper {@linkcode Observable|observables}. If the `source` is already
 * instanceof {@linkcode Observable} (which means it has {@linkcode Observable.prototype} in it's prototype chain), it is returned directly. Otherwise, a
 * new {@linkcode Observable} object is created that wraps the original `source`.
 */
export function asObservable<Value>(): (
  source: Observable<Value>,
) => Observable<Value> {
  return (source) => {
    let observable = source instanceof Observable ? source : cache.get(source);
    if (!observable) {
      observable = new Observable((observer) => source.subscribe(observer));
      cache.set(source, observable);
    }
    return observable;
  };
}
