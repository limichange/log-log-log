# Swift 始终使你的 APP 处于顶层

```swift
@NSApplicationMain
class AppDelegate: NSObject, NSApplicationDelegate {

    var window: NSPanel!

    func applicationDidFinishLaunching(_ aNotification: Notification) {
        // Create the SwiftUI view that provides the window contents.
        let contentView = WKWebViewDemo()

        print(SystemConfiguration.__MAC_10_11_2)

        // Create the window and set the content view.
        window = NSPanel(
            contentRect: NSRect(x: 0, y: 0, width: 480, height: 300),
            styleMask: [.titled, .closable, .resizable, .borderless, .nonactivatingPanel],
            backing: .buffered, defer: true)
        window.center()
        window.setFrameAutosaveName("Main Window")
        window.contentView = NSHostingView(rootView: contentView)
        window.makeKeyAndOrderFront(nil)
        window?.level = .floating
        window.collectionBehavior = [.canJoinAllSpaces, .fullScreenAuxiliary]
    }

    func applicationWillTerminate(_ aNotification: Notification) {
        // Insert code here to tear down your application
    }
}
```
