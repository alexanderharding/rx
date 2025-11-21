/**
 * # @xan/rx
 *
 * A set of tooling that encapsulates the
 * [Observer pattern](https://en.wikipedia.org/wiki/Observer_pattern) in JavaScript,
 * taking inspiration from [RxJS](https://rxjs.dev/).
 *
 * ## Build
 *
 * Automated by [JSR](https://jsr.io/).
 *
 * ## Publishing
 *
 * Automated by `.github\workflows\publish.yml`.
 *
 * ## Running unit tests
 *
 * Run `deno task test` or `deno task test:watch` to execute the unit tests via
 * [Deno](https://deno.land/).
 *
 * ## Example
 *
 * ```ts
 * import { Observable } from "@xan/rx";
 *
 * const observable = new Observable<0>((observer) => {
 *   // Note that this logic is invoked for every new subscribe action.
 *
 *   // If the observer is already aborted, there's no work to do.
 *   if (observer.signal.aborted) return;
 *
 *   // Create a timeout as our producer to next a value after 1 second.
 *   const producer = setTimeout(() => {
 *     // Next the value to the observer
 *     observer.next(0);
 *     // The producer is done, notify complete
 *     observer.complete();
 *   }, 1000);
 *
 *   // Add an abort listener to handle unsubscription by canceling the producer
 *   observer.signal.addEventListener("abort", () => clearTimeout(producer), {
 *     once: true,
 *   });
 * });
 * ```
 *
 * # Glossary And Semantics
 *
 * When discussing and documenting observables, it's important to have a common
 * language and a known set of rules around what is going on. This documentation
 * is an attempt to standardize these things for unified language in documentation
 * and discussions.
 *
 * ## Major Entities
 *
 * - **Consumer:** The code that is subscribing to the Observable. Receives notifications.
 * - **Producer:** The system or entity producing values for the observable subscription.
 *   Created generally during `subscribe` and usually owned by a subscription.
 *   Can be unicast (one-to-one) or multicast (shared between subscribers).
 * - **Subscription:** The contract by which a consumer observes values from a producer.
 *   Begins when `subscribe` is initiated, even before it finishes.
 *
 * ## Major Actions
 *
 * - **Observation:** A consumer reacting to producer notifications, which can only occur during subscription.
 * - **Observation Chain:** When an Observable uses another Observable as a producer,
 *   a chain of observation is established where each observer notifies the next toward the final consumer.
 *
 * ## Major Concepts
 *
 * - **Multicast:** A producer observed by many consumers.
 * - **Unicast:** A producer observed by only one consumer. Unicast does not necessarily mean "cold".
 * - **Cold:** An observable that creates a new producer on each subscription,
 *   thus always unicast. Cold observables can be made hot but not the other way around.
 * - **Hot:** An observable with a producer created outside of subscription context.
 *   Usually multicast. Hot observables cannot be made cold.
 * - **Push:** Observables are push-based; values are sent as soon as the producer produces them.
 * - **Pull:** In pull-based systems, consumers actively request values (e.g., Functions, Iterators).
 *
 * ## Minor Entities
 *
 * - **Source:** An Observable that supplies values to another Observable.
 * - **Notifier:** An Observable used to notify another to perform an action (on next, not error/complete/finally).
 *
 * ## Other Concepts
 *
 * - **Unhandled Errors:** Errors not handled by a consumer-provided function during subscription
 *   are rethrown on a new callstack to prevent producer interference.
 * - **Producer Interference:** Occurs when an error unwinds the library callstack during notification,
 *   potentially stopping other consumers in a multicast scenario from being notified.
 *   The library works to avoid this by rethrowing unhandled errors asynchronously.
 * @module
 */
export { pipe } from "./pipe.ts";
export { Observer, type ObserverConstructor } from "./observer.ts";
export { asObserver } from "./as-observer.ts";
import { rx } from "./rx.ts";
export { rx } from "./rx.ts";
export default rx;
