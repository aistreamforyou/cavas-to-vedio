export default class Round_item{
  constructor(index,x,y){
    this.index = index
    this.x = x
    this.y = y
    this.r = Math.random()*2 + 1
    let alpha = (Math.floor(Math.random()*10)+1)/10/2
    this.color = `rgba(255,255,255,${alpha})`
  }
  //画圆
  draw(content){
    content.fillStyle = this.color
    content.shadowBlur = this.r*2
    content.beginPath()
    content.arc(this.x, this.y, this.r, 0, Math.PI*2, false)
    content.closePath()
    content.fill()
  }
  //移动圆
  move(HEIGHT,content){
    this.y-=0.15
    if(this.y<=-10){
      this.y = HEIGHT + 10
    }
    this.draw(content)
  }
}
