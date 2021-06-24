export default function checkMediaQuery () {
  if (this.sliderElement.offsetWidth <= 768) {
    this.previewType = 1
    this.calculateSize()
  } else if (this.sliderElement.offsetWidth > 768 && this.sliderElement.offsetWidth <= 1024) {
    this.previewType = 3
    this.calculateSize()
  } else if (this.sliderElement.offsetWidth > 1024) {
    this.previewType = 6
    this.calculateSize()
  }
}
