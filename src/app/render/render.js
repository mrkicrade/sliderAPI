export function render () {
  this.sliderElement = document.getElementById(this.el)
  this.sliderElement.className = 'slider'
  this.sliderContainer = document.createElement('div')
  this.sliderContainer.className = 'slider__slider-container'
  this.sliderElement.appendChild(this.sliderContainer)
  this.leftArrowBtn = document.createElement('button')
  this.leftArrowBtn.className = 'slider__left-arrow-btn'
  this.rightArrowBtn = document.createElement('button')
  this.rightArrowBtn.className = 'slider__right-arrow-btn'
  this.sliderElement.appendChild(this.leftArrowBtn)
  this.sliderElement.appendChild(this.rightArrowBtn)
  this.leftArrow.classList.add('slider__left-arrow-btn__left', 'fas', 'fa-chevron-left')
  this.rightArrow.classList.add('slider__right-arrow-btn__right', 'fas', 'fa-chevron-right')
  this.leftArrowBtn.appendChild(this.leftArrow)
  this.rightArrowBtn.appendChild(this.rightArrow)
  this.leftArrowBtn.style.display = 'none'
}

export function renderSlides (data) {
  this.sliderContainer.style.width = `${data.length * (this.sliderElement.offsetWidth / this.previewType)}px`
  data.forEach(slide => {
    const slideImg = document.createElement('img')
    slideImg.className = 'slider__link__img'
    slideImg.style.height = `${(9 * (this.sliderElement.offsetWidth / this.previewType)) / 16}px`
    if (this.lazyLoad === true) {
      slideImg.setAttribute('data-src', slide.url)
    } else {
      slideImg.src = slide.url
    }
    if (this.lazyLoad === true) {
      this.imageObserver.observe(slideImg)
    }
    const slideTitle = document.createElement('h1')
    // slideTitle.innerText = slide.title
    slideTitle.innerText = 'Title'
    const slideLink = document.createElement('a')
    slideLink.className = 'slider__link'
    // slideLink.href = slide.redirectLink
    slideLink.href = slide.thumbnailUrl
    slideLink.target = '_blank'
    slideLink.appendChild(slideImg) 
    slideLink.appendChild(slideTitle)
    const slideContainer = document.createElement('div')
    slideContainer.className = 'slider__slider-container__slide'
    slideContainer.style.width = `${this.sliderElement.offsetWidth / this.previewType}px`
    slideContainer.appendChild(slideLink)
    this.sliderContainer.appendChild(slideContainer)
  })
}

export function autoLoad(){
  if (this.auto) {
    this.rightArrowBtn.style.display = 'none'
    setInterval(() => {
      this.moveRight()
    } , 3000)
  }
}

export function calculateSize () {
  this.sliderContainer.style.width = `${this.api.length * (this.sliderElement.offsetWidth / this.previewType)}px`
  document.querySelectorAll('.slider__slider-container__slide').forEach(el => {
    el.style.width = `${this.sliderElement.offsetWidth / this.previewType}px`
    el.childNodes[0].childNodes[0].style.height = `${(9 * (this.sliderElement.offsetWidth / this.previewType)) / 16}px`
  })
}
