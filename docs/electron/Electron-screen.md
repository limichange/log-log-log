# Electron Screen

> Retrieve information about screen size, displays, cursor position, etc.

The is module cannot be used until the ready event of the app module is emitted.

`screen` is an EventEmitter.

Note: In the renderer/DevTools, window.screen is a reserved DOM property, so writing `let {screen} = require('electron')` will not work.

An example of creating a window that fills the whole screen:

```ts
const { app, BrowserWindow, screen } = require('electron')
let win

app.whenReady().then(() => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize
  win = new BrowserWindow({ width, height })
  win.loadURL('https://github.com')
})
```

Another example of creating a window int the external display:

```ts
const { app, BrowserWindow, screen } = require('electron')
let win

app.whenReady().then(() => {
  let displays = screen.getAllDisplays()
  let externalDisplay = displays.find((display) => {
    return display.bounds.x !== 0 || display.bounds.y !== 0
  })

  if (externalDisplay) {
    win = new BrowserWindow({
      x: externalDisplay.bounds.x + 50,
      y: externalDisplay.bounds.y + 50,
    })

    win.loadURL('https://github.com')
  }
})
```

## Event

- display-added
- display-removed
- display-metrics-changed

## Methods

- screen.getCursorScreenPoint()
- screen.getPrimaryDisplay()
- screen.getAllDisplays()
- screen.getDisplayNearestPoint(point)
- screen.getDisplayMatching(rect)
- screen.screenToDipPoint(point)
- screen.dipToScreenPoint(point)
- screen.screenToDipRect(window, rect)
- screen.dipToScreenRect(window, rect)

## links

- [electron screen](https://www.electronjs.org/docs/api/screen)
