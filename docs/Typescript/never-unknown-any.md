# `never`, `unknown` and `any`

- Use never in positions where there will not or should not be a value.
- Use unknown where there will be a value, but it might have any type.
- Avoid using any unless you really need an unsafe escape hatch.

## any

在了解 unknown 型別前先來回顧現有的 any 型別。any 型別可以是任何型別，任何變數只要宣告成 any 型別，就會失去 TypeScript 型別檢查機制，使開發時期倒退到傳統 JavaScript 的動態型別。

## unknown

unknown 型別可以想像成只能 set-only 的 any 型別。依樣可以指派任何型別的值給 unknown，但要對 unknown 型別操作時，必須轉成 unknown 以外的型別，否則便會出錯。此外， unknown 只能指派給同樣是 unknown 型別或是 any 型別，不像 any 型別可以指派給 string、number 等任何型別。

## conclusion

大部分情況下，unknown 型別幾乎可以取代現有的 any 型別，確保當下能斷定目前變數到底是什麼型別在對其進行操作，降低 any 型別帶來的不確定性。

## links

- https://blog.logrocket.com/when-to-use-never-and-unknown-in-typescript-5e4d6c5799ad/
