<template>
  <div id="app" class="page-wrapper">
    <canvas id="canvas"></canvas>
    <router-link to="/index" class="link-text">首页</router-link>
    <router-link to="/randomParticle" class="link-text">随机粒子</router-link>
    <router-view/>
  </div>
</template>

<script>
  import RoundItem from './utils/canvasUtil'
export default {
  name: 'App',
  data(){
    return {
      initCount: 100,
      roundList: [],//圆的集合
    }
  },
  mounted(){
    this.init()
  },
  methods: {
//初始化画板
    init(){
      let ctx = document.getElementById('canvas'),
        content = ctx.getContext('2d'),
        WIDTH,
        HEIGHT,
        rounds=[]
      WIDTH = document.documentElement.clientWidth
      HEIGHT = document.documentElement.clientHeight
      ctx.width = WIDTH
      ctx.height = HEIGHT
      //绘制圆
      for(let i=0;i<this.initCount;i++){
        // this.roundList.push()
        rounds.push(new RoundItem(i,Math.random()*WIDTH, Math.random()*HEIGHT))
        rounds[i].draw(content)
      }
      function animate(){
        content.clearRect(0,0,WIDTH, HEIGHT)
        for(let k=0;k<rounds.length;k++){
          rounds[k].move(HEIGHT,content)
        }
        requestAnimationFrame(animate)
      }
      animate()
    },
    //
  }
}
</script>

<style lang="scss">
  html body{
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
  .page-wrapper{
    background-color: black;
    width: 100%;
    height: 100vh;
    .link-text{
      color: yellow;
    }
  }
</style>
