/*
 Open an image in modal window
 */
const galleryImgId = document.getElementsByClassName('photos')
const modalBack = document.getElementById('modal')
const modalHtml = []
const country = document.getElementById('country').textContent.toLowerCase()
const franceTxt = [
  'Paris, Eiffel Tower',
  'Paris, Palace of Versailles',
  'Paris,Seine River',
  'Renne, Street'
]
const croatiaTxt = [
  'Paris, Eiffel Tower',
  'Paris, Palace of Versailles',
  'Paris,Seine River',
  'Renne, Street'
]
const germanyTxt = [
  'Paris, Eiffel Tower',
  'Paris, Palace of Versailles',
  'Paris,Seine River',
  'Renne, Street'
]
// Set the text array
switch (country) {
  case 'france':
    var text = franceTxt
  case 'croatia':
    var text = croatiaTxt
  case 'germany':
    var text = germanyTxt
}

// addModalDivs(): Get the gallery images, replicate them with
// new IDs(modal-imageX) and add the corresponding texts(modal-textX)
function addModalDivs() {
  for (let i = 0; i < galleryImgId.length; i++) {
    let j = i + 1
    const src = galleryImgId[i].getAttribute('src')
    modalHtml.push('<img class="modal-image" id="modal-image' + j + '" src="' + src + '" alt="">' + '<p class="modal-text" id="modal-text' + j + '">' + text[i] + '</p>')
  }
  modalHtml.push('<div id="close">close</div>')
  modalBack.insertAdjacentHTML('afterend', modalHtml.join(' '))
}

// openmodal(): Show the modal window
function openModal() {
  for (let i = 0; i < galleryImgId.length; i++) {
    const modalImgId = 'modal-image' + (i + 1)
    const modalTxtId = 'modal-text' + (i + 1)
    const modalImg = document.getElementById(modalImgId)
    const modalTxt = document.getElementById(modalTxtId)
    const galleryImg = galleryImgId[i]
    const closeButton = document.getElementById('close')
    galleryImg.addEventListener('click', () => {
      modalBack.style.display = 'block'
      modalImg.style.display = 'block'
      modalTxt.style.display = 'block'
      closeButton.style.display = 'block'
      // Add an eventlistener to close the modal window
      closeModal(modalImgId, modalTxtId)
    })
  }
}

// hideElements(): Hide the modal window
function hideElements(closeImg, closeTxt) {
  closeImg.style.display = 'none'
  modalBack.style.display = 'none'
  closeTxt.style.display = 'none'
  // Add an eventlistener to open the modal window
  openModal()
}

// closeModal(): Call hideElements() when the area 
// around the modal window image is clicked
function closeModal(closeImgId, closeTxtId) {
  const closeImg = document.getElementById(closeImgId)
  const closeTxt = document.getElementById(closeTxtId)
  modalBack.addEventListener('click', () => {
    hideElements(closeImg, closeTxt)
  })
  const closeButton = document.getElementById('close')
  closeButton.addEventListener('click', () => {
    hideElements(closeImg, closeTxt)
  })
}

// Create divs for the modal window
addModalDivs()
// modal the gallery image
openModal()
