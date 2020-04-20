# 颜色值可以分为三类

## 十六进制颜色值

`/#[0-9a-f]{3}/i` 三位分别代表 r,g,b

`/#[0-9a-f]{4}/i` 四位分别代表 r,g,b,a

`/#[0-9a-f]{6}/i` 每两位代表 r,g,b

`/#[0-9a-f]{8}/i` 每两位代表 r,g,b,a

- 需要注意的是 alpha 代表的是 opacity 不透明度

## css 函数

`rgb()`: red green blue

`rgba()`: red green blue alpha

`hsl()`: hue saturation lightness

`hsla()`: hue saturation lightness alpha

- 需要注意的是 alpha 代表的是 opacity 不透明度

## 关键字

每一版 css 都规定了可用的 css 关键字
