# Electron Top Level Your App

最初 electron 有选项可以让你的 APP 始终处于顶层，但是现在没了。
我们可以用这种方式 hack。

```ts
mainWindow.setAlwaysOnTop(true, 'screen-saver', 1)
app.dock.hide()
```

但是缺点就是你的 app 不会显示在 dock。对于普通的窗体用不到这样的功能，如何是想做 Alfred 的这样的 app，那么你就需要了。

但是这种方式相当的不稳定，毕竟不是 electron 的 feature。所以有这种特殊需求的 app，我还是建议用 swift。
