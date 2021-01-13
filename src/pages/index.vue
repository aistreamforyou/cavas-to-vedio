<template>
  <div>
    <canvas width="1000px" height="600px"></canvas>
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
      this.draw()
    },
    methods: {
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
