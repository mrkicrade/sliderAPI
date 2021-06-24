export function moveRight () {
  this.countInfinity++
  if (!this.auto) this.leftArrowBtn.style.display = 'block'
  const matrix = new WebKitCSSMatrix(this.sliderContainer.style.transform)
  this.sliderContainer.style.transform = `translateX(${matrix.m41 - this.sliderElement.offsetWidth}px)`

  if (this.infinity === true) {
    if (this.countInfinity * this.sliderElement.offsetWidth >= this.api.length * (this.sliderElement.offsetWidth / this.previewType)) {
      this.dataInfinity.forEach(el => this.data.push(el))
      this.renderSlides(this.dataInfinity)
    }
  } else {
    if (this.countInfinity === this.api.length / this.previewType -1) {
      this.rightArrowBtn.style.display = 'none'
    }
  }

}

export function moveLeft () {
  this.countInfinity--
  if (this.countInfinity === 0) {
    this.leftArrowBtn.style.display = 'none'
  }
  this.rightArrowBtn.style.display = 'block'
  const matrix = new WebKitCSSMatrix(this.sliderContainer.style.transform)
  this.sliderContainer.style.transform = `translateX(${matrix.m41 + (this.sliderElement.offsetWidth)}px)`
}