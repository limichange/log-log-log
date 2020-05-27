# 今天的小记

最近学得多，我觉得做 Mac APP 或许是我的新的目标，一开始我只是想把我的 Alfred 的 license 升级一下，然后发现可以用 iterm2 代替，cmd+space 全局呼叫就行了。但是我想，干嘛不自己写一个呢？我就看了看 electron 的 API，发现了 shortcut 可以 global 设置。

写了一个 demo，感觉不错，便顺势写了下来。

最终选择了 electron+swift 的设计。electron 用来做 UI，效果很好，效率也高。swift 的 Mac API 非常丰富，battery 的状态、Windows 的信息等。

有了这些 API，很多 feature 就能实现了，感觉会变成不错的 APP，祝好运。

2020 年 05 月 28 日 00:07:49
