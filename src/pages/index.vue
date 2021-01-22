<template>
  <div>
    <canvas id="canvas" width="1000px" height="600px"></canvas>
  </div>
</template>
<script>
  export default {
    name: 'Index',
    data(){
      return {

      }
    },
    mounted(){
      // this.draw()
      this.testGradient()
    },
    methods: {
      //渐变
      testGradient(){
        let canvas = document.getElementById('canvas')
        let context = canvas.getContext('2d')
        canvas.width = 400
        canvas.height = 400
        let grd = context.createLinearGradient(100,100,100,300)
        grd.addColorStop(0,'pink')
        grd.addColorStop(0.3,'blue')
        grd.addColorStop(0.5,'orange')
        grd.addColorStop(0.7,'green')
        grd.addColorStop(1,'red')
        context.fillStyle = grd
        context.fillRect(100,100,200,200)
      },
      //绘制动画
      draw(){
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
      }
    }
  }
</script>
<style scoped lang="scss">

</style>
