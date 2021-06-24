
export default function () {
  this.imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target
        // console.log("lazy loading ", lazyImage)
        lazyImage.src = lazyImage.dataset.src
      }
    })
  })
}
