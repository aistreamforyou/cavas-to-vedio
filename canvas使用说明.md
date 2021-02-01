[toc]



# canvas介绍

## 简介

+ canvas是HTML5新增的元素，可通过JavaScript中的脚本绘制图形。
+ 用途：
  + 绘制图形
  + 制作照片
  + 创建动画
  + 实时视频处理和渲染



+ 注意事项：
  + canvas只是一个画布，本身不具备绘图能力，需要使用JavaScript等脚本语言
  + canvas标签允许脚本语言，动态渲染-位图像



## 前端发展

1、文本 + 超链接
2、img标签（1993）
3、Flash
4、HTML5（Audio和video）
5、为了解决只能在web页面中显示静态图片的问题，出现了canvas



## 一句话描述canvas

```
Canvas是为了解决Web页面中只能显示静态图片这个问题而提出的，一个可以使用JavaScript等脚本语言向其中绘制图像的HTML标签
```



## 绘制一个圆的三种方式

+ 使用图片
  + 直接使用图片，增加了一次请求（制作成**精灵图**另说）
  + 不容易修改，维护成本高
+ 使用div + css3
  + 实现简单，代价较小
  + 增加了一个没有意义的节点，不符合语义化变成规范
+ 使用canvas和svg
  + 都可以通过脚本语言动态绘图





## svg与canvas的区别

### 什么是svg

+ Scalable Vector Graphics——可缩放矢量图形
+ 是基于XML，用于描述二维矢量图形的一种图形格式
+ 由W3C制定，是一个开放的标准
+ 是使用XML文档描述来绘图的，可以使用记事本来打开修改



### svg与canvas的区别

+ svg本质上是一种使用XML描述2D图形的语言
  + svg创建的每一个元素都是一个独立的DOM元素
  + 既然是独立的DOM元素，那么就可以使用css和JavaScript来操控DOM
  + 可以对每一个DOM元素进行监听
  + 因为每一个元素都是一个DOM元素，所以修改svg中的DOM元素，系统会自动进行重绘
+ canvas通过JavaScript来绘制的2D图形
  + canvas只是一个html元素，其中的图形不会单独创建DOM元素，因此不能通过JavaScript操控canvas内单独的图形，不能对其中的具体图形进行监控
  + canvas图形一旦被绘制完成，就不会得到浏览器的关注
  + 如果位置发生变化，整个场景需要重绘，包括任何或许已被图形覆盖的对象
+ **canvas是基于像素的即时模式图形系统，绘制完对象后不保存对象到内存中，当再次需要这个对象时，需要重绘**
+ **svg是基于形状的保留模式图形系统，绘制完对象后会将其保存到内存中，需要修改这个对象时，直接修改即可**

| canvas                                   | svg                                                |
| ---------------------------------------- | -------------------------------------------------- |
| 依赖分辨率（位图）                       | 不依赖分辨率（矢量图）                             |
| 单个HTML元素                             | 每一个图形都是一个DOM元素                          |
| 只能通过脚本语言绘制图形                 | 可以通过css，也可以通过脚本语言绘制                |
| 不支持事件处理程序                       | 支持事件处理程序                                   |
| 弱的文本渲染能力                         | 最适合带有大型渲染区域的应用程序（比如：谷歌地图） |
| 图面较小，对象数量较大（>10k）时性能最佳 | 对象数量较小（<10k），图面更大时性能更佳           |


# 应用场景
## 绘制图标
+ 数据可视化的js库，大部分都是使用canvas实现的（例如：ECharts）

## 小游戏
+ Canvas因其独特的性质可以说是Web有媳的不二之选，基本上所有的HTML5游戏引擎都是基于canvas开发的
+ 用Canvas作为游戏引擎的理由：
  + Canvas不需要借助任何插件就可以在网页中绘图
  + 其强大的绘图API可以操纵页面上的每一个元素

## 活动页面
+ 抽奖页面
+ 刮刮乐页面

## 小特效
+ 纸片下落
+ loading特效

## 炫酷背景
+ 3D线条
+ 气泡背景
+ 星空流星
+ 代码雨


# 开始制作Canvas
Canvas标签，如果没有设置宽高，则会使用默认值：300*150
设置canvas宽高的三种方式：HTML, CSS, JS
CSS设置canvas的宽高有缺陷（变形）：
  使用CSS设置Canvas的宽高，画布就会按照300*150的比例进行缩放，也就是将300*150的页面显示在你设置的容器内（例如：400*400）

## 获取canvas对象
```js
canvas.getContext(contextId,contextAttributes)
//contextId的可选项如下：
// 1、2d：代表一个二维渲染上下文
// 2、webgl或experimental-webgl：代表一个三维渲染上下文
// 3、webgl2：代表一个三维渲染上下文，只能在浏览器中实现WebGL版本2（OpenGL ES3.0）

// contextAttributes 不经常用到
```

## 绘制路径
+ fill()：填充路径
+ stroke()：描边
+ arc()：创建圆弧
+ rect()：创建矩形
+ fillRect()：绘制矩形路径区域
+ strokeRect()：绘制矩形路径描边
+ clearRect()：在给定的矩形内清除指定的像素
+ arcTo()：创建两切线之间的弧/曲线
+ beginPath()：起始一条路径，或重置当前路径
+ moveTo()：把路径移动到画布中的指定点，不创建线条
+ lineTo()：添加一个新点，然后再画布中创建此哦那个该点到最后指定点的线条
+ closePath()：创建从当前点回到起始点的路径
+ clip()：从原始画布剪切任意形状和尺寸的区域
+ quadraticCurveTo()：创建二次方贝塞尔曲线
+ bezierCurveTo()：创建三次方贝塞尔曲线
+ isPointInPath()：如果指定的点位于当前路径中，则返回true，否则返回false


## 使用canvas画一个点
```js
let canvas = document.getElementById('canvas')
let context = canvas.getContext('2d')
let cw = canvas.width = 400
let ch = canvas.height = 400
context.beginPath()

context.arc(100,100,1,0,Math.PI*2,true)
context.closePath()
context.fillStyle = 'rgb(255,255,255)'
context.fill()

``` 

## 绘制弧/曲线
```js
arc(x,y,r,sAngle,eAngle,counterClockWise)
```
1、x：圆心的x坐标
2、y：圆心的y坐标
3、r：半径
4、sAngle：起始角
5、eAngle：结束角
6、counterClockWise：false为顺时针，true为逆时针


## 绘制直线
```js
let canvas = document.getElementById('canvas')
let context = canvas.getContext()
let cw = canvas.width = 400
let ch = canvas.height = 400
context.beginPath()
context.moveTo(50,50)
context.lineTo(100,100)
context.strokeStyle = '#fff'
context.stroke()
```
**注意事项：**
+ 如果没有moveTo，那么第一次lineTo就被是为moveTo
+ 每次lineTo后如果没有moveTo，那么下次lineTo的开始点为前一次lineTo的结束点


**给绘制的直线添加样式**
+ lineGap：设置或返回线条结束端点样式
+ lineJoin：设置或返回两条线相交时，所创建的拐角类型
+ lineWidth：设置或返回当前线条的宽度
+ miterLimit：设置或返回最大斜接角度


## 绘制矩形
```js
let canvas = document.getElementById('canvas')
let context = canvas.getContext()
let cw = canvas.width = 400
let ch = canvas.height = 400
context.beginPath()
context.fillStyle = '#fff'
context.fillRect(10,10,100,100)
context.strokeStyle = '#fff'
context.strokeRect(130,10,100,100)
```

## 颜色、样式和阴影
+ fillStyle：设置或返回用于填充绘画的颜色，渐变或模式
+ strokeStyle：设置或返回用于笔触的颜色，渐变或模式
+ shadowColor：设置或返回用于阴影的颜色
+ shadowBlur：设置或返回阴影的模糊级别
+ shadowOffsetX：设置或返回阴影距矩形的水平距离
+ shadowOffsetY：设置或返回阴影距矩形的垂直距离


## 设置阴影
```js
let canvas = document.getElementById('canvas')
let context = canvas.getContext()
let cw = canvas.width = 400
let ch = canvas.height = 400
context.beginPath()
context.arc(100,100,50,0,Math.PI*2,false)
context.fillStyle = '#fff'
context.shadowBlur = 20
context.shadowColor = '#fff'
context.fill()

```

## 设置渐变
+ createLinearGradient：创建线性渐变（用在画布内容上）
+ createPattern：在指定的方向上重复指定的元素
+ createRadialGradient：创建放射状/环形的渐变（用在画布的内容上）
+ addColorStop：规定渐变对象中的颜色和停止位置

```js
createLinearGradient(x0,y0,x1,y1)
```
+ x0：开始渐变的x坐标
+ y0：开始渐变的y坐标
+ x1：结束渐变的x坐标
+ y1：结束渐变的y坐标

```js
gradient.addColorStop(stop, color)
```
+ stop：介于0.0与1.0之间的值，表示渐变中开始与结束之间的位置
+ color：在结束位置显示的css颜色值


```js
let canvas = document.getElementById('canvas')
let context = canvas.getContext()
let cw = canvas.width = 400
let ch = canvas.height = 400

let grd = context.createLinearGradient(100,100,100,200)
grd.addColorStop(0,'pink')
grd.addColorStop(1,'white')
context.fillStyle = grd
context.fillRect(100,100,200,200)
```

## 图形转换
+ scale()：缩放当前绘图至更大或更小
+ rotate()：旋转当前绘图
+ translate()：重新映射画布上的（0，0）位置
+ transform()：替换绘图的当前转换矩阵
+ setTransform()：将当前转换重置为单位矩阵，然后运行transform()

### 缩放
```js
let canvas = document.getElementById('canvas')
let context = canvas.getContext()
let cw = canvas.width = 400
let ch = canvas.height = 400

context.strokeStyle = 'white'
context.strokeRect(5,5,50,25)
context.scale(2.2)
context.strokeRect(5,5,50,25)
context.scale(2.2)
context.strokeRect(5,5,50,25)

```

# 怎么实现随机粒子
## 随机粒子特效分析
粒子特效的特点
+ 粒子
+ 规则图形
+ 随机
+ 数量多


## 实现随机粒子特效——使随机粒子动起来——
案例：见app.vue的背景图






































