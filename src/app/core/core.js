import { render } from '../render/render'
import { moveRight, moveLeft } from '../events/events'
import { renderSlides } from '../render/render'
import { calculateSize } from '../render/render'
import { autoLoad } from '../render/render'
import { httpService } from '../service/axios'

export default function initialize () {
  httpService.get(`${this.api}/photos`)
    .then(response => {
      this.api = response.data
      this.dataInfinity = [...this.api]
      this.render = render
      this.renderSlides = renderSlides
      this.calculateSize = calculateSize
      this.render()
      this.renderSlides(this.api)
      this.checkScreenResolution()
      this.autoLoad = autoLoad
      this.autoLoad()
      this.moveLeft = moveLeft
      this.moveRight = moveRight
      this.leftArrow.addEventListener('click', this.moveLeft.bind(this))
      this.rightArrow.addEventListener('click', this.moveRight.bind(this))
      window.addEventListener('resize', this.checkScreenResolution.bind(this))
    })
    .catch(e => console.log(e))
  
}