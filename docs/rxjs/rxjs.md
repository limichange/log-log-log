# Rxjs

## Observables

Observables are lazy Push collections of multiple values.

## Operators

Operators are `functions`. There are two kinds of operators:

`Pipeable Operators` are the kind that can be piped to Observables using the syntax `observableInstance.pipe(operator())`.

## Subscription

A Subscription is an object that represents a disposable resource, usually the execution of an Observable.
A Subscription has one important method, `unsubscribe`, that takes no argument and just disposes the resource held by the subscription.

## Subjects

An RxJS Subject is a special type of Observable that allows values to be multicasted to many Observers.
While plain Observables are unicast(each subscribed Observer owns an independent execution of the Observable), Subjects are multicasted.

## Scheduler

A scheduler controls when a subscription starts and when notifications are delivered.
It consists of three components.

## links

- [rxjs guide](https://rxjs-dev.firebaseapp.com/guide/observable)
