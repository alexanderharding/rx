import { Observable } from "./observable.ts";
import { rx } from "./rx.ts";
import { asObservable } from "./as-observable.ts";

const cache = new WeakMap<Observable, Observable>();

/**
 * Represents all of the notifications from the source {@linkcode Observable} as {@linkcode Observer.next|next} emissions marked with their
 * original types within {@linkcode ObserverNotification|notification} objects.
 */
export function materialize<Value>(): (
  source: Observable<Value>,
) => Observable<Readonly<["N", Value] | ["R"] | ["T", unknown]>> {
  return (source) => {
    let cached = cache.get(source);
    if (!cached) {
      cached = new Observable((observer) => {
        rx(source, asObservable()).subscribe({
          signal: observer.signal,
          next: (value) => observer.next(["N", value]),
          return() {
            observer.next(["R"]);
            observer.return();
          },
          throw(value) {
            observer.next(["T", value]);
            observer.return();
          },
        });
      });
      cache.set(source, cached);
    }
    return cached;
  };
}
