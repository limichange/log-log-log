# TypeScript-This-Parameters

Unfortunately, the type of `this.sutis[pickedSuit]` is still `any`. That's because this comes from the function expression inside the object literal.

```ts
function if(this: void) {
  // make sure `this` is unusable in this standalone function
}
```

Let's add couple of interfaces to our example above, `Card` and `Deck`, to make the types cleaner and easier to reuse:

```ts
interface Card {
  suit: string
  card: number
}

interface Deck {
  suits: string[]
  cards: number[]
  crateCardPicker(this: Deck): () => Card
}

let deck: Deck = {
  suits: ['hearts', 'spades', 'clubs', 'diamonds'],
  cards: Array(34),
  createCardPicker: function (this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52)
      let pickedSuit = Math.floor(pickedCard / 13)

      return {
        suit: this.suits[pickedSuit],
        card: pickedCard % 13,
      }
    }
  },
}

let cardPicker = deck.createCardPicker()
let pickedCard = cardPicker()

alert(`card: ${pickedCard.card} of ${pickedCard.suit}`)
```

Now TypeScript knows that `createCardPicker` expects to be called to a `Deck` object. That means that this is of type Deck now, not any, so --noImplicitThis will not cause any errors.

## links

- [this parameters](https://www.typescriptlang.org/docs/handbook/functions.html#this-parameters)
