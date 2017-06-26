class Slide {
  constructor (el, func) {
    this.el = el
    this.callback = func
    this.width = this.el.offsetWidth
    this.initEvent()
  }
  initEvent () {
    let el = this.el
    el.addEventListener('touchstart', this.touchStart.bind(this))
    el.addEventListener('touchmove', this.touchMove.bind(this))
    el.addEventListener('touchend', this.touchEnd.bind(this))
  }
  touchStart (e) {
    let touches = e.touches[0]
    this.startStatus = {
      x: touches.pageX,
      time: Date.now()
    }
    this.validSlide = false
  }
  touchMove (e) {
    let touches = e.touches[0]
    e.preventDefault()

    this.endStatus = {
      x: touches.pageX,
      time: Date.now()
    }
    this.delta = {
      x: this.endStatus.x - this.startStatus.x,
      time: this.endStatus.time - this.startStatus.time
    }
    this.validSlide = true
  }
  touchEnd () {
    if (!this.validSlide) return
    let deltaX = Math.abs(this.delta.x)
    let dir = this.delta.x / deltaX
    let con = deltaX > this.width / 3 || this.delta.time < 250 && deltaX > 20
    con && this.callback(dir)
  }
}

export default Slide
