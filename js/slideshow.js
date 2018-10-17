/*
  Switch slides when the left/right arrow icon is clicked
  reference: https://www.w3schools.com/howto/howto_js_slideshow.asp
*/
// Manual slideshow
function changeSlide(n) {
  showSlide(index += n)
}

function showSlide(n) {
  const slides = document.getElementsByClassName('slideshow-img')

  // If the current slide is the last slide
  if (n > slides.length) {
    index = 1
    // If the current slide is the first slide
  } else if (n < 1) {
    index = slides.length
  }

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  // Show only the next slide
  slides[index - 1].style.display = 'block'
}

// Automatic slideshow
function carousel() {
  const slides = document.getElementsByClassName('slideshow-img')
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  slideIndex++
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = 'block'
  setTimeout(carousel, 3000)
}

let index = 1
let slideIndex = 0

// Manual slideshow
showSlide(index)

// Automatic slideshow
carousel()
