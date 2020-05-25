# Rxjs Subject

What is a Subject? An RxJS Subject is a special type of Observable that allows values to be multicasted to many Observers. While plain Observables are unicast (each subscribed Observer owns an independent execution of the Observable), Subject are multicast.

> A Subject is like an Observable, but can multicast to many Observers. Subjects are like EventEmitters: they maintain a registry of many listeners.

Every Subject is an Observable. Given a Subject, you can subscribe to it, providing an Observer, which will start receiving normally.
From the perspective of the Observer, it cannot tell whether the Observable execution is coming from a plain unicast Observable or a Subject.

Internally to the SUbject, subscribe does not invoke a new execution that delivers values. It simply registers the given Observer in a list o f Observers, similarly to how addListener usually works in other libraries and languages.

Every Subject is an observer. It is an object with the methods next(v), error(e), and complete(). To feed a new value to the Subject, just call next(theValue), and it will be multicasted to the Observers registered to listen to the Subject.

In the example below, we have two Observers attached to a Subject, and we feed some values to the Subject.

```ts
import { Subject } from 'rxjs'

const subject = new Subject<number>()

subject.subscribe({
  next: (x) => console.log(`observerA: ${v}`),
})
subject.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
})

subject.next(1)
subject.next(2)

// Logs:
// observerA: 1
// observerB: 2
// observerA: 1
// observerB: 2
```

Since a SUbject is an Observer, this also means you may provide a Subject as the argument to the subscribe of any Observable, like the example below shows:

```ts
const observable = from([1, 2, 3])

observable.subscribe(subject) // You can subscribe providing a Subject

// Logs:
// observerA: 1
// observerB: 1
// observerA: 2
// observerB: 2
// observerA: 3
// observerB: 3
```

With the approach above, we essentially just converted a unicast Observable execution to multicast, through the Subject.
This demonstrates how Subjects are the only way of making any Observable execution be shared to multiple Observers.

There are also a few specializations fo the Subject type: BehaviorSubject, ReplaySubject, and AsyncSubject.

### Multicasted Observables

A 'multicasted Observable' passes notifications through Subject which amy have many subscribers, whereas a plain 'unicast Observable' only sends notifications to a single Observer.

> A multicasted Observable uses a Subject under the hood to make multiple Observers see the same Observable execution.

Under the hood, this is hwo the multicast operator works: Observers subscribe to an underlying Subject, and the Subject subscribes to the source Observable. The following example is similar to the previous example which used observable.subscribe(subject).

```ts
import { from, Subject } from 'rxjs'
import { multicast } from 'rxjs/operators'

const source = from([1, 2, 3])
const subject = new Subject()
const multicasted = source.pipe(multicast(subject))

// These are, under the hood, `subject.subscribe({...})`:
multicasted.subscribe({
  next: (v) => console.log(`observerA: ${v}`),
})
multicasted.subscribe({
  next: (v) => console.log(`observerB: ${v}`),
})

// This is, under the hood, `source.subscribe(subject)`:
multicasted.connect()
```

multicast returns an Observable that looks like a normal Observable, but works like a Subject when it comes to subscribing. multicast retusn a ConnectableObservable, which is simply an Observable with the connect() method.

The connect() method is important to determine exactly when the shared Observable execution will start. Because connect() does source.subscribe(subject) under the hood, connect() returns a Subscription, which you can unsubscribe from in order to cancel the shared Observable execution.
