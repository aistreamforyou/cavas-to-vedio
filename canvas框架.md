# 内容来源

https://juejin.cn/post/6917849020341682189?utm_source=gold_browser_extension

# canvas框架简介

| 框架      | cabvas功能支持 | 渲染          | 量级 | 事件                     | 端             |
| --------- | -------------- | ------------- | ---- | ------------------------ | -------------- |
| fabric.js | 全             | svg, canvas   | 轻   | 封装了canvas标签监听事件 | pc             |
| pixi.js   | 全             | webGL, canvas | 轻   | 绘制元素上直接支持事件   | pc，移动，桌面 |
| phaser.js | 全             | webGL, canvas | 重   | 绘制元素上直接支持事件   | pc，移动，桌面 |

```js
区别：
1、pixi可直接在绘制的对象上操作事件，同时提供有鼠标和移动端touch事件；
2、fabric在渲染和事件的灵活性以及端的支持上不如pixi；
3、phaser是基于pixi封装的，在pixi优秀的渲染基础上又封装了很多游戏功能，如有媳键盘手柄输入、声音支持等，是一款有媳引擎；
```



# PixiJs

## pixiJs简介

​		是一款基于canvas的2D WebGL渲染引擎，可以创建丰富的交互式图形、动画和游戏。

​		pixi的目标是提供一个快速的、轻量级切兼容所有设备的2D库，无需了解WebGL就可以让开发者享受到硬件加速，它默认使用WebGL渲染，在浏览器不支持的情况下可优雅降级成Canvas渲染。

​		对绘制内容支持完整的鼠标事件和触摸事件。



## 主要特征

+ 支持WebGL渲染，因为能调用GPU渲染，所以渲染性能高（源码实现？？？）
+ 支持canvas渲染，当设备不支持WebGL渲染时自动使用canvas渲染，也可以收低哦那个选择canvas渲染（源码实现？？？）
+ api简单易用
+ 丰富的交互事件，支持完整的鼠标和移动端touch事件（源码实现？？？）
+ 不侵入你的编码风格，可以自由选择使用它的多少功能（源码实现？？？）
+ 与其他插件或框架无缝集成（源码：如何实现？？？）



## 安装和引入

```js
//安装
npm i pixi.js -S

//在页面中引入
import * as PIXI from 'pixi.js'
```



## 创建动画的流程

### 流程

+ 创建舞台
+ 创建画布
+ 把画布挂载到DOM上
+ 创建精灵
+ 显示精灵
+ 操作精灵



### 创建舞台、画布

```js
// 应用类PIXI.Application可以自动创建舞台（stage）和画布（renderer）
const app = PIXI.Application({
    width: 600,
    height: 600,
    antialiasing: true,//抗锯齿
    transparent: false,//背景透明
    resolution: 2,//分辨率
    forceCanvas: false,//是否强制使用canvas渲染模式，默认使用WebGL
    backgroundColor: 0xffffff
})
// 备注
// 1、app.stage是一个舞台对象
// 2、app.stage.addChild(xxx)：将渲染对象添加到舞台
// 3、app.renderer是画布对象
// 4、创建canvas标签后改变canvas的背景色（使用十六进制颜色）
app.renderer.backgroundColor = 0xffffff
// 5、获取画布的高度和宽度
let width = app.renderer.view.width
let height = app.renderer.view.height




```







































































































