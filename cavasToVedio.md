# cavasToVedio

## 绘制动画

````js
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const {width, height} = canvas;

ctx.fillStyle = 'red';

function draw(rotation = 0) {
	ctx.clearRect(0, 0, 1000, 1000);
	ctx.save();
	ctx.translate(width / 2, height / 2);
	ctx.rotate(rotation);
	ctx.translate(-width / 2, -height / 2);
	ctx.beginPath();
	ctx.rect(200, 200, 200, 200);
	ctx.fill();
	ctx.restore();	
}

function update(t) {
draw(t / 500);
requestAnimationFrame(update);
}
update(0);
````



+ 获取MediaStream对象

````js
const stream = cavas.captureStream()
````



+ 创建一个MediaRecorder

````js
const recorder = new MediaRecorder(stream, {mimeType: 'video/webm'})
````



+ 注册ondataavailable事件，将数据记录下来

```js
const data = []
recorder.ondataavailable = function(event){
    if(event.data && event.data.size){
        data.push(event.data)
    }
}
```



+ 在stop事件里，通过Blob对象，将数据写入到页面上的video标签中

```js
recorder.onstop = () => {
    const url = URL.createObjectURL(new Blob(data, {type: 'video/webm'}))
    document.querySelector('#videoContainer').style.display = 'block'
    document.querySelector('video').src = url
}
```



+ 开始录制视频，并设定在6秒内停止录制

```js
recorder.start()

setTimeout(() => {
    recorder.stop()
},6000)
```



## 与音频结合

+ 方案1	添加track到media stream

```

```



+ 方案2	通过ffmpeg的web端来完成

浏览器通过WebAssembly来集成ffmpeg，具体项目如下：

```js
参考项目
https://github.com/ffmpegwasm/ffmpeg.wasm
```

```js
将canvas2video
https://github.com/welefen/canvas2video
```



+ 方案3
+ 方案



## 总结

+ 在需要动态回放的场景里，可以利用canvas来实时创建视频，然后回放，从而避免使用js重新绘制













































